// 创建store
import {createStore,applyMiddleware} from 'redux'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import combineReducers from './reducer'
//调试工具
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store