import React, { Component } from 'react'
import Header from './common/header'
import GlobalStyle from './style'
import store from './store'
import {Provider} from 'react-redux'
import IconGlobalStyle from './static/icon/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id='root'>
          <IconGlobalStyle></IconGlobalStyle>
          <GlobalStyle></GlobalStyle>
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App
