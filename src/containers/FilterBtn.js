import { connect } from 'react-redux'
import { filterType } from '../actions'
import FilterBtn from '../components/FilterBtn'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterBtnClick: (t) => dispatch(filterType(t))
    }
}

export default connect(undefined, mapDispatchToProps)(FilterBtn)

