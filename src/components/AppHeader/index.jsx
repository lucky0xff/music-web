import React, { memo } from 'react'
import {NavLink,Route} from 'react-router-dom'

import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import {HeaderWrapper,HeaderLeft,HeaderRight} from '@/components/AppHeader/style'
import {headerLinks} from '@/common/local-data'

export default memo(function HYAppHeader() {
  // 导航
  const showSelectItme = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>{item.name}</NavLink>
      )
    } else {
      if (index === 5) {
        return (
          <a href={item.link}>{item.name}<sup className='hot'>下载客户端</sup></a>
        )
      } else {
        return (
          <a href={item.link}>{item.name}</a>
        )
      }/*  */
    }
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
                  <div key={item.name} className='select-list'>
                    {showSelectItme(item, index)}
                  </div>
                )
              })
            }
          </HeaderLeft>
          <HeaderRight>
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className='center'>创作者中心</div>
          <button>登陆</button>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  )
})
