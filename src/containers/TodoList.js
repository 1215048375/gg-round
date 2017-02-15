import { connect } from 'react-redux'
import todoListComponent from '../components/TodoList'

const mapStateToProps = (state = [], ownProps) => {
    let returnVal = {
        todos: state
    }
    return returnVal
}

export default connect(mapStateToProps)(todoListComponent)



