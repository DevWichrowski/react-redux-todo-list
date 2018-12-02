export const ADD_TASK = '[TodoList] addTask';
export const DELETE_TASK = '[TodoList] deleteTask';
export const SHOW_TASK = '[TodoList] showTask';

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
export const showTaskAction = (payload) => ({ type: SHOW_TASK, payload });
