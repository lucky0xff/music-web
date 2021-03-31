import {combineReducers} from 'redux-immutable'
import reducer from '@/pages/discover/c-pages/recommend/store/reducer'
export default combineReducers ({
  recommend:reducer
})