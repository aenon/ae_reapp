import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'


const initialState = {

}

const state = loadState(initialState, 'mapState')
const store = createStore(reducer, state)
store.subscribe(() => saveState(store.getState()), 'mapState')

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
