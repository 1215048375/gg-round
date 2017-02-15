import { TYPE_ADD_TODO } from '../actions/'

const todo = (state = {}, action) => {
    switch(action.type) {
        case TYPE_ADD_TODO:
            return {
                id: action.id,
                text: action.text
            }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    console.log("=============")
    console.log(state)

    switch(action.type) {
        case TYPE_ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        default:
            return state
    }
}

export default todos
