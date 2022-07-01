import { bookStateType } from "../../types/dataTypes";
import { DISPLAY } from "../../types/reducerTypes";

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
        info: payload?.info
      }
    default:
      return state;
  }
}

export default bookReducer;