import React from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {

  // const onGoogle = async () => {
  //   axios.create({ withCredentials: true});
  //   const res = await axios.get('/auth/google');
  // }

  // const googleSucess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  //   console.log(res);
  // };

  // const googleFailure = (error: any) => {
  //   console.log(error);
  // };
  
  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card shadow-sm" style={{"borderRadius": "5px", "height": "30rem"}}>
                <div className="card-body p-5">
                  <h1 className="text-center mb-3"><i className="bi bi-book" style={{"marginRight": "10px"}}></i>Your reads</h1>
                  <p className='fs-5'>Pick, organize, and mark your reads.</p>
                  <hr />
                  <GoogleLogin 
                    onSuccess={async (credentialResponse) => {
                      const accessToken = credentialResponse.credential;
                      let config = {
                        headers: {
                          Authorization: `Bearer ${accessToken}`
                        }
                      }
                      const res = await axios.get("https://people.googleapis.com/v1/people/me?personFields=names HTTP/1.1", config);
                      console.log(res);
                      // console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                  {/* <button className="btn btn-primary btn-lg btn-block mt-4" onClick={onGoogle}><i className="bi bi-google" style={{"marginRight": "10px"}}></i>Log In With Google</button> */}
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