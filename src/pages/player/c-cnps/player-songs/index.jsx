import React from 'react'
import { PlayerSongsWrapper } from './style'
import HYThemeHeaderPlayer from '@/components/theme-header-player'
export default function HYPlayerSongs() {
  return (
    <PlayerSongsWrapper>
      <HYThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        <div className="song-item">
          <a className="image" href="/#">
            <img src="http://p2.music.126.net/pmDC-E_hLZTEHryPwc6qLw==/109951163329754599.jpg?param=50y50" alt="" />
          </a>
          <div className="info">
            <a href="/todo" className="name">变身精致女孩化妆时听的歌</a>
            <div className="auchor">
              by 
              <a href="/todo" className="nickname">肉嘟嘟的小海疼</a>
            </div>
          </div>
        </div>

        <div className="song-item">
          <a className="image" href="/#">
            <img src="http://p2.music.126.net/pmDC-E_hLZTEHryPwc6qLw==/109951163329754599.jpg?param=50y50" alt="" />
          </a>
          <div className="info">
            <a href="/todo" className="name">变身精致女孩化妆时听的歌</a>
            <div className="auchor">
              by 
              <a href="/todo" className="nickname">肉嘟嘟的小海疼</a>
            </div>
          </div>
        </div>

        <div className="song-item">
          <a className="image" href="/#">
            <img src="http://p2.music.126.net/pmDC-E_hLZTEHryPwc6qLw==/109951163329754599.jpg?param=50y50" alt="" />
          </a>
          <div className="info">
            <a href="/todo" className="name">变身精致女孩化妆时听的歌</a>
            <div className="auchor">
              by 
              <a href="/todo" className="nickname">肉嘟嘟的小海疼</a>
            </div>
          </div>
        </div>

        
      </div>
    </PlayerSongsWrapper>
  )
}
