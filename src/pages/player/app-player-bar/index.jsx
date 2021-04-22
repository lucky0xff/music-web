import React from 'react'

import { Slider } from 'antd';

import { PlayerBarWrapper,Control, PlayInfo,Operator} from './style'

export default function HYAppPlayBar() {
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
            <img src="http://p4.music.126.net/9BgjaSNM9Bmkh5waahv_gQ==/109951165628223126.jpg?param=34y34" alt="星辰大海"></img>
          </div>
          <div className="info">
            <div className="song">
              <span className="name">星辰大海</span>
              <span className="singer">黄霄云</span>
            </div>
            <div className="progress">
              <Slider defaultValue={30}/>
              <div className="time">
                <span className="now">01:53</span>
                <span className="divider">/</span>
                <span className="total">03:27</span>
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
