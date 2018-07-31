import { combineReducers } from 'redux'
import login from './login'
import users from './users'
import content from './content'
import sliderData from './sliderData'

export default combineReducers ({
  login,
  users,
  content,
  sliderData
})
