import React, { PropTypes } from 'react'

const MyBtn = ({text='clickMe', onClick}) => {
    let input
    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault()
                    if (input.value.trim().length > 0) {
                        onClick(input.value)
                    }
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

MyBtn.PropTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MyBtn
