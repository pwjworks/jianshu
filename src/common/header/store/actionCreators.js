import * as actionTypes from './constants'
import axios from 'axios'
import {
  fromJS
} from 'immutable'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data.data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const MouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const MouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})