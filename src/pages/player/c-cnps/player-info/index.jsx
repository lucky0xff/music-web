import React from 'react'
import { PlayerInfoWrapper,InfoLeft,InfoRight } from './style'
import HYSongOperationBar from '@/components/song-operation-bar'

export default function HYPlayerInfo() {
  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src="http://p1.music.126.net/wVcHCZ342tluI9R6w4P9xA==/109951163679740060.jpg?param=130y130" alt=""></img>
          <span className="cover"></span>
        </div>
        <div className="link">
          <i className="icon"></i>
          <a href="/todo">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight>
        <div className="song-info">
          <div className="song-name">
            <span className="icon"></span>
            <span className="name">Butterfly</span>
          </div>
          <div className="song-singer">
            <span className="desc">歌手：</span>
            <span className="singer">UMI</span>
          </div>
          <div className="belongs-albumn">
            <span className="desc">所属专辑：</span>
            <span className="album">Buttterfly</span>
          </div>
          <div className="operations">
            <HYSongOperationBar favorTitle="收藏"
                                shareTitle="分享"
                                downloadTitle="下载"
                                commentTitle="(167366)"/>
          </div>
        </div>
        <div className="song-lyric">
          <p>Butterfly, butterfly</p>
          <p>蝴蝶啊蝴蝶</p>
          <p>Where you gonna go tonight</p>
        </div>
        <button className="lyric-control">展开<i className="sprite_icon2"></i></button>
      </InfoRight>
    </PlayerInfoWrapper>
  )
}
