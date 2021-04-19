// reducer本身是一个函数 接收两个参数：之前的状态(preState) 动作对象(action) 返回新的状态
import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  topBanners:[],
  hotRecommends:[],
  newAlbums:[],

  topRankings:[],
  newRankings:[],
  orignRankings:[],
})

function reducer(preState = defaultState,action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return preState.set("topBanners",action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return preState.set("hotRecommends",action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return preState.set("newAlbums",action.newAlbums)
    case actionTypes.CHANGE_TOP_RANKINGS:
      return preState.set("topRankings",action.topRankings)
    case actionTypes.CHANGE_NEW_RANKINGS:
      return preState.set("newRankings",action.newRankings)
    case actionTypes.CHANGE_ORIGN_RANKINGS:
      return preState.set("orignRankings",action.orignRankings)
    default: //初始化
      return preState
  }
}

export default reducer