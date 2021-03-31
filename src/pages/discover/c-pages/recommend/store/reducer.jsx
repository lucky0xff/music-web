import {CHANGE_TOP_BANNERS} from './constant'
import {Map} from 'immutable'
const defaultState = Map({
  topBanners:[]
})

function reducer(preState=defaultState,action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return preState.set("topBanners",action.topBanners)
    default:
      return defaultState
  }
}
export default reducer