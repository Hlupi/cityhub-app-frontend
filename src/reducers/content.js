import { ADD_CONTENT } from "../actions/content";

export default function (state = [], action) {
    switch (action.type) {
      case ADD_CONTENT:
        return [...state, action.payload]      
      default:
        return state
    }
  }