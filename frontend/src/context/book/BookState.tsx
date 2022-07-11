import { useReducer } from "react";
import axios from "axios";
import { bookContext as BookContext } from "./bookContext";
import bookReducer from "./bookReducer";
import { initialState } from "./bookContext";
import { bookStateType, ProviderProps, bookInfo } from "../../types/dataTypes";


import { CLEAR_DISPLAY, DISPLAY, SHOW_MESSAGE, CLEAR_MESSAGE, SET_READ } from "../../types/reducerTypes";

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

      console.log(res.data.items);

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

      // console.log(result);

      const resultObj: bookStateType = {
        display: result
      }

      // console.log(resultObj);

      dispatch({ type: DISPLAY, payload: resultObj })

    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.message
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    }
  }

  // Clear display
  const clear = () => { dispatch({ type: CLEAR_DISPLAY }) }

  // Insert books with status 'read'
  const insertRead = async (data: bookInfo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res: any = await axios.post('/books/read', data, config);

      console.log(res);

      const ans: bookStateType = {
        message: res.data.message
      }

      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);



    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.message
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    }
  }

  // Get books with status 'read'
  const getRead = async () => {
    try {
      const res: any = await axios.get('/books/read');

      const ans: bookStateType = {
        read: res.data
      }

      dispatch({ type: SET_READ, payload: ans });
    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.message
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    }
  }

  // Remove book
  const remove = async (id: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.delete(`/books/${id}`);

      const ans: bookStateType = {
        message: res.data.message
      }

      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);

      getRead();
      
    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.message
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    }
  }

  

  return <BookContext.Provider 
          value={{
            display: state.display,
            message: state.message,
            read: state.read,
            reading: state.reading,
            shallRead: state.shallRead,
            search,
            clear,
            insertRead,
            getRead,
            remove
          }}
        >
          {props.children}
         </BookContext.Provider>
}

export default BookState;