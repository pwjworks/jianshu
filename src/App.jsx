import React, { Component } from 'react'
import Header from './common/header'
import GlobalStyle from './style'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import IconGlobalStyle from './static/icon/iconfont'

import Home from './pages/home'
import Details from './pages/details'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id='root'>
          <IconGlobalStyle></IconGlobalStyle>
          <GlobalStyle></GlobalStyle>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/details' exact component={Details}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
