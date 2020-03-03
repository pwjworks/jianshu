import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {list.map((item) => {
          return (
            <ListItem key={item.get('id')}>
              <img className='pic' src={item.get('imgUrl')} alt='item img' />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>
                  {item.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          )
        })}
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.home.get('articleList')
})

const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(List)
