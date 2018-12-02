import * as TodoActions from '../actions/todo.action';

const initialState = [
	{id: 'a1', name: 'test'},
	{id: 'a2', name: 'sdadas'}
];

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case TodoActions.ADD_TASK: {
			const todo = action.payload;
			return [ todo, ...state ];
		}
		default: {
			return state;
		}
	}
}
