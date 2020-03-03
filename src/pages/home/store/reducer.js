import {
  fromJS
} from 'immutable'

const defaultState = fromJS({
  topicList: [{
      id: 1,
      title: '社会热点'
    },
    {
      id: 2,
      title: '手绘'
    }
  ],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      })
    default:
      return state
  }
}