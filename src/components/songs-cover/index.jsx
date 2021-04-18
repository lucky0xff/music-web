import React from 'react'
import { SongsCoverWrapper } from './style'
import { getCount,getSizeImage } from '@/utils/format-utils'

export default function HYSongsCover(props) {

  const {info} = props
  return (
    <SongsCoverWrapper>
      <div className="cover">
        <div className="info">
          <div className="wrapper">
            {/* <img alt={info.name} src={info.picUrl}></img> */}
            <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt={info.name} />
            {/* 毛玻璃 */}
            <div className="cover-top"></div> 
            {/* 按钮 */}
            <span className="icon">
              <i className="left"><span>{getCount(info.playCount)}</span></i>
              <i className="right"></i>

            </span>
          </div>
          <div className="cover-bottom">{info.name}</div>
        </div>
      </div>
      {/* <div className="cover-source">
        by {info.copywriter}
      </div> */}
    </SongsCoverWrapper>
  )
}
