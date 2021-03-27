import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'

import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import {HeaderWrapper,HeaderLeft,HeaderRight} from '@/components/AppHeader/style'
import {headerLinks} from '@/common/local-data'

export default memo(function HYAppHeader() {
  // 导航
  const showSelectItme = (item, index) => {
    if (index < 3) {
      return (
        <NavLink activeClassName="current" to={item.link}>{item.title}</NavLink>
      )
    } else {
      if (index === 5) {
        return (
          <a href={item.link}>{item.title}<sup className='hot' target ="_blank">下载客户端</sup></a>
        )
      } else {
        return (
          <a href={item.link} target ="_blank" rel="noreferrer">{item.title} </a>
        )
      }
    }
  }

  const showCurrent = ()=>{
    
  }
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href='/' className='logo sprite_01'>网易云音乐</a>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className='select-list' onClick={showCurrent}>
                    {showSelectItme(item, index)}
                  </div>
                )
              })
            }
          </HeaderLeft>
          <HeaderRight>
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined style={{color:'#6D6D6D',border:'7px' }}/>}/>
          <a className='center' href='/'>创作者中心</a>
          <a className='login'>登录 </a>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  )
})
