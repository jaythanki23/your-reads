import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import Card from './Card';



const Books = () => {
  const { display, message } = useContext(bookContext);

  return (
    <div>
      {message && <div className="alert alert-danger m-2 p-2" role="alert">
                  {message}
                </div>
      }
      <div className='vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap mt-5 p-5 gap-3'>
        {display?.map(obj => <Card key={obj.id} book={obj} />)}                  
      </div>
    </div>
  )
}

export default Books