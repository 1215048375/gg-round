import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import Btn from '../components/Btn'

const mapStateToProps = (state, ownProps) => {
    return ownProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (text) => dispatch(addTodo(text))
    }
}

const BtnInst = connect(mapStateToProps, mapDispatchToProps)(Btn)

export default BtnInst


