import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import ReadCard from './ReadCard';


const Read = () => {
  const { read, message } = useContext(bookContext);

  return (
    <div>
      {message && <div className="alert alert-danger m-2 p-2" role="alert">
                  {message}
                </div>
      }
      {read?.map((obj) => <ReadCard key={obj.id} bookRes={obj} /> )}
    </div>
  )
}

export default Read