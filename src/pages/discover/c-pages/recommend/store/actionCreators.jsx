import { getHotRecommends, getTopBanners,getNewAlbums } from '@/service/recommend'
import * as actionTypes from './constants'

const changeTopBannerAction = (response)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:response.banners
})

const changeHotRecommendAction = (response) =>({
  type:actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:response.result
})

const changeNewAlbumsAction = (response) => ({
  type:actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums:response.products
})

// 其实就是异步action 所谓的异步action 指action返回的是函数
export const getTopBannerAction = ()=>{
  return dispatch => {
    getTopBanners().then(response=>{
      // 派发到redux中
      dispatch(changeTopBannerAction(response))
    })
  }
}

export const getHotRecommendsAction = (limit)=> {
  return dispatch => {
    getHotRecommends(limit).then(response=>{
      // 派发到redux中
      dispatch(changeHotRecommendAction(response))
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(response=>{
      // 派发到redux中 传入对象 执行reducer
      dispatch(changeNewAlbumsAction(response))
    })
  }
}