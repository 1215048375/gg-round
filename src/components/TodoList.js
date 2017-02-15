import React, { PropTypes } from 'react'
import TodoBlock from './Todo'

const TodoListComponent = ({todos, onTodoClick}) => {
    return (
        <ul>
            {
                todos.map(todo =>
                    <TodoBlock
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )
            }
        </ul>
    )
}

TodoListComponent.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoListComponent
