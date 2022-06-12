import { StateType } from "./authContext";
import { REGISTER_SUCCESS, USER_LOADED } from '../types/reducerTypes';

interface Action {
  type: string,
  payload: StateType
}


const authReducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:  
      localStorage.setItem('token', payload.token as string);
      return {
        ...state,
        isAuthenticated: true
      }
    case USER_LOADED:
      return  {
        ...state,
        name: payload.name,
        email: payload.email,
        image: payload.image,
        isAuthenticated: true,
        loading: false
      }
    default:
      return state;
  }
}

export default authReducer;
