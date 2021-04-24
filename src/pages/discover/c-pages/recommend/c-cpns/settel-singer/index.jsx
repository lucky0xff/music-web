import React, { useEffect } from 'react'
import { SettleSingerWrapper } from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSettleSingersAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'
export default function HYSettleSinger() {
  // state

  // redux hooks
  const dispatch = useDispatch()
  const { settleSingers } = useSelector(state => ({
    settleSingers:state.getIn(["recommend","settleSingers"]),
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getSettleSingersAction(5,5001))
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <div className="header">
        <span className="title">入驻歌手</span>
        <a href="/todo">查看全部&nbsp;&gt;</a>
      </div>

      <div className="content">
      {/* 给 singer 一个父元素 然后触发 BFC 消除边距重叠 */}
        <div className="wrapper"> 
          
          {
            settleSingers.map((item,index)=>{
              return (
                <div key={item.id} className="singer">
                  <img alt="" src={getSizeImage(item.picUrl,62)}></img>
                  <div className="info">
                    <div className="singer-name">{item.name}</div>
                    <div className="singer-disc">{item.alias.join("") || item.name}</div>
                  </div>
                </div>
              )
            })
          }
           
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
