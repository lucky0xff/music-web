import React, { Fragment, memo } from 'react'
import {FooterWrapper,FooterLeft,FooterRight} from './style'
import {footerLinks,footerImages} from '@/common/local-data'
export default memo(function HYAppFooter() {
  const showCopys = item =>{
    return (
      <Fragment key={item.title}>
        <a href={item.link}>{item.title}</a>
        <span className="line">|</span>
      </Fragment>
    )
  }
  const showUnits = item => {
    return (
      <li key={item.link} className="item">
        <a href={item.link} className="link"> </a>
        <span className="title"></span>
      </li>
    )
  }
  return (
    <FooterWrapper>
      <div className='footer-content wrap-v2'>
        <FooterLeft>
          <p className="copy">{footerLinks.map( item => showCopys(item))}</p>
          <p>
            <span className="footer-company">网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href='https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png' target ="_blank" rel="noreferrer">浙网文[2018]3506-263号</a>
          </p>
          <p>
            <span className="footer-alert">
              违法和不良信息举报电话：0571-89853516
            </span>
            <span >举报邮箱：</span>
            <a href='mailto:ncm5990@163.com' target ="_blank" rel="noreferrer">ncm5990@163.com</a>
          </p>
          <p>
            <a href='https://beian.miit.gov.cn/#/Integrated/index' target ="_blank" rel="noreferrer">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
            <span className='police-logo'/>
            <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564' target ="_blank" rel="noreferrer">浙公网安备 33010902002564号</a>
          </p>
        </FooterLeft>
        <FooterRight>
        {footerImages.map(item => showUnits(item))}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
