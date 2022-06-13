import React, { useContext, useEffect } from 'react';
import { authContext as AuthContext } from '../context/authContext';
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
                    <div className='fs-1'>Home</div>
                    <div>
                      <div className='fs-1'>{name}</div>
                      <div className='fs-1'>{email}</div>
                      <img src={image as string} alt='profile pic' referrerPolicy="no-referrer" />
                    </div>
                  </> : 
                  <Spinner />
      }
    </div>
  )
}

export default Home;