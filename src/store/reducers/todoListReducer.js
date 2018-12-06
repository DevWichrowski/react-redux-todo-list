import * as TodoListAction from '../actions/todoListActions';

const idGenerator = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

const initialState = {
	tasks: [
		{
			id: idGenerator(),
			name: 'zrob bulki',
			description: 'musisz zrobic bulki gosciu'
		}
	]
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoListAction.ADD_TASK: {
			const task = { name: action.payload.name, description: action.payload.description };
			return { ...state, tasks: [ ...state.tasks, task ] };
		}
		case TodoListAction.DELETE_TASK: {
			return { ...state, tasks: [ state.tasks.filter((task) => task.id !== action.payload) ] };
		}

		default: {
			return state;
		}
	}
}
