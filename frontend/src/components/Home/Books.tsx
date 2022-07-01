import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import Card from './Card';



const Books = () => {
  const { info } = useContext(bookContext);

  return (
    <div className='vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap mt-5 p-5 gap-3'>
      {info?.map(obj => <Card key={obj.id} book={obj} />)}                  
    </div>
  )
}

export default Books