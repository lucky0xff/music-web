import * as actionTypes from './constants'
import { getTopBanners } from '@/service/recommend'

const changeTopBannerAction = (response)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:response.banners
})
// 其实就是异步action 所谓的异步action 指action返回的是函数
export const getTopBannerAction = ()=>{
  return dispatch => {
    getTopBanners().then(response=>{
      // 派发到reducer中
      dispatch(changeTopBannerAction(response))
    })
  }
}