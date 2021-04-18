import propTypes from 'prop-types';
import React, { memo } from 'react';
import { HeaderWrapper } from './style';


const HYThemeHeaderRCM = memo(function(props) {
  const {title,keywords} = props;

  //热门推荐导航
  const ShowItem = (item,index) => {
    if (index === 4) {
      return (
        <div>
          <a href="todo">{item}</a>
        </div>
      )
    } else {
      return (
        <div>
          <a href="todo">{item}</a>
          <span className="divider">|</span>
        </div>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keywords.map( (item,index) => {
              return (
                <div className="item" key={item}>
                  { ShowItem(item,index) }
                </div>
              )
  
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon"/>
      </div>
    </HeaderWrapper>
  )
})
HYThemeHeaderRCM.propTypes = {
  title:propTypes.string.isRequired,
  keywords:propTypes.array
}
HYThemeHeaderRCM.defaultProps = {
  keywords:[]
}
export default HYThemeHeaderRCM;