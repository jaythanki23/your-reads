import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/auth/authContext';
import { ProviderProps } from '../types/dataTypes';

const PrivateRoute = (props: ProviderProps) => {
  const { isAuthenticated } = useContext(authContext);
  return (
    <>
      {!localStorage.token && !isAuthenticated ? (<Navigate to={'/'} />) : (props.children)}
    </>
  )
}

export default PrivateRoute