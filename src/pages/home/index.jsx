import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            alt='banner'
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>400){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
