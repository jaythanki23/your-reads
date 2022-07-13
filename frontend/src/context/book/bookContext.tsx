import { createContext } from "react";
import { bookStateType } from "../../types/dataTypes";

export const initialState: bookStateType = {
  display: [],
  read: [],
  reading: [],
  shelf: [],
  message: ''
};

export const bookContext = createContext(initialState);