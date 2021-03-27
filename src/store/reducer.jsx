// 该文件用于汇总所有的reducer
// 引入为count服务的reducer
import {combineReducers} from 'redux'
import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store/index'

// 汇总所有的reducer
export default combineReducers({
  recommend:recommendReducer
})