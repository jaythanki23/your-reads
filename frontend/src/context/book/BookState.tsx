import { useReducer } from "react";
import axios from "axios";
import { bookContext as BookContext } from "./bookContext";
import bookReducer from "./bookReducer";
import { initialState } from "./bookContext";
import { bookStateType, ProviderProps, bookInfo } from "../../types/dataTypes";


import { CLEAR_DISPLAY, DISPLAY, SHOW_MESSAGE, CLEAR_MESSAGE, SET_READ, SET_SHELF, SET_READING } from "../../types/reducerTypes";

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

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
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

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);

      getRead(data.status as string);


    } catch (error: any) {
      console.log(error);
      const ans: bookStateType = {
        message: error.response.data.error
      }
      console.log(error);
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  // Get books with status 'read'
  const getRead = async (status: string) => {
    try {
      const res: any = await axios.get('/books/read', { params: { status } });
      // console.log(res);
      // console.log(status);
      let ans: bookStateType = {};

      switch (status) {
        case 'read':
          ans.read = res.data;
          dispatch({ type: SET_READ, payload: ans });
          break;
        case 'shelf':
          ans.shelf = res.data
          dispatch({ type: SET_SHELF, payload: ans });
          break;
        case 'reading':
          ans.reading = res.data;
          dispatch({ type: SET_READING, payload: ans });
          break;
        default:
          break;
      }

    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.error
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  // Remove book
  const remove = async (id: any, status: string) => {

    try {
      const res = await axios.delete(`/books/${id}`);

      const ans: bookStateType = {
        message: res.data.message
      }

      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);

      getRead(status);
      
    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.error
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  // Update a book
  const update = async (id: any, from: string, to: string) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data: any = {
      status: to
    }

    try {
      const res = await axios.put(`/books/${id}`, data, config);

      const ans: bookStateType = {
        message: res.data.message
      }

      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);

      getRead(from);

    } catch (error: any) {
      const ans: bookStateType = {
        message: error.response.data.error
      }
      dispatch({ type: SHOW_MESSAGE, payload: ans });

      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 2000);
    }
  }

  

  return <BookContext.Provider 
          value={{
            display: state.display,
            message: state.message,
            read: state.read,
            reading: state.reading,
            shelf: state.shelf,
            search,
            clear,
            insertRead,
            getRead,
            remove,
            update
          }}
        >
          {props.children}
         </BookContext.Provider>
}

export default BookState;