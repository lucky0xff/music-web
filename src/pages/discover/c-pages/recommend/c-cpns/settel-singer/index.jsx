import React from 'react'
import { SettleSingerWrapper } from './style'
export default function HYSettleSinger() {
  return (
    <SettleSingerWrapper>
      <div className="header">
        <span className="title">入驻歌手</span>
        <a href="/todo">查看全部&nbsp;&gt;</a>
      </div>

      <div className="content">
      {/* 给 singer 一个父元素 然后触发 BFC 消除边距重叠 */}
        <div className="wrapper"> 
          <div className="singer">
            <img alt="" src="http://p2.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62"></img>
            <div className="info">
              <div className="singer-name">Fine乐团</div>
              <div className="singer-disc">中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。</div>
            </div>
          </div>

          <div className="singer">
            <img alt="" src="http://p2.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62"></img>
            <div className="info">
              <div className="singer-name">Fine乐团</div>
              <div className="singer-disc">中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。</div>
            </div>
          </div>

          <div className="singer">
            <img alt="" src="http://p2.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62"></img>
            <div className="info">
              <div className="singer-name">Fine乐团</div>
              <div className="singer-disc">中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。</div>
            </div>
          </div>

          <div className="singer">
            <img alt="" src="http://p2.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62"></img>
            <div className="info">
              <div className="singer-name">Fine乐团</div>
              <div className="singer-disc">中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。</div>
            </div>
          </div>

          <div className="singer">
            <img alt="" src="http://p2.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=62y62"></img>
            <div className="info">
              <div className="singer-name">Fine乐团</div>
              <div className="singer-disc">中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。</div>
            </div>
          </div>  
        </div>
      </div>
      
      <div className="footer">
        <div className="btn">
          <a href="https://music.163.com/st/musician">申请成为网易音乐人</a>
        </div>
      </div>

    </SettleSingerWrapper>
  )
}
