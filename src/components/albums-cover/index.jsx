import React from 'react'
import { AlbumsWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default function HYAlbumsCover(props) {
  const {info,width="118px",height="100px",bgp="-570px"} = props
  return (
    <AlbumsWrapper width={width} height={height} bgp={bgp}>
      <div className="album-img">
        <img src={getSizeImage(info.coverUrl || info.coverUrl, 118)} alt={info.albumName}/>
        <a href="/todo" className="cover">{info.albumName}</a>
      </div>

      <div className="album-info">
        <div className="name">{info.albumName}</div>
        <div className="artist">{info.artistName}</div>

      </div>
    </AlbumsWrapper>
  )
}
