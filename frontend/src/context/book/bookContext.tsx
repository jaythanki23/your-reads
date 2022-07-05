import { createContext } from "react";
import { bookStateType } from "../../types/dataTypes";

export const initialState: bookStateType = {
  display: [],
  error: ''
};

export const bookContext = createContext(initialState);