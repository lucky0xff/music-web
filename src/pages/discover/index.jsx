import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import {discoverMenu} from '@/common/local-data'
import {DiscoverWrapper,TopMenu} from './style'

export default memo(function HYDiscover(props) {
  const {route} = props
  // 导航
  const showSelectItem = (item,index) =>{
    if(index === 2) {
      return(
        <li className='item' key={item.title}>
          <NavLink to={item.link}>{item.title}<sup className='r-icon' target ="_blank"></sup></NavLink>
        </li>
      )
    } else {
      return(
        <li className='item' key={item.title}>
        <NavLink to={item.link}>{item.title}</NavLink> 
        </li>
      )
    }
  }
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
        <ul>
        {
          discoverMenu.map((item,index)=>{
            return (
              showSelectItem(item,index)
            )
          })
        }
        </ul>
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
