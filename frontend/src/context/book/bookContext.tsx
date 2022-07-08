import { createContext } from "react";
import { bookStateType } from "../../types/dataTypes";

export const initialState: bookStateType = {
  display: [],
  read: [],
  reading: [],
  shallRead: [],
  message: ''
};

export const bookContext = createContext(initialState);