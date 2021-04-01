import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-banner/index'

// UI组件
// UI组件与容器组件间通过props传递
function HYRecommend(props) {
  return (
    <div>
      <HYTopBanner/>
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