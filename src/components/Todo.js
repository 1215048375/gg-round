import React, {PropTypes} from 'react'

const TodoComponent = ({id, text, isFinished = false, onClick}) => {
    return (
        <li id={id} onClick={onClick} style={{textDecoration: isFinished ? 'line-through' : 'none'}}>{text}</li>
    )
}

TodoComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default TodoComponent
