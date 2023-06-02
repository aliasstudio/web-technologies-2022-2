import Todo from "../services/todo.js";
import loading from "../services/loading.js";

class TodoList {
  el = null;
  todos = [];

  constructor(el) {
    this.el = el;

    this.init().then(res => {
      if(res.length) {
        this.render();
      }
    });
  }

  async init() {
    const response = await Todo.getAll().then(res => res.data);
    this.todos = response;

    return response;
  }

  render() {
    this.el.innerHTML = '<h2>Список задач:</h2>';

    this.todos.forEach(todo => {
      const todoEl = document.createElement('div');
      todoEl.className = 'todo-item';
      todoEl.innerHTML = `
        <div class="text-field">
          <input
            type="text"
            class="text-field__input"
            name="todo-text"
            placeholder="Введите задачу..."
          >
          <input class="todo-status-checkbox" type="checkbox">
        </div>
        <button class="button todo-delete-btn">Удалить</button>`;

      const input = todoEl.querySelector('input[name="todo-text"]');
      input.value = todo.description;

      const deleteBtn = todoEl.querySelector('.todo-delete-btn');
      const checkbox = todoEl.querySelector('.todo-status-checkbox');
      checkbox.checked = todo.completed;

      deleteBtn.addEventListener('click', () => {
        loading.start();
        Todo.delete(todo.id).then(res => {
          if(res) {
            todoEl.remove();
          }
          loading.stop();
        });
      })

      checkbox.addEventListener('click', (e) => {
        e.preventDefault();
        loading.start();
        Todo.updateStatus(todo.id, e.target.checked).then(res => {
          if(res) {
            e.target.checked = !e.target.checked;
          }
          loading.stop();
        });
      })

      this.el.append(todoEl);
    })
  }
}

export default TodoList