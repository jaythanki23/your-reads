import { useState, useReducer } from "react";
import axios from "axios";
import { bookContext as BookContext } from "./bookContext";
import bookReducer from "./bookReducer";
import { initialState } from "./bookContext";
import { ProviderProps } from "../../types/dataTypes";

const BookState = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  // Get search results
  const search = async (text: string) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyCnTg4_7m77emd1bLe_a922zjU_7bwGK98`, {transformRequest: (data: any, headers: any) => {
          delete headers.common['Authorization'];
          return data;
        }
      });
      
      //const {  } =


    } catch (error) {
      //error
    }
  }
  

  return <BookContext.Provider 
          value={{
            info: state.info,
            error: state.error
          }}
        >
          {props.children}
         </BookContext.Provider>
}

export default BookState;