import React, { memo,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {getTopBannerAction} from './store/actionCreators'

// UI组件
// UI组件与容器组件间通过props传递
function HYRecommend(props) {

  //useSelector提取store中的state
  const recommend = useSelector(state => ({
    topBanners:state.get("recommend").get("topBanners")
  }))

  //useDispatch返回redux中store中对dispatch的引用
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>HYRecommend:{recommend.topBanners.length}</h2>
    </div>
  )
}

// 容器组件
// 使用connect(mapStateToProps,mapDispatchToProps)()创建并暴露一个HYDiscover的容器组件
// 容器组件与redux通过state传递
export default (memo(HYRecommend))



/*
function HYRecommend(props) {
  
  const {getBanners,topBanners} = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      <h2>HYRecommend:{topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners:state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: ()=>{dispatch(getTopBannerAction())}
})

// 容器组件
// 使用connect(mapStateToProps,mapDispatchToProps)()创建并暴露一个HYDiscover的容器组件
// 容器组件与redux通过state传递
export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend))

*/