import styled from 'styled-components'
import imgIcon from '@/assets/img/sprite_02.png'
export const HeaderWrapper = styled.div`
  height: 35px;
  padding: 0 10px 0 34px;
  background:url(${imgIcon}) no-repeat;
  background-position:-225px -156px;
  border-bottom: 2px solid #C10D0C;
  display:flex;
  justify-content:space-between;
  .left {
    display:flex;
    .title{
      font-size:20px;
      font-weight: normal;
      line-height: 28px;
    }
    .keyword {
      display:flex;
      margin: 7px 0 0 20px;
      .item {
        a {
          font-size:12px;
          color: #666;
          :hover {
            text-decoration:underline;
          }
        }
        .divider {
          margin: 0 11px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display:flex;
    align-items: center;
    margin-top: 9px;
    a {
      font-size:12px;
      color: #666;
      :hover {
        text-decoration:underline;
      }
    }
    .icon {
      background:url(${imgIcon}) no-repeat;
      background-position: 0 -240px;
      width: 12px;
      height: 12px;
      margin-left: 4px; 
    }
  }

`