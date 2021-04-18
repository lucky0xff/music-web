import styled from "styled-components";
import imgCover from "@/assets/img/sprite_cover.png";
import imgIcon from "@/assets/img/sprite_icon.png";
export const SongsCoverWrapper = styled.div `
  .cover {
    .info {
      display: flex;
      flex-direction: column;
      .wrapper {
        position: relative;
        /* 毛玻璃 */
        .cover-top {
          background: url(${imgCover}) 0 0 no-repeat;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        /* icon */
        .icon {
          position:absolute;
          background:url(${imgCover}) 0 -537px;
          bottom: 0;
          left: 0;
          right: 0;
          height: 27px;
          color: #ccc;
          display:flex;
          justify-content:space-between;
          color: #ccc;
          
          .left {
            position:relative;
            background:url(${imgIcon}) 0 -24px;
            width: 14px;
            height: 11px;
            margin: 9px 5px 9px 10px;
            span {
              /* 强制不换行 */
              white-space: nowrap; 
              position: absolute;
              bottom: 0;
              left: 19px;
              right: 0;
              top: -3px;
            }
          }
          .right {
            background:url(${imgIcon}) 0 0;
            width: 16px;
            height: 17px;
            margin: 5px 10px 0 10px;
          }
        }
        img {
          display: block;
          width: 140px;
          height: 140px;
        }
        margin-bottom:8px;
      }
      .cover-bottom {
        width: 140px;
        font-size: 14px;
        color: #000;
        line-height: 19px;
      }
    }
    padding-bottom: 30px;
  }
`;