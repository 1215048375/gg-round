import { TYPE_ADD_TODO, TYPE_TOGGLE_TODO, TYPE_FILTER_LIST, LIST_TYPE_ALL } from '../actions/'
import { combineReducers } from 'redux'

const todo = (state = {}, action) => {
    switch(action.type) {
        case TYPE_ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                isFinished: false
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

const filterType = (state = LIST_TYPE_ALL, action) => {
    console.log('<<filterType>>')
    console.log(state)
    switch(action.type) {
        case TYPE_FILTER_LIST:
            if (action.listType.length > 0) {
                return action.listType
            }
            return state
        default:
            return state
    }
}

export default combineReducers({
    todos,
    filterType
})







