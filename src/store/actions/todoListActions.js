export const ADD_TASK = '[AddTask] Add task';
export const DELETE_TASK = '[DeleteTask] Delete task from list';
export const SHOW_TASK = 'SHOW TASK action';
export const EDIT_TASK = 'EDIT TASK action';

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
export const showTaskAction = (payload) => ({ type: SHOW_TASK, payload });
export const editTaskAction = (payload) => ({ type: EDIT_TASK, payload });
