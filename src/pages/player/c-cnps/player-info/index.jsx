import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSongLyricAction,getSongCommentsAction } from '../../store/actionCreators' 
import { getSizeImage } from '@/utils/format-utils';

import { PlayerInfoWrapper,InfoLeft,InfoRight } from './style'
import HYSongOperationBar from '@/components/song-operation-bar'

export default function HYPlayerInfo() {
  // props and state
  // 展开
  const [isSpread, setIsSpread] = useState(false);

  // redux hooks
  const dispatch = useDispatch()
  const { currentSong,currentLyric,currentComments} = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    currentLyric: state.getIn(["player","currentLyric"]),
    currentComments: state.getIn(["player","currentComments"]),
  }),shallowEqual)

  // const id = currentSong && currentSong.id
  // console.log(id) 

  // other hooks
  useEffect(() => {
    dispatch(getSongLyricAction(1327277362))
    dispatch(getSongCommentsAction(1327277362))
  }, [dispatch])

  // other handle
  const totalLyricCount = isSpread ? currentLyric.length : 12

  // render
  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al && currentSong.al.picUrl,130)} alt=""></img>
          <span className="cover"></span>
        </div>
        <div className="link">
          <i className="icon"></i>
          <a href="/todo">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="song-info">
          <div className="song-name">
            <span className="icon"></span>
            <span className="name">{currentSong.name}</span>
          </div>
          <div className="song-singer">
            <span className="desc">歌手：</span>
            <span className="singer">{currentSong.ar && currentSong.ar[0].name}</span>
          </div>
          <div className="belongs-albumn">
            <span className="desc">所属专辑：</span>
            <span className="album">{currentSong.al && currentSong.al.name}</span>
          </div>
          <div className="operations">
            <HYSongOperationBar favorTitle="收藏"
                                shareTitle="分享"
                                downloadTitle="下载"
                                commentTitle={currentComments.total}/>
          </div>
        </div>
        <div className="song-lyric">
        {
          currentLyric.slice(0,totalLyricCount).map((item,index)=>{
            return (
                <p key={index}>{item.content}</p>
            )
          })
        }
        </div>
        <button className="lyric-control"
                onClick={e=>setIsSpread(!isSpread)}>
          { isSpread? "收起":"展开" }
          <i className="sprite_icon2"></i>
        </button>
      </InfoRight>
    </PlayerInfoWrapper>
  )
}
