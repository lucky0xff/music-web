import React,{ useEffect } from 'react'
import { Slider } from 'antd';
import { PlayerBarWrapper,Control, PlayInfo,Operator} from './style'
import { getSongsDetailAction } from '../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSizeImage,formatDate } from '@/utils/format-utils'

export default function HYAppPlayBar() {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"])
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getSongsDetailAction(347230))
  }, [dispatch])

  // other handle
  const { picUrl,name } = (currentSong && currentSong.al) || ""
  const singer = (currentSong.ar && currentSong.ar[0].name) || ""
  const duration = (currentSong && currentSong.dt) || ""
  
  // render
  return (
    <PlayerBarWrapper>
      <div className="content">
        <Control>
          <button className="btn prev"></button>
          <button className="btn play"></button>
          <button className="btn next"></button>
        </Control>

        <PlayInfo>
          <div className="image">
            <img src={getSizeImage(picUrl,35)} alt={name}></img>
            <a href="/todo">{name}</a>
          </div>
          <div className="info">
            <div className="song">
              <span className="name">{name}</span>
              <span className="singer">{singer}</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30}/>
              <div className="time">
                <span className="now">01:53</span>
                <span className="divider">/</span>
                <span className="total">{formatDate(duration,"mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator>
          <div className="left">
            <button className="btn favor"></button>
            <button className="btn share"></button>
          </div>
          <div className="right">
            <button className="btn volume"></button>
            <button className="btn loop"></button>
            <button className="btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlayerBarWrapper>
  )
}
