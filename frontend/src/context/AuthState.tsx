import { useContext, useReducer } from "react";
import axios from "axios";
import { authContext as AuthContext } from "./authContext";
import authReducer from "./authReducer";

import { initialState } from "./authContext";
import { RegisterData } from "../types/dataTypes"

interface ProviderProps {
  children: React.ReactNode
}

const AuthState = (props: ProviderProps) => {
  
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const register = (data: RegisterData) => {
    console.log(data);
    dispatch({
      type: 'REGISTER',
      payload: data
    });
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
              register
            }}
          >
            {props.children}
          </AuthContext.Provider>
}

export default AuthState;