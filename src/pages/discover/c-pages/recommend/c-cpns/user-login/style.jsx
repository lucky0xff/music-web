import styled from 'styled-components'
import imgBg from '@/assets/img/sprite_02.png'
export const LoginWrapper = styled.div`
  height: 126px;
  background: url(${imgBg}) no-repeat 0 0;
  .disc {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }
  .btn {
    background: url(${imgBg}) no-repeat 0 -195px;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    cursor: pointer;
  }
`