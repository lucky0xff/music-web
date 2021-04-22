import styled from 'styled-components'
export const HotRadioWrapper = styled.div`
  margin: 30px 20px 0 20px;
  .header {
    font-size: 12px;
    height: 23px;
    border-bottom: 1px solid #ccc;
    .title {
      color: #333;
      font-weight: bold;
    }
  }
  
  .content {
    margin-top: 20px;
    
    .info {
      display: flex;
      width: 210px;
      height: 50px;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      .singer {
        width: 160px;
        line-height: 21px;
        a {
          font-size: 12px;
          max-width: 88%;
          color: #000;
          :hover {
            text-decoration: underline;
          }
        }
        .singer-desc {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #666;
        }
      }
    }
  }
`