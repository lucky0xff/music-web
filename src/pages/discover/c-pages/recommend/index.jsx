import React, { memo } from 'react'
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style'

import HYTopBanner from './c-cpns/top-banner/index'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/recommend-raking'

// UI组件
// UI组件与容器组件间通过props传递
function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
        
          <HYHotRecommend />
          <HYNewAlbum/>
          <HYRecommendRanking/>

        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
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