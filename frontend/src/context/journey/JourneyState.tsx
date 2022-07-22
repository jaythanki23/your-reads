import { journeyContext } from "./journeyContext";
import journeyReducer from "./journeyReducer";
import axios from "axios";
import { useReducer } from "react";
import { ProviderProps, journeyResponse, journeyStateType, journeyInfo } from "../../types/dataTypes";
import { initialState } from "./journeyContext";
import { SHOW_MESSAGE, CLEAR_MESSAGE, SET_JOURNEYS } from "../../types/reducerTypes";


const JourneyState = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  // create a journey - POST
  const createJourney = async (data: journeyInfo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post("/books/journey", data, config);

      const ans: journeyStateType = {
        message: res.data.message
      }
  
      dispatch({ type: SHOW_MESSAGE, payload: ans });

    } catch (error: any) {
      const ans: journeyStateType = {
        message: error.response.data.error
      }
      
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  // Get joureys  GET
  const getJourney = async (bookID: string) => {
    try {
      const res = await axios.get("/books/journey", { params: { bookID }});

      const ans: journeyStateType = {
        journeys: res.data
      }

      dispatch({ type: SET_JOURNEYS, payload: ans});
    } catch (error: any) {
      const ans: journeyStateType = {
        message: error.response.data.error
      }
      
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  return <journeyContext.Provider 
          value=
          {{
            journeys: state.journeys,
            message: state.message,
            getJourney,
            createJourney
          }}
         >
          {props.children}
         </journeyContext.Provider>

}

export default JourneyState;