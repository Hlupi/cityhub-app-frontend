import * as request from 'superagent'

export const FETCH_SLIDER_DATA = 'FETCH_SLIDER_DATA'
export const CHECK_IMAGE = 'CHECK_IMAGE'

const successSlider = data => ({
  type: FETCH_SLIDER_DATA,
  payload: data
})

export const fetchSliderData = (param) => (dispatch) => {
  request
    .get(`https://cityhub-backend.herokuapp.com/hashtagsaccepted/${param}`)
    .then(result => dispatch(successSlider(result.body)))  
    .catch(err => console.error(err))
}

export const imageChecker = (url) => {
  request
  .get(url)
  .then(() => (url))
  .catch(() => 'http://cdn.ebaumsworld.com/mediaFiles/picture/2453506/85681090.jpg')
}
