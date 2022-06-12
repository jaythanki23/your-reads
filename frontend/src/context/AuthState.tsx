import { useContext, useReducer } from "react";
import axios from "axios";
import { authContext as AuthContext } from "./authContext";
import authReducer from "./authReducer";
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED } from "../types/reducerTypes";

import { initialState } from "./authContext";
import { RegisterData } from "../types/dataTypes"

interface ProviderProps {
  children: React.ReactNode
}

const AuthState = (props: ProviderProps) => {
  
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const register = async (data: RegisterData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/auth/google', data, config);

      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      }); 
    } catch (error) {
      console.log(error);
    }
  }

  // Load user
  const loadUser = async () => {
    // if(localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    try {
      const res = await axios.get('/auth/me');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  return  <AuthContext.Provider
            value={{
              id: state.id,
              token: state.token,
              name: state.name,
              email: state.email,
              image: state.image,
              isAuthenticated: state.isAuthenticated,
              loading: state.loading,
              register,
              loadUser
            }}
          >
            {props.children}
          </AuthContext.Provider>
}

export default AuthState;