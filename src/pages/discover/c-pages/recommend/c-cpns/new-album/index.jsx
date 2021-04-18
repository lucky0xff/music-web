import React, { memo,useEffect,useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from 'antd';

import HYThemeHeaderRecommend from '@/components/theme-header-rcm'
import HYAlbumsCover from '@/components/albums-cover'
import { getNewAlbumsAction } from '../../store/actionCreators';
import { NEW_ALBUM_LIMIT } from '@/common/constants'
import { AlbumWrapper } from './style'
export default memo(function HYNewAlbum() {
  // state

  // redux hools
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({
    newAlbums:state.getIn(["recommend","newAlbums"])
  }),shallowEqual)

   // other hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUM_LIMIT))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRecommend title="新碟上架"/>
      <div className="content">
        <div className="arrow arrow-left"
             onClick={()=>carouselRef.current.prev()}></div>
        <div className="album">
     
          <Carousel dots={false} ref={carouselRef}>
            {
              [0,1].map(item=>{
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5,(item+1)*5).map( iten =>{
                        return (
                          <HYAlbumsCover key={iten.albumId} info={iten}/>
                        )
                      })
                    }
                  </div> 
                )
              })
            }
          </Carousel>
          
        </div>
        <div className="arrow arrow-right"
             onClick={()=>carouselRef.current.next()}></div>
      </div>

    </AlbumWrapper>
  )
})
