import React from 'react'
import { RankingListWrapper } from './style'

import { getSizeImage } from '@/utils/format-utils'

export default function HYRankingList(props) {
  const { info } = props
  const { tracks=[] } = info
  return (
    <RankingListWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl,80)} alt={info.name}/>
          <a href="/todo" className="cover">{info.name}</a>
        </div>
        <div className="info">
          <a href="/todo"><h3>{info.name}</h3></a>
          <div>
            <button className="btn play"></button>
            <button className="btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0,10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="key">{index+1}</div>
                <div className="info">
                  <a href="/todo">{item.name}</a>
                  <div className="operate">
                    <button className="btn play" ></button>
                    <button className="btn addto"></button>
                    <button className="btn favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看更多 &gt;</a>
      </div>
    </RankingListWrapper>
  )
}
