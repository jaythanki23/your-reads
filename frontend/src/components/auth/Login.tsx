import React, { useContext, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { authContext as AuthContext } from '../../context/auth/authContext';

import { RegisterData } from '../../types/dataTypes';

const Login = () => {

  const { register, error, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const googleSuccess = async (credentialResponse: any) => {
    const userObj: any = jwtDecode(credentialResponse.credential as string);
    const data: RegisterData = {
      name: userObj.name,
      email: userObj.email,
      image: userObj.picture,
      givenName: userObj.given_name,
      familyName: userObj.family_name
    }

    register?.(data);
  }
  
  return (
    <div>
      {error && <div className="alert alert-danger m-2 p-2" role="alert">
                  {error}
                </div>
      }
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card shadow-sm" style={{"borderRadius": "5px", "height": "20rem"}}>
                <div className="card-body p-5">
                  <h1 className="text-center mb-3"><i className="bi bi-book" style={{"marginRight": "10px"}}></i>Your reads</h1>
                  <p className='fs-5'>Pick, organize, and mark your reads.</p>
                  <hr />
                  <div className='d-flex justify-content-center mt-5'>
                    <GoogleLogin 
                      onSuccess={googleSuccess}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login