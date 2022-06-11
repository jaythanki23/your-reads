import { StateType } from "./authContext";

interface Action {
  type: string,
  payload: StateType
}


const authReducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;
  switch (type) {
    case 'REGISTER':  
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        image: payload.image
      }
    default:
      return state;
  }
}

export default authReducer;
