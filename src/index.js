import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }from 'react-redux'
import todos from './reducers'

import Home from './components/Home'

const store = createStore(todos)

render(
    <Provider store={store}>
        <div>
            <Home />
        </div>
    </Provider>
    , document.getElementById('root')
)
