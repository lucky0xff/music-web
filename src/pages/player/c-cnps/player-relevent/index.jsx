import React from 'react'
import { PlayerReleventWrapper } from './style'
import HYThemeHeaderPlayer from '@/components/theme-header-player'

export default function HYPlayerRelevent() {
  return (
    <PlayerReleventWrapper>
      <HYThemeHeaderPlayer title="相似歌曲" />

      <div className="songs">
        <div className="song-item">
          <div className="info">
            <div className="title">
              <a href="/todo">10k Hours</a>
            </div>
            <div className="artist">
              <a href="/todo">Jhene Aiko/Nas</a>
            </div>
          </div>
          <div className="operate">
            <button className="item play"></button>
            <button className="item add"></button>
          </div>
        </div>
      </div>

      <div className="songs">
        <div className="song-item">
          <div className="info">
            <div className="title">
              <a href="/todo">10k Hours</a>
            </div>
            <div className="artist">
              <a href="/todo">Jhene Aiko/Nas</a>
            </div>
          </div>
          <div className="operate">
            <button className="item play"></button>
            <button className="item add"></button>
          </div>
        </div>
      </div>

      <div className="songs">
        <div className="song-item">
          <div className="info">
            <div className="title">
              <a href="/todo">10k Hours</a>
            </div>
            <div className="artist">
              <a href="/todo">Jhene Aiko/Nas</a>
            </div>
          </div>
          <div className="operate">
            <button className="item play"></button>
            <button className="item add"></button>
          </div>
        </div>
      </div>

      <div className="songs">
        <div className="song-item">
          <div className="info">
            <div className="title">
              <a href="/todo">10k Hours</a>
            </div>
            <div className="artist">
              <a href="/todo">Jhene Aiko/Nas</a>
            </div>
          </div>
          <div className="operate">
            <button className="item play"></button>
            <button className="item add"></button>
          </div>
        </div>
      </div>

      
    </PlayerReleventWrapper>
  )
}
