import * as TodoListAction from '../actions/todoListActions';

const initialState = {
	tasks: [
		{
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

		default: {
			return state;
		}
	}
}
