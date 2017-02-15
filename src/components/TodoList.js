import React, { PropTypes } from 'react'
import TodoBlock from './Todo'

const TodoListComponent = ({todos}) => {
    return (
        <ul>
            {
                todos.map(todo =>
                    <TodoBlock
                        key={todo.id}
                        {...todo}
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
    }).isRequired).isRequired
}

export default TodoListComponent
