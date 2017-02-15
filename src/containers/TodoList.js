import { connect } from 'react-redux'
import todoListComponent from '../components/TodoList'
import { toggleTodo, LIST_TYPE_ALL, LIST_TYPE_UNFINISHED, LIST_TYPE_FINISHED } from '../actions'

const getVisibleList = (todos, filter) => {
    switch (filter) {
        case LIST_TYPE_ALL:
            return todos
        case LIST_TYPE_FINISHED:
            return todos.filter( t => t.isFinished)
        case LIST_TYPE_UNFINISHED:
            return todos.filter( t => { console.log(t); return t.isFinished === false})
        default:
            return todos
    }
}

const mapStateToProps = (state = {}, ownProps) => {
    return {
        todos: getVisibleList(state.todos, state.filterType)
        //todos: state.todos.filter((todo) => todo.isFinished === false)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoListComponent)

