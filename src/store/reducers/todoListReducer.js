import * as TodoListAction from '../actions/todoListActions';

const initialState = {
	name: 'zrob bulki',
	description: 'musisz zrobic bulki gosciu'
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoListAction.CHANGE_NAME: {
			return { ...state, name: action.payload.name, description: action.payload.description };
		}

		default: {
			return state;
		}
	}
}
