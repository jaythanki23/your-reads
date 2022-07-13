import { bookStateType } from "../../types/dataTypes";
import { DISPLAY, CLEAR_DISPLAY, SHOW_MESSAGE, CLEAR_MESSAGE, SET_READ, SET_READING, SET_SHELF } from "../../types/reducerTypes";

interface Action {
  type: string,
  payload?: bookStateType
}

const bookReducer = (state: bookStateType, action: Action): bookStateType => {
  const { type, payload } = action;
  switch (type) {
    case DISPLAY:
      return {
        ...state,
        display: payload?.display 
      }
    case CLEAR_DISPLAY:
      return {
        ...state,
        display: []
      }
    case SHOW_MESSAGE:
      return {
        ...state,
        message: payload?.message
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: ''
      }
    case SET_READ:
      return {
        ...state,
        read: payload?.read
      }
      case SET_READING:
      return {
        ...state,
        reading: payload?.reading
      }
      case SET_SHELF:
      return {
        ...state,
        shelf: payload?.shelf
      }
    default:
      return state;
  }
}

export default bookReducer;