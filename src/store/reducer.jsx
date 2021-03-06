// 该文件用于汇总所有的reducer
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store/index'
import { reducer as playerReducer} from '@/pages/player/store/index'
// 汇总所有的reducer
export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})