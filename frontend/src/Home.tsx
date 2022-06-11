import React, { useContext } from 'react';
import { authContext as AuthContext } from './context/authContext';

const Home = () => {
  const { name, email } = useContext(AuthContext);

  return (
    <>
      <div className='fs-1'>Home</div>
      <div>
        <div className='fs-1'>{name}</div>
        <div className='fs-1'>{email}</div>
      </div>
    </>
  )
}

export default Home;