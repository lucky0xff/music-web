import styled from 'styled-components';
import imgBg from '@/assets/img/playbar_sprite.png'
import imgControl from '@/assets/img/playbar_sprite.png'
import imgBar from '@/assets/img/progress_bar.png'
import imgHandle from '@/assets/img/sprite_icon.png'
export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background: url(${imgBg}) 0 0 repeat;
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  /* content靠下 用绝对定位 */
  .content {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    height: 47px;
    position: absolute;
    width: 980px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
`
export const Control = styled.div`
  width: 137px;
  display: flex;
  align-items: center;
  .btn {
    background: url(${imgControl}) no-repeat;
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  .prev {
    background-position: 0 -130px;
    margin-top: 5px;
  }
  .play {
    background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
    width: 36px;
    height: 36px;
  }
  .next {
    background-position: -80px -130px;
    margin-top: 5px;
  }
`
export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;
  .image {
    margin: 0 15px 0 0;
    position: relative;
    img {
      width: 34px;
      height: 34px;
    }
    a {
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background: url(${imgControl}) no-repeat 0 -80px;
      text-indent: -9999px;
    }
  }
  .info {
    width: 608px;
    height: 37px;
    .song {
      /* height: 24px; */
      .name {
        color: #e8e8e8;
      }
      .singer {
        margin-left: 15px;
        color: #9b9b9b;
      }
    }
    .progress {
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        height: 9px;
        margin: 0;
        padding: 0;
        .ant-slider-rail {
          height: 9px;
          background: url(${imgBar}) 0 -30px;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${imgBar}) 0 -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${imgHandle}) 0 -250px;
        }
      }
      .time {
        margin-left: 14px;
        color: #797979;
        .now {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`
export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 3px;
  .btn {
    background: url(${imgControl}) no-repeat;
    width: 25px;
    height: 25px;
    margin: 0 2px 0 0;
  }
  .left {
    margin-left: 15px;
    .favor {
      background-position:-88px -163px;
    }
    .share {
      background-position:-114px -163px;
    }
  }
  .right {
    margin-left:16px;
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${props=>{
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }}
    }
    .playlist {
      background-position: -42px -68px;
      width: 59px;
      height: 25px;
    }
  }

`