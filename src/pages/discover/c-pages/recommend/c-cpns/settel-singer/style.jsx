import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin: 15px 20px 0 20px;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    height: 23px;
    border-bottom: 1px solid #ccc;
    .title {
      color: #333;
      font-weight: bold;
    }
    a {
      color: #666;
      font-size: 12px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .content {
    margin-top: 6px;
    .wrapper {
      overflow: hidden;
      .singer {
        margin-top: 14px;
        width: 210px;
        height: 62px;
        background: #fafafa;
        display: flex;
        img {
          width: 62px;
          height: 62px;
        }
        .info {
          /* box-sizing: border-box; */
          /* width: 133px; */
          width: 146px;
          height: 60px;
          padding-left: 14px;
        
          border: 1px solid #e9e9e9;
          border-left: none;
          .singer-name {
            width: 90%;
            font-size: 14px;
            font-weight: bold;
            margin-top: 8px;
          }
          .singer-disc {
            color: #666;
            width: 90%;
            margin-top: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 8px;
          }
        }
      }
    }
    
  }

  .footer {
    margin-top: 12px;
    .btn {
      cursor: pointer;
      a{
        font-size: 12px;
        color: #333;
        font-weight: 700;
        text-align: center;
        display: block;
        height: 31px;
        line-height: 31px;
        border-radius: 4px;
        background-color: #fafafa;
        border: 1px solid #c3c3c3;
        text-decoration: none;
      }
    }
  }
`