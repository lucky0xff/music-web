import {CHANGE_TOP_BANNERS} from './constant'
import {getTopBanners} from '@/service/recommend'

const ChangeTopBannerAction = (response)=>({
  type:CHANGE_TOP_BANNERS,
  topBanners:response.banners
})

export const getTopBannerAction= () => {
  return dispatch =>{
    getTopBanners().then(response=>{
      dispatch(ChangeTopBannerAction(response))
    })
  }
}