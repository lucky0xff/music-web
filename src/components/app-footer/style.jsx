import styled from 'styled-components';
import imgPolice from '@/assets/img/police_logo.png'
import imgFooterLogo from '@/assets/img/sprite_footer_02.png'
import imgFooterTitle from '@/assets/img/sprite_footer_01.png'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 174px;
  border-top: 1px solid #D3D3D3;
  background-color: #F2F2F2;
  .footer-content {
    display: flex;
    justify-content: space-between;
    height: 115px;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  color:#666;
  width: 520px;
  line-height: 24px;
  .copy a{
    color:#999;
    font-size:12px;
  }
  .line {
    color:#C2C2C2;
    line-height:12px;
    margin: 0 8px 0 10px;
  }
  .footer-company,
  .footer-alert,
  .footer-manage-system {
    margin-right: 10px;
    color:#666;
  }
   
  a {
    color:#666;
    font-size:12px;
    &:hover {
      text-decoration: underline;
    }
  }

  .police-logo {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin: 0 2px 0 6px;
    vertical-align: -2px;
    background:url(${imgPolice}) 0% 0% / cover no-repeat;
  }
`

export const FooterRight = styled.ul`
  display: flex;
  justify-content:space-between;
  width: 420px;
  margin-top: 33px;
  .item {
    display: flex;
    flex-direction: column;
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background: url(${imgFooterLogo}) 0% 0% no-repeat;
      /* 把图片缩小了 */
      background-size: 110px 552px;
    }
    :nth-child(1) .link {
      background-position: -63px -457px;
    }
    :nth-child(2) .link {
      background-position: -63px -102px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position:-60px -50px;
    }
    :nth-child(5) .link {
      background-position:0 -101px;
    }
    .title {
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${imgFooterTitle});
      background-size: 180px 139px;
      margin: 5px 0 0 0;
    }
    :nth-child(1) .title {
      background-position: 0 -108px;
      margin-left: -8px;
      width:72px;
    }

    :nth-child(2) .title {
      background-position: -1px -91px;
    }

    :nth-child(3) .title {
      background-position: 0 0;
    }

    :nth-child(4) .title {
      background-position: 0 -54px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
    }
  }
`