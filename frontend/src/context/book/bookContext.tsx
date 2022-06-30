import { createContext } from "react";
import { bookStateType } from "../../types/dataTypes";

export const initialState: bookStateType = {
  info: {},
  error: ''
};

export const bookContext = createContext(initialState);