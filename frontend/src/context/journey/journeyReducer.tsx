import { journeyStateType } from "../../types/dataTypes";

interface Action {
  type?: string,
  payload?: journeyStateType
}

const journeyReducer = (state: journeyStateType, action: Action): journeyStateType => {
  const { type, payload } = action;
  switch (type) {
    
    default:
      return state;
  }
}

export default journeyReducer;