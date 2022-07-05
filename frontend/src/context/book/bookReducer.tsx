import { bookStateType } from "../../types/dataTypes";
import { DISPLAY, CLEAR_DISPLAY } from "../../types/reducerTypes";

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
    default:
      return state;
  }
}

export default bookReducer;