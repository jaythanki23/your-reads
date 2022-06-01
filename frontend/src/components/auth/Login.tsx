import React from 'react';


const Login = () => {
  
  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card shadow-sm" style={{"borderRadius": "5px", "height": "30rem"}}>
                <div className="card-body p-5">
                  <h1 className="text-center mb-5">Sign In</h1>
                  <button className="btn btn-primary btn-lg btn-block">Sign with Google</button>
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