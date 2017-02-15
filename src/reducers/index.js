import { TYPE_ADD_TODO, TYPE_TOGGLE_TODO } from '../actions/'

const todo = (state = {}, action) => {
    switch(action.type) {
        case TYPE_ADD_TODO:
            return {
                id: action.id,
                text: action.text
            }

        case TYPE_TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                isFinished: !state.isFinished
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch(action.type) {
        case TYPE_ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]

        case TYPE_TOGGLE_TODO:
            return state.map( t => {
                return todo(t, action)
            })

        default:
            return state
    }
}

const reducer = (state = {}, action) => {
    return Object.assign({}, state, {
        todos: todos(state.todos, action)
    })
}

export default reducer
