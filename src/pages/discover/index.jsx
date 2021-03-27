import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {discoverMenu} from '@/common/local-data'
import {DiscoverWrapper,TopMenu} from './style'
export default memo(function HYDiscover() {
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
        <ul>
        {
          discoverMenu.map((item,index)=>{
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
          })
        }
        </ul>
        </TopMenu>
      </div>
    </DiscoverWrapper>
  )
})
