import { bookStateType } from "../../types/dataTypes";

interface Action {
  type: string,
  payload?: bookStateType
}

const bookReducer = (state: bookStateType, action: Action): bookStateType => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default bookReducer;