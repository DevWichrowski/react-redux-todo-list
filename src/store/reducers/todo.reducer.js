import * as TodoActions from '../actions/todo.action';
import { generateId } from '../../utilities/generate-id';

const initialState = {
	tasks: [],
	showTask: {
		title: '',
		description: ''
	}
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoActions.ADD_TASK: {
			const todo = action.payload;

			todo.id = generateId();

			return { ...state, tasks: [ todo, ...state.tasks ] };
		}
		case TodoActions.DELETE_TASK: {
			return { ...state, tasks: state.tasks.filter((todo) => todo.id !== action.payload) };
		}
		case TodoActions.SHOW_TASK: {
			return { ...state, showTask: state.tasks.find((todo) => todo.id === action.payload) };
		}

		default: {
			return state;
		}
	}
}
