import React, { useContext, useEffect, useState } from 'react';
import { authContext as AuthContext } from '../../context/auth/authContext';
import Spinner from '../../layout/Spinner';
import Books from './Books';
import { bookContext } from '../../context/book/bookContext';


const Home = () => {
  const { error, loading, loadUser } = useContext(AuthContext);
  const { search } = useContext(bookContext);

  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(e.key === "Enter") {
        // call search
        // console.log(text);
        search?.(text);
    }      
    
  }

  useEffect(() => {
    loadUser?.();
    // getRead?.();
  }, []);

  return (
    <div className='vh-100'>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      {!loading ? <div className='vh-100 d-flex flex-column align-items-center mt-5 p-5 gap-3'>
                    {/* <p className='fs-1' style={{'fontFamily': 'monospace'}}>Your Reads</p> */}
                    <h1 className="text-center mb-3"><i className="bi bi-book" style={{"marginRight": "10px"}}></i>Your reads</h1>
                    <div className='d-flex flex-row justify-content-center gap-3 w-100'>
                      <input type="text" className="form-control form-control-lg w-25 rounded" placeholder="Search" aria-label="Search" onChange={onChange} onKeyDown={onEnter} />
                      {/* <button type='button' className='btn btn-primary'}><i className="bi bi-search"></i></button> */}
                    </div>
                    <Books />
                  </div> : 
                  <Spinner />
      }
    </div>
  )
}

export default Home;