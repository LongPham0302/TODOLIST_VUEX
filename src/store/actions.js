export default {
    changeTasks({ commit }, newTasks) {
        commit('CHANGE_TASKS', newTasks)
    },
    toggleForm({ commit }) {
        commit('TOGGLEFORM')
    },
    handleSearch({ commit }, strSearch) {
        commit('HANDLE_SEARCH', strSearch)
    },
    handleSort({ commit }, {
        orderBy,
        orderDir
    }) {
        commit('HANDLE_SORT', { orderBy, orderDir })
    },
    handleDelete({ commit, state }, DeleteTask) {
        let newListTask = state.listTask.filter(item => item.id !== DeleteTask.id);
        commit('CHANGE_TASKS', newListTask);
    },
    handleAddNew({ commit }, obj) {
        commit('HANDLE_ANDDNEW', obj);
    },
    handelEdit({ commit }, objTaskEdit) {
        commit('HANDLE_EDIT', objTaskEdit)
        commit('TOGGLEFORM')
    },
    handleEditTask({ commit, state }, objTaskUpdate) {
        let index = state.listTask.findIndex(item => item.id === objTaskUpdate.id);
        let ListTaskNone = [...state.listTask]

        if (index !== -1) {
            ListTaskNone.splice(index, 1, objTaskUpdate);
            commit('TOGGLEFORM');
            commit('CHANGE_TASKS', ListTaskNone)
        }
    },

}