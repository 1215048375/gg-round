let globalTodoId = 0

export const TYPE_ADD_TODO = 'ADD_TODO'
export const TYPE_TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(text) {
    return {
        type: TYPE_ADD_TODO,
        text: text,
        id: globalTodoId++,
    }
}


export function toggleTodo(id) {
    return {
        type: TYPE_TOGGLE_TODO,
        id: id
    }
}
