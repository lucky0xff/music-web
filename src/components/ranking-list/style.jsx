import styled from "styled-components";
import imgCover from "@/assets/img/sprite_cover.png";
import imgBtn from "@/assets/img/sprite_02.png";
import imgBtn2 from "@/assets/img/sprite_02.png";
import imgBtn3 from "@/assets/img/sprite_icon2.png";

export const RankingListWrapper = styled.div`
  width: 230px;
  padding: 20px 0 0 21px;

  .header {
    display: flex;
    height: 100px;
    .image {
      width: 80px;
      height: 80px;
      position: relative;
      img {
        width: 80px;
        height: 80px;
      }
      .cover {
        background: url(${imgCover}) no-repeat -145px -57px;
        text-indent: -999px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    .info {
      width: 116px;
      margin: 6px 0 0 10px;
      a h3 {
        color: #333;
        font-size: 14px;
      }
      .btn {
        margin-top: 10px;
        background: url(${imgBtn}) no-repeat;
        cursor: pointer;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
        border: none;
      }
      .play {
        background-position: -267px -205px;
      }
      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      display: flex;
      align-items: center;
      /* 注意选择前三个是放在这个div里面的 */
      :nth-child(-n + 3) .key {
        color: #c10d0c;
      }
    }
    .key {
      width: 35px;
      height: 32px;
      text-align: center;
      font-size: 16px;
      color: #666;
      line-height:32px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      width: 170px;
      height: 17px;
      line-height: 17px;

      a {
        color: #000;
        font-size: 12px;
        flex: 1;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        :hover {
          text-decoration: underline;
        }
      }
      .operate {
        display:none;
        .btn {
          background: url(${imgBtn2}) no-repeat;
          width: 17px;
          height: 17px;
          margin-right: 8px;
          cursor: pointer;
          border: none;
        }
        .play {
          background-position: -267px -268px;
        }
        .addto {
          background: url(${imgBtn3}) no-repeat;
          background-position: 0 -700px;
          position:relative;
          top: 2px;
        }
        .favor {
          background-position: -297px -268px;
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;
    a {
      color: #000;
      font-size: 12px;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
