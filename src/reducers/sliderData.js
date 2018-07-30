import { FETCH_SLIDER_DATA, FETCH_ALL_EVENTS } from "../actions/sliderData";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SLIDER_DATA:
            return action.payload.hashtags
        case FETCH_ALL_EVENTS:
            return action.payload.events 
        default:
            return state
    }
  }