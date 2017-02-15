let globalTodoId = 0

export const TYPE_ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
    return {
        type: TYPE_ADD_TODO,
        text: text,
        id: globalTodoId++
    }
}

