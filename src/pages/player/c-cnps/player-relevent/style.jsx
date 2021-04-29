import styled from 'styled-components';
import imgIcon from '@/assets/img/sprite_03.png'
export const PlayerReleventWrapper = styled.div`
  margin-top: 40px;

  .songs {
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .info {
        max-width: 156px;
        a {
          font-size: 12px;
        }
        .title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          a {
            color: #333;
          }
        }

        .artist {
          
          a {
            color: #999;
          }
        }
      }

      .operate {
        .item {
          background: url(${imgIcon}) no-repeat;
          display: inline-block;
          width: 10px;
          height: 11px;
          border: none;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }

        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`