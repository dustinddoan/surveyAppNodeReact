import 'materialize-css/dist/css/materialize.min.css'
import React from  'react';
import ReactDOM from  'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'


// return state, initial state, middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

// react component instance, reference to exsiting dom node
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);