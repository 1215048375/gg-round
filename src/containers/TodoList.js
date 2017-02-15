import { connect } from 'react-redux'
import todoListComponent from '../components/TodoList'
import { toggleTodo } from '../actions'

const mapStateToProps = (state = {}, ownProps) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoListComponent)

