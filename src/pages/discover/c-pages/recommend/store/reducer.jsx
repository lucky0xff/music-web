// reducer本身是一个函数 接收两个参数：之前的状态(preState) 动作对象(action) 返回新的状态
import * as actionTypes from './constants'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners:[]
})

function reducer(preState = defaultState,action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return preState.set("topBanners",action.topBanners)
    default: //初始化
      return preState
  }
}

export default reducer