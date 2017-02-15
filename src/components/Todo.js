import React, {PropTypes} from 'react'

const TodoComponent = ({uid, text}) => {
    return (
        <li id={uid}>{text}</li>
    )
}

TodoComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoComponent