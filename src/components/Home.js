import React from 'react'
import Btn from '../containers/Btn'
import TodoList from '../containers/TodoList'
import FilterBtn from '../containers/FilterBtn'

const Home = () => (
    <div>
        <Btn />
        <FilterBtn />
        <TodoList />
    </div>
)

export default Home