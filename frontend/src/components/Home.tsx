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
      {!loading ? <>
                    <form className="row g-5">
                      <div className="col-auto mx-4">
                        <input type="text" className="form-control"/>
                      </div>
                    </form>  
                  </> : 
                  <Spinner />
      }
    </div>
  )
}

export default Home;