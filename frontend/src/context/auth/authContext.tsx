import { createContext } from "react";
import { StateType } from "../../types/dataTypes";


export const initialState: StateType = {
  id: '',
  token: '',
  name: '',
  email: '',
  image: '',
  isAuthenticated: false,
  loading: true,
  error: ''
}

export const authContext = createContext(initialState);

