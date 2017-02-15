import React, { PropTypes } from 'react'

const myBtn = ({text='clickMe', onClick}) => {
    let input
    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault()
                    onClick(input.value)
                    input.value = ''
                }
            }>
                <input type="text" ref={(t) => { input = t}} />
                <button type="submit">
                    {text}
                </button>
            </form>
        </div>
    )
}


myBtn.PropTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default myBtn
