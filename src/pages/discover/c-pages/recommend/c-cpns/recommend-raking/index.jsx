import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRankingListsAction } from '../../store/actionCreators'

import HYThemeHeaderRecommend from '@/components/theme-header-rcm'
import HYRankingList from '@/components/ranking-list'
import { RankingWrapper } from './style'

export default memo(function HYRecommendRanking() {
  //state

  //redux hooks
  const dispatch = useDispatch()
  const { topRankings,newRankings,orignRankings } = useSelector(state => ({
    topRankings:state.getIn(["recommend","topRankings"]),
    newRankings:state.getIn(["recommend","newRankings"]),
    orignRankings:state.getIn(["recommend","orignRankings"]),
  }),shallowEqual)

  //other hooks
  useEffect(() => {
    // 飙升榜
    dispatch(getRankingListsAction(19723756));
    // 新歌榜
    dispatch(getRankingListsAction(3779629));
    // 原创榜
    dispatch(getRankingListsAction(2884035));
  }, [dispatch])
  
  return (
    <RankingWrapper>
      <HYThemeHeaderRecommend title="榜单"/>
      <div className="content">
        <HYRankingList info={topRankings}/>
        <HYRankingList info={newRankings}/>
        <HYRankingList info={orignRankings}/>
      </div>

    </RankingWrapper>
  )
})
