import * as request from 'superagent'


export const FETCH_SLIDER_DATA = 'FETCH_SLIDER_DATA'


const successSlider = data => ({
  type: FETCH_SLIDER_DATA,
  payload: data
})


export const fetchSliderData = () => (dispatch) => {
  request
    .get(`https://cityhub-backend.herokuapp.com/hashtagsaccepted`)
    .then(result => dispatch(successSlider(result.body)))  
    .catch(err => console.error(err))
}



// export const fetchAllEvents = () => (dispatch) => {
//     request
//     .get(`${ baseUrl }/events`)
//     .then( response => dispatch({
//         type: FETCHED_ALL_EVENTS,
//         payload: response.body.events
//     }))
//     .catch(err => alert(err))
// }