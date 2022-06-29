import React, { useContext, useEffect } from 'react';
import { authContext as AuthContext } from '../context/auth/authContext';
import Spinner from '../layout/Spinner';

const Home = () => {
  const { name, email, image, error, loading, loadUser } = useContext(AuthContext);

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
                    {/* <div className="row">
                      <div className="col">
                        <input type="text" className="form-control form-control-lg w-50" placeholder="First name" aria-label="First name" />
                      </div>
                    </div>  */}
                    <input type="text" className="form-control form-control-lg w-25 rounded" placeholder="Search" aria-label="Search" />
                    <div>
                    
                    </div> 
                  </div> : 
                  <Spinner />
      }
    </div>
  )
}

export default Home;