import { getHotRecommends, getTopBanners,getNewAlbums,getRankingList, getSettleSingers } from '@/service/recommend'
import * as actionTypes from './constants'

const changeTopBannerAction = (response) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: response.banners
})

const changeHotRecommendAction = (response) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: response.result
})

const changeNewAlbumsAction = (response) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: response.products
})

const changeTopRankingAction = (response) => ({
  type: actionTypes.CHANGE_TOP_RANKINGS,
  topRankings: response.playlist
})

const changeNewRankingAction = (response) => ({
  type: actionTypes.CHANGE_NEW_RANKINGS,
  newRankings: response.playlist
})

const changeOrignRankingAction = (response) => ({
  type: actionTypes.CHANGE_ORIGN_RANKINGS,
  orignRankings: response.playlist
})

const changeSettelSingersAction = (response) => ({
  type: actionTypes.CHANGE_SETTLE_SINGERS,
  settleSingers: response.artists
})
// 其实就是异步action 所谓的异步action 指action返回的是函数
export const getTopBannerAction = () =>{
  return dispatch => {
    getTopBanners().then(response=>{
      // 派发到redux中
      dispatch(changeTopBannerAction(response))
    })
  }
}

export const getHotRecommendsAction = (limit) => {
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

export const getRankingListsAction = (id) => {
  return dispatch => {
    getRankingList(id).then((response=>{
      switch (id) {
        case 19723756:
          dispatch(changeTopRankingAction(response))
          break;
        case 3779629:
            dispatch(changeNewRankingAction(response))
            break;
        case 2884035:
          dispatch(changeOrignRankingAction(response))
          break;
        default:
          break;
      }
    }))
  }
}

export const getSettleSingersAction = (limit, cat)=> {
  return dispatch => {
    getSettleSingers(limit, cat).then(response=>{
      dispatch(changeSettelSingersAction(response))
    })
  }
}