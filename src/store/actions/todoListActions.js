export const ADD_TASK = '[AddTask] Add task';
export const DELETE_TASK = '[DeleteTask] Delete task from list';

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
