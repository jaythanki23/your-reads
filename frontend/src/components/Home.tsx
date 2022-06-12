import React, { useContext, useEffect } from 'react';
import { authContext as AuthContext } from '../context/authContext';

const Home = () => {
  const { name, email, image, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser?.();
  }, []);

  return (
    <>
      <div className='fs-1'>Home</div>
      <div>
        <div className='fs-1'>{name}</div>
        <div className='fs-1'>{email}</div>
        <img src={image as string} alt='profile pic' />
      </div>
    </>
  )
}

export default Home;