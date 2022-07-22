import { journeyStateType } from "../../types/dataTypes";
import { SHOW_MESSAGE, CLEAR_MESSAGE, SET_JOURNEYS} from "../../types/reducerTypes";

interface Action {
  type?: string,
  payload?: journeyStateType
}

const journeyReducer = (state: journeyStateType, action: Action): journeyStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_JOURNEYS:
      return {
        ...state,
        journeys: payload?.journeys
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
    
    default:
      return state;
  }
}

export default journeyReducer;