import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    const {list} =this.props
    return (
      <RecommendWrapper>
        {list.map((item)=>{
          return (
            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
          )
        })}
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('recommendList')
})

const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(Recommend)
