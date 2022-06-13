import { createContext } from "react";
import { RegisterData } from "../types/dataTypes";

export interface StateType {
  id?: string | null | undefined,
  token?: string | null | undefined,
  name?: string | null | undefined,
  email?: string | null | undefined,
  image?: string | null | undefined,
  isAuthenticated?: boolean | null | undefined,
  loading?: boolean | null | undefined,
  error?: string | null | undefined
  //methods
  register?: (data: RegisterData) => void
  loadUser?: () => void
}

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

