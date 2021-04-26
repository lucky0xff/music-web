import React,{ useEffect,useRef,useState,useCallback} from 'react'
import { Slider } from 'antd';
import { PlayerBarWrapper,Control, PlayInfo,Operator} from './style'
import { getSongsDetailAction } from '../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSizeImage,formatDate,getPlayMusic } from '@/utils/format-utils'

export default function HYAppPlayBar() {
  // state
  const audioRef = useRef()
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux hooks
  const dispatch = useDispatch()
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"])
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getSongsDetailAction(1327277362))
  }, [dispatch])
  // 不是每次点击按钮都要设置src 所以放在useEffect里比较合适
  useEffect(() => {
    audioRef.current.src = getPlayMusic(currentSong.id)
  }, [currentSong])

  // other handle
  const { picUrl,name } = (currentSong && currentSong.al) || ""
  const singer = (currentSong.ar && currentSong.ar[0].name) || ""
  const duration = (currentSong && currentSong.dt) || ""

  // handle functions
  // 切换播放
  const playMusic = useCallback(()=>{
    isPlaying ? audioRef.current.pause():audioRef.current.play()
    setIsPlaying(!isPlaying)
  },[isPlaying])

  // 播放位置改变时
  const timeUpdate = (e)=>{
    // console.log(e.target.currentTime) 单位：s
    if (!isChanging) {
      setCurrentTime(e.target.currentTime*1000)
      setProgress(currentTime/duration*100)
    }
  }

  const sliderChange = useCallback((value)=>{
    setProgress(value)
    setCurrentTime(value/100*duration)
    setIsChanging(true)
  },[duration])

  const sliderAfterChange = useCallback((value)=>{
    audioRef.current.currentTime = value/100*duration/1000
    setCurrentTime(value/100*duration)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  },[duration,isPlaying,playMusic])

  // render
  return (
    <PlayerBarWrapper>
      <div className="content">
        <Control isPlaying={isPlaying}>
          <button className="btn prev"></button>
          <button className="btn play" onClick={()=>playMusic()}></button>
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
              <Slider defaultValue={30} 
                      value={progress} 
                      onChange={sliderChange} 
                      onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now">{formatDate(currentTime,"mm:ss")}</span>
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

        {/* 播放器 */}
        <audio ref={audioRef} 
               onTimeUpdate={timeUpdate}/>

      </div>
    </PlayerBarWrapper>
  )
}
