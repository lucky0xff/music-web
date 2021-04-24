import React from 'react'
import { HotRadioWrapper } from './style'
import { hotRadios } from '@/common/local-data'

export default function HYHotRadio() {
  return (
    <HotRadioWrapper>
      <div className="header">
        <span className="title">热门主播</span>
      </div>
      <div className="content">
      {
        hotRadios.map((item,index)=>{
          return (
            <div className="info" key={item.name}>
              <img alt="" src={item.picUrl}></img>
              <div className="singer">
                <a href="/todo">{item.name}</a>
                <div className="singer-desc">{item.position}</div>
              </div>
            </div>
          )
        })
      }
        
      </div>
    </HotRadioWrapper>
  )
}
