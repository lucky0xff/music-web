import React, { memo,useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HYThemeHeaderRCM from '@/components/theme-header-rcm/index'
import { HotRecommendWrapper } from './style'
import { getHotRecommendsAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import HYSongsCover from '@/components/songs-cover/index'

export default memo(function HYHotRecommend() {
  // state

  // redux hools
  const dispatch = useDispatch()
  const {hotRecommends} = useSelector(state => ({
    hotRecommends:state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}/>
      <div className="recommend-list">
        {
          hotRecommends.map( item =>{
            return <HYSongsCover key={item.name} info={item}></HYSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
