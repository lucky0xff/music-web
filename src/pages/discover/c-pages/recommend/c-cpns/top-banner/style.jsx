import styled from "styled-components";
import imgDownload from "@/assets/img/download.png";
import imgArrow from "@/assets/img/banner_sprite.png";

export const BannerWrapper = styled.div`
  height: 285px;
  background-color: #333;
  background: url(${props=>props.bgImage}) center center/6000px;
  .banner {
    display: flex;
  }
`;
export const BannerLeft = styled.div`
  width: 730px;
  .image {
    height: 285px;
    width: 100%;
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  font-size: 12px;
  width: 254px;
  height: 285px;
  background: url(${imgDownload});
  position: relative;
  .disc {
    color: #8d8d8d;
    margin: 10px auto;
    text-align: center;
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
  }
`;

export const BannerControl = styled.div`
  position:relative;
  .left {
    position:absolute;  
    top:50%;
    margin-top: -31px;
    left:-1052px;
    width: 37px;
    height: 63px;
    background:url(${imgArrow}) 0 -360px;
    /* 光标变成手指 */
    cursor: pointer;
    border: none;
    outline:none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .right {
    position:absolute;
    top:50%;
    margin-top: -31px;
    right:-70px;
    width: 37px;
    height: 63px;
    background:url(${imgArrow}) 0 -508px;
    /* 光标变成手指 */
    cursor: pointer;
    border: none;
    outline:none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
