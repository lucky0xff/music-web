import styled from 'styled-components'
import imgCover from '@/assets/img/sprite_cover.png'
import imgIcon from '@/assets/img/sprite_icon2.png'

export const PlayerInfoWrapper = styled.div`
  display: flex;
`
export const InfoLeft = styled.div`
  width: 206px;

  .image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;
    .cover {
      background: url(${imgCover}) no-repeat -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
      position: absolute;
    }
  }
  .link {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      background: url(${imgIcon}) no-repeat -34px -863px;
      display: inline-block;
      width: 16px;
      height: 16px;
    }
    a {
      color: #0c73c2;
      text-decoration: underline;
      font-size: 12px;
      cursor: pointer;
    }
  }
`
export const InfoRight = styled.div`
  margin-left: 20px;
  .song-info {
    .song-name {
      position: relative;
      .icon {
        display: inline-block;
        width: 54px;
        height: 24px;
        background: url(${imgIcon}) no-repeat 0 -463px;
      }
      .name {
        margin-left: 8px;
        position: relative;
        top: -6px;
        font-size: 24px;
      }
    }

    .song-singer, .belongs-albumn {
      margin: 10px 0;
      .desc {
        color: #999;
      }
      .singer,.album {
        color: #0c73c2;
        cursor: pointer;
      }
    }
  }
  .song-lyric {
    font-size: 12px;
    color: #333;
    margin-top: 38px;
    line-height: 23px;
  }

  .lyric-control {
    border: none;
    position: relative;
    color: #0c73c2;
    background-color: #fff;
    text-decoration: none;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }

    i {
      position: absolute;
      width: 11px;
      height: 8px;
      right: -7px;
      top: 6px;
      background: url(${imgIcon}) no-repeat  -65px -520px;
    }
  }
`