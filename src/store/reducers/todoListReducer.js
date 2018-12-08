import * as TodoListAction from '../actions/todoListActions';

export const idGenerator = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

const initialState = {
	tasks: [
		{
			id: idGenerator(),
			name: 'React',
			description: 'Develop your skills in react'
		},
		{
			id: idGenerator(),
			name: 'Redux',
			description: 'develop your skills in redux'
		}
	],
	showName: '',
	showDescription: ''
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoListAction.ADD_TASK: {
			const task = { id: idGenerator(), name: action.payload.name, description: action.payload.description };
			return { ...state, tasks: [ ...state.tasks, task ] };
		}
		case TodoListAction.DELETE_TASK: {
			return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id) };
		}
		case TodoListAction.SHOW_TASK: {
			return { ...state, showName: action.payload.name, showDescription: action.payload.description };
		}
		case TodoListAction.EDIT_TASK: {
			const foundTask = { ...state.tasks, tasks: state.tasks.filter((task) => task.id !== action.payload.id) };
			const editedTask = { name: action.payload.name, description: action.payload.description };
			return { ...state, tasks: [ foundTask, editedTask ] };
		}

		default: {
			return state;
		}
	}
}
