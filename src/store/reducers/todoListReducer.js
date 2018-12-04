import * as TodoListAction from '../actions/todoListActions';

const initialState = {
    name: 'Patryk'
};

export function todoReducer(state = initialState, action){
    switch(action.type){
        case TodoListAction.CHANGE_NAME: {
            return {...state, name: 'Wojtek'}
        }

        default:{
        return state;
    }
    }
}
