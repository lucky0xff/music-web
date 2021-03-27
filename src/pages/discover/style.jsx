import styled from 'styled-components'
import Ricon from '@/assets/img/white-r-icon@3x.png'
export const DiscoverWrapper = styled.div`
  height: 30px;
  background-color:#C20C0C;
`
export const TopMenu = styled.div`
  ul {
    float: left;
    padding-left: 180px;
    .item {
      float: left;
      height: 34px;
      text-align: center;
      a {
        position:relative;
        display: inline-block;
        padding: 0 13px;
        margin: 2px 17px 0;
        border-radius: 20px;
        color: #fff;
        font-size: 12px;
        &:hover,
        &.menu-active {
          text-decoration: none;
          background-color: #9b0909;
        }
      }
      .r-icon {
        position:absolute;
        top:2px;
        background:url(${Ricon});
        width: 8px;
        height: 8px;
        display:inline-block;
        background-size: cover;
      }
    }
  }
`