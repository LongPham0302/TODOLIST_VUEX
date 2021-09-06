export default {
    CHANGE_TASKS(state, newTasks) {
        state.listTask = newTasks;
    },
    TOGGLEFORM(state) {
        if (state.isShowForm) state.taskSelected = null;
        state.isShowForm = !state.isShowForm
    },
    HANDLE_SEARCH(state, strSearch) {
        state.strSearch = strSearch;
    },
    HANDLE_SORT(state, { orderBy, orderDir }) {
        state.orderBy = orderBy;
        state.orderDir = orderDir;
    },
    HANDLE_ANDDNEW(state, objTask) {
        state.listTask.push(objTask);
    },
    HANDLE_EDIT(state, objTaskEdit) {
        state.taskSelected = objTaskEdit;
    },

}