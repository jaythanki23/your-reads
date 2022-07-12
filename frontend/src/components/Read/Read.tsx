import React, { useContext, useEffect } from 'react';
import { authContext } from '../../context/auth/authContext';
import { bookContext } from '../../context/book/bookContext';
import ReadCard from './ReadCard';
import Spinner from '../../layout/Spinner';


const Read = () => {
  const { loading, loadUser } = useContext(authContext);
  const { read, getRead, message } = useContext(bookContext);

  useEffect(() => {
      loadUser?.();
      getRead?.();
  }, []);
  

  // console.log(read);

  return (
    <div className='vh-100'>
      {message && <div className="alert alert-success m-2 p-2" role="alert">
                              {message}
                            </div>
      }
      {!loading ? <div className='vh-100 d-flex flex-column align-items-center mt-5 p-5 gap-3'>
                    <p className='fs-1' style={{'fontFamily': 'monospace'}}>Books that you have read</p>
                    <div className='vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap p-5 gap-4'>
                      {read?.map((obj) => <ReadCard key={obj.id} bookRes={obj} /> )}
                    </div>
                  </div> : 
                  <Spinner />
      }
    </div>
  )
}

export default Read