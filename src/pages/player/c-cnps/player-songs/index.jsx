import React,{ useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSimiPlayListsAction } from '../../store/actionCreators' 

import { PlayerSongsWrapper } from './style'
import HYThemeHeaderPlayer from '@/components/theme-header-player'
import { getSizeImage } from '@/utils/format-utils';
export default function HYPlayerSongs() {

  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  const { currentSimiPlayLists,currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    currentSimiPlayLists: state.getIn(["player","currentSimiPlayLists"]),
  }),shallowEqual)
  useEffect(() => {
    dispatch(getSimiPlayListsAction(currentSong.id))
  }, [dispatch,currentSong])

  //  render
  return (
    <PlayerSongsWrapper>
      <HYThemeHeaderPlayer title="包含这首歌的歌单" />
      
        {
          currentSimiPlayLists.map(item => {
            return (
              <div className="songs" key={item.id}>
                <div className="song-item">
                  <a className="image" href="/#">
                    <img src={getSizeImage(item.coverImgUrl,50)} alt="" />
                  </a>
                  <div className="info">
                    <a href="/todo" className="name">{item.name}</a>
                    <div className="auchor">
                      by 
                      <a href="/todo" className="nickname">{item.creator.nickname}</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

    </PlayerSongsWrapper>
  )
}
