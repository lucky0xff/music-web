import styled from "styled-components";
import imgHot from "../../assets/img/sprite_01.png";
export const HeaderWrapper = styled.div`
  /* 记得删除  */
  width: 1425px;
  background-color: #242424;
  height: 75px;
  .content {
    height: 70px;
    display:flex;
    justify-content:space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    /* 路径有问题 还没找到原因 目前是把路径放在reset.css中了 */
    /* 3.22更新：找到解决方法了 通过import引入 */
    /* a标签宽高必须设置 display: block;才有效 */
    display: block;
    width: 159px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
    padding-right: 15px;
    margin-right: 15px;
  }
  .select-list {
    position: relative;
    line-height: 69px;
    justify-content: center;
    padding: 0 19px;
    a {
      color: #ccc;
    }
    :hover {
      background-color: #000;
      a {
        color: #fff;
      }
      /* after伪类必须设置content */
      :after {
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #c20c0c;
        content: "";
        position: absolute;
        width: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    /* 多个伪类会混起来 解决：用sup标签 */
    /* :last-child {
      :after {
        position: absolute;
        content:"";
        width: 28px;
        height: 14px;
        background-image: url(${imgHot});
        background-position: -192px 0;
        top: 20px;
        right: -20px;
      }
    } */
  }
  .hot {
    position: absolute;
    background: url(${imgHot}) no-repeat;
    top: 21px;
    left: 100px;
    width: 28px;
    height: 19px;
    background-position: -192px 0;
    text-indent: -9999px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items:center;
  color:#ccc;
  font-size:12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius:16px;
    input {
      ::placeholder {
        font-size:12px;
      }
    }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height:32px;
    text-align:center;
    border:1px solid #666;
    border-radius:16px;
    margin:0 16px;
  }
`;
