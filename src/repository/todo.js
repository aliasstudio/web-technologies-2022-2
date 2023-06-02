import api from "../services/api.js";

const TodoRepository = {
    async create (description) {
        return await api('/todo', {
            method: 'POST',
            body: JSON.stringify(description)
        });
    },

    async update (id, status) {
        return await api('/todo/' + id, {
            method: 'PUT',
            body: JSON.stringify(status),
        });
    },

    async delete (id) {
        return await api('/todo/' + id, {
            method: 'DELETE',
        });
    },

    async get(id) {
        return await api('/todo/' + id);
    },

    async getAll() {
        return await api('/todo');
    },
}

export default TodoRepository