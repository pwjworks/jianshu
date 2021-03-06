import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage
    } = this.props
    const pageList = []
    const newList = list.toJS()
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon)
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon
                }}
                className='iconfont spin'
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames='slide'>
              <NavSearch
                onFocus={() => {
                  handleInputFocus(list)
                }}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe6dd;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className='iconfont'>&#xe670;</i>写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    list: state.header.get('list'),
    page: state.header.get('page'),
    mouseIn: state.header.get('mouseIn'),
    totalPage: state.header.get('totalPage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(360deg);'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
