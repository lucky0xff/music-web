import React, { memo,useEffect,useRef,useCallback,useState  } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import { Carousel } from 'antd';

import {getTopBannerAction} from '../../store/actionCreators'
import { BannerWrapper,BannerLeft,BannerRight,BannerControl } from './style'

export default memo(function HYTopBanner() {
  // state
  const [currentIndex, setcurrentIndex] = useState(0)

  // 组件与redux关联：获取数据和进行操作
  const {topBanners} = useSelector(state=>({
    topBanners:state.getIn(["recommend","topBanners"])
  }),shallowEqual)
  const dispatch = useDispatch()

  // 其他的hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerChange = useCallback(
    (from,to) => {
      setcurrentIndex(to)
    },
    [],
  )

  // 其他业务逻辑
  // 刚开始的时候topBanners为空 topBanners[currentIndex]的值为undefine 会报错
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl)+"?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage}>
     <div className='banner wrap-v2'>
      <BannerLeft>
      <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
        {
          topBanners.map(item =>{
            return (
              <div key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.typeTitle}></img>
              </div>
            )
          })
        }
      </Carousel>
      </BannerLeft>
      <BannerRight>
        <p className="disc">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </BannerRight>
      <BannerControl>
        <button className="btn left" onClick={()=> bannerRef.current.prev()}></button>
        <button className="btn right" onClick={()=> bannerRef.current.next()}></button>
      </BannerControl>
     </div>
    </BannerWrapper>
  )
})
