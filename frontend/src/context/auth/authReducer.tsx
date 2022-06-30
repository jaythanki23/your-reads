import { StateType } from '../../types/dataTypes';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, USER_NOT_LOADED, LOGOUT } from '../../types/reducerTypes';

interface Action {
  type: string,
  payload?: StateType
}


const authReducer = (state: StateType, action: Action): StateType => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:  
      localStorage.setItem('token', payload?.token as string);
      return {
        ...state,
        isAuthenticated: true,
        token: payload?.token
      }
    case USER_LOADED:
      return  {
        ...state,
        id: payload?.id,
        token: localStorage.token,
        name: payload?.name,
        email: payload?.email,
        image: payload?.image,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
    case USER_NOT_LOADED:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        name: '',
        email: '',
        image: '',
        token: '',
        isAuthenticated: false,
        loading: false,
        error: payload?.error
      }
    default:
      return state;
  }
}

export default authReducer;
