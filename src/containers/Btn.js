import { connect } from 'react-redux'
import { addTodo } from '../actions'

import Btn from '../components/Btn'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (text) => dispatch(addTodo(text))
    }
}

const BtnInst = connect(undefined, mapDispatchToProps)(Btn)

export default BtnInst
