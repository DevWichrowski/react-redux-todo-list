import * as TodoActions from '../actions/todo.action';
import { generateId } from '../../utilities/generate-id';

const initialState = [
	{id: 'a1', name: 'test'},
	{id: 'a2', name: 'sdadas'}
];

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoActions.ADD_TASK: {
			const todo = action.payload;

			todo.id = generateId();

			return [ todo, ...state ];
		}
		default: {
			return state;
		}
	}
}
