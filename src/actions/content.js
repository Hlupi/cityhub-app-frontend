import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ADD_CONTENT = 'ADD_CONTENT'

export const createContent = (content) => (dispatch) => {
    request
      .post(`${baseUrl}/contents`)
      .send(content)
      .then(response => dispatch({
          type: ADD_CONTENT,
          payload: response.body
      }))
      .catch(err => console.error(err))
  }