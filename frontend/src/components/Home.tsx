import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { authContext as AuthContext } from '../context/auth/authContext';
import Spinner from '../layout/Spinner';


const Home = () => {
  const { name, email, image, error, loading, loadUser } = useContext(AuthContext);

  const [text, setText] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if(e.key === "Enter") {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyCnTg4_7m77emd1bLe_a922zjU_7bwGK98`, {transformRequest: (data: any, headers: any) => {
          delete headers.common['Authorization'];
          return data;
        }
      });
      console.log(res.data.items);
      }      
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    loadUser?.();
  }, []);

  return (
    <div className='vh-100'>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      {!loading ? <div className='vh-100 d-flex flex-column align-items-center mt-5 p-5 gap-3'>
                    <p className='fs-1' style={{'fontFamily': 'cursive'}}>Your Reads</p>
                    <div className='d-flex flex-row justify-content-center gap-3 w-100'>
                      <input type="text" className="form-control form-control-lg w-25 rounded" placeholder="Search" aria-label="Search" onChange={onChange} onKeyDown={onEnter} />
                      {/* <button type='button' className='btn btn-primary'}><i className="bi bi-search"></i></button> */}
                    </div>
                  </div> : 
                  <Spinner />
      }
    </div>
  )
}

export default Home;