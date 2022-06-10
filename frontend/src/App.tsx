import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/auth/Login';
import Home from './Home';

import './App.css';

const CLIENTID = "918908597696-fu9rsapoqiih191od2j4ignlsg5v3ef2.apps.googleusercontent.com";

const App = () => {
  
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={CLIENTID}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
