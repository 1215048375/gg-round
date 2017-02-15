let globalTodoId = 0

export const TYPE_ADD_TODO = 'ADD_TODO'
export const TYPE_TOGGLE_TODO = 'TOGGLE_TODO'
export const TYPE_FILTER_LIST = 'FILTER_LIST'

export const LIST_TYPE_ALL = 'ALL'
export const LIST_TYPE_FINISHED = 'FINISHED'
export const LIST_TYPE_UNFINISHED = 'ACTIVE'

export function addTodo(text) {
    return {
        type: TYPE_ADD_TODO,
        text: text,
        id: globalTodoId++
    }
}


export function toggleTodo(id) {
    return {
        type: TYPE_TOGGLE_TODO,
        id: id
    }
}

export function filterType(listType = LIST_TYPE_ALL) {
    return {
        type: TYPE_FILTER_LIST,
        listType: listType
    }
}
