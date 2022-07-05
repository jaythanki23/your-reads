import { useState, useReducer } from "react";
import axios from "axios";
import { bookContext as BookContext } from "./bookContext";
import bookReducer from "./bookReducer";
import { initialState } from "./bookContext";
import { bookStateType, ProviderProps } from "../../types/dataTypes";
import { bookInfo } from "../../types/dataTypes";

import { CLEAR_DISPLAY, DISPLAY } from "../../types/reducerTypes";

const BookState = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  // Get search results
  const search = async (text: string) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=25&key=AIzaSyCnTg4_7m77emd1bLe_a922zjU_7bwGK98`, {transformRequest: (data: any, headers: any) => {
          delete headers.common['Authorization'];
          return data;
        }
      });

      const result: bookInfo[] = res.data.items.map((x: any) => {
        const obj: bookInfo = {
          id: x.id,
          title: x.volumeInfo.title,
          authors: x.volumeInfo.authors,
          categories: x.volumeInfo.categories,
          description: x.volumeInfo.description,
          image: x.volumeInfo.imageLinks?.thumbnail,
          pages: x.volumeInfo.pageCount,
          publishedDate: x.volumeInfo.publishedDate                        
        };
        return obj;
      });

      console.log(result);

      const resultObj: bookStateType = {
        display: result
      }

      // console.log(resultObj);

      dispatch({
        type: DISPLAY,
        payload: resultObj
      })

    } catch (error) {
      console.log(error);
    }
  }

  // Clear display
  const clear = () => { dispatch({ type: CLEAR_DISPLAY }) }
  

  return <BookContext.Provider 
          value={{
            display: state.display,
            error: state.error,
            search,
            clear
          }}
        >
          {props.children}
         </BookContext.Provider>
}

export default BookState;