import styled from 'styled-components'
import logoPic from '../../static/Logo.png'

export const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a `
  display: block;
  top: 0;
  left: 0;
  height: 58px;
  width: 100px;
  position: absolute;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div `
  width: 960px;
  height: 100%;
  padding-right: 50px;
  margin: 0 auto;
`;

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    bottom: 5px;
    &.focused{
      color: #fff;
      background: #777
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
  width: 180px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  font-size: 14px;
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 180px;
  }
  &::placeholder{
    color: #999
  }
  &.focused{
    width:240px;
  }
`;

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.button `
  float: right;
  margin: 9px 5px 0 15px;
  padding: 0 20px;
  background: transparent;
  font-size: 14px;
  border: 1px solid rgba(236, 97, 73, .7);
  height: 38px;
  line-height: 24px;
  border-radius: 19px;
  &.reg{
    color: rgba(236, 97, 73);
  }
  &.writing{
    color: #fff;
    background: rgba(236, 97, 73);
  }
`;