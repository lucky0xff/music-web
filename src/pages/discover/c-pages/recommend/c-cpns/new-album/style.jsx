import styled from 'styled-components'
import imgArrow from '@/assets/img/sprite_02.png'

export const AlbumWrapper = styled.div`
  margin-top: 50px;
  .content {
    height: 184px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .arrow {
    background:url(${imgArrow}) no-repeat;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .arrow-left {
    background-position: -260px -75px;
  }
  .arrow-right {
    background-position: -294px -75px;
  }

  .album {
    width: 617px;
    height: 180px;
    .page {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      height: 180px;

    }
  }
`