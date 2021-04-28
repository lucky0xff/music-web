import React,{ useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSimiSongsAction } from '../../store/actionCreators'

import { PlayerReleventWrapper } from './style'
import HYThemeHeaderPlayer from '@/components/theme-header-player'

export default function HYPlayerRelevent() {
  // props and state
  // redux hools
  const dispatch = useDispatch()
  const { currentSimiSongs } = useSelector(state=>({
    currentSimiSongs: state.getIn(["player","currentSimiSongs"])
  }),shallowEqual)
  // other hooks
  useEffect(() => {
    dispatch(getSimiSongsAction(1327277362))
  }, [dispatch])
  return (
    <PlayerReleventWrapper>
      <HYThemeHeaderPlayer title="相似歌曲" />

      {
        currentSimiSongs.map((item,index) =>{
          return (
            <div className="songs" key={index}>
              <div className="song-item">
                <div className="info">
                  <div className="title">
                    <a href="/todo">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="/todo">{item.artists && item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item play"></button>
                  <button className="item add"></button>
                </div>
              </div>
            </div>
          )
        })
      }
      
    </PlayerReleventWrapper>
  )
}
