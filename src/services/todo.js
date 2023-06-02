import TodoRepository from "../repository/todo.js";

class Todo {

    static async create (description) {
        try {
            return await TodoRepository.create({ description });
        } catch (e) {
            console.log(e);
        }
    }

    static async delete (id) {
        try {
            return await TodoRepository.delete(id)
        } catch (e) {
            console.log(e);
        }
    }

    static async updateStatus (id, status) {
        try {
            return await TodoRepository.update(id, { completed: status })
        } catch (e) {
            console.log(e);
        }
    }

    static async get (id) {
        try {
            return await TodoRepository.get(id);
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    static async getAll () {
        try {
            return await TodoRepository.getAll();
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}

export default Todo