import React, {PropTypes} from 'react'
import {LIST_TYPE_ALL, LIST_TYPE_FINISHED, LIST_TYPE_UNFINISHED} from '../actions'

const FilterBtn = ({filterBtnClick}) => {
    return (
        <ul>
            <li><button onClick={() => filterBtnClick(LIST_TYPE_ALL)}>{LIST_TYPE_ALL}</button></li>
            <li><button onClick={() => filterBtnClick(LIST_TYPE_UNFINISHED)}>{LIST_TYPE_UNFINISHED}</button></li>
            <li><button onClick={() => filterBtnClick(LIST_TYPE_FINISHED)}>{LIST_TYPE_FINISHED}</button></li>
        </ul>
    )
}

FilterBtn.PropTypes = {
    filterBtnClick: PropTypes.func.isRequired
}

export default FilterBtn




