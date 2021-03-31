import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import combineReducers from './combineReducers'

export default createStore (combineReducers,composeWithDevTools(applyMiddleware(thunk)))