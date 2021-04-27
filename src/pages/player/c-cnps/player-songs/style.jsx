import styled from 'styled-components';

export const PlayerSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      max-width: 200px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .name {
          font-size: 14px;
          color: #000;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
            font-size: 12px;
          }
        }
      }
    }
  }
`