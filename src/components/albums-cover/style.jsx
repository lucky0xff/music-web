import styled from 'styled-components';
import imgCover from '@/assets/img/sprite_cover.png'

export const AlbumsWrapper = styled.div`
 .album-img {
    width:${props=>props.width};
    height:${props=>props.height};
    position:relative;
    img {
      width:${props=>props.height};
      height:${props=>props.height};
    }
    .cover {
      position:absolute;
      top:0;
      bottom: 0;
      left:0;
      right:0;
      text-indent: -9999px;
      background:url(${imgCover}) no-repeat;
      background-position:0 ${props=>props.bgp};
    }
 }
 .album-info {
    width: ${props => props.height};
    font-size:12px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
 }
`