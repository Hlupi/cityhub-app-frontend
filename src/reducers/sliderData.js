import { FETCH_SLIDER_DATA, CHECK_IMAGE } from "../actions/sliderData";

export default function (state = [], action) {
    switch (action.type) {
      case FETCH_SLIDER_DATA:
        return action.payload
      default:
        return state
    }
  }