import { createContext } from "react";
import { journeyStateType } from "../../types/dataTypes";

export const initialState: journeyStateType = {
  journeys: [],
  message: '',
};

export const journeyContext = createContext(initialState);