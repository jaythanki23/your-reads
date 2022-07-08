import { bookStateType } from "../../types/dataTypes";
import { DISPLAY, CLEAR_DISPLAY, SHOW_MESSAGE, SET_READ } from "../../types/reducerTypes";

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
    case SET_READ:
      return {
        ...state,
        read: payload?.read
      }
    default:
      return state;
  }
}

export default bookReducer;