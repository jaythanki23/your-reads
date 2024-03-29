import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthState from './context/auth/AuthState';
import BookState from './context/book/BookState';
import JourneyState from './context/journey/JourneyState';
import Login from './components/auth/Login';
import Home from './components/Home/Home';
import Navbar from './layout/Navbar';
import Read from './components/Read/Read';
import Shelf from './components/Shelf/Shelf';
import Reading from './components/Reading/Reading';
import PrivateRoute from './routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const CLIENTID = "918908597696-fu9rsapoqiih191od2j4ignlsg5v3ef2.apps.googleusercontent.com";

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={CLIENTID}>
        <AuthState>
          <BookState>
            <JourneyState>
              <Router>
                <Navbar />
                <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='/home' element={<PrivateRoute>
                                                <Home />
                                              </PrivateRoute>} 
                  />
                  <Route path='/read' element={<PrivateRoute>
                                                <Read />
                                              </PrivateRoute>} 
                  />
                  <Route path='/shelf' element={<PrivateRoute>
                                                <Shelf />
                                              </PrivateRoute>} 
                  />
                  <Route path='/reading' element={<PrivateRoute>
                                                <Reading />
                                              </PrivateRoute>} 
                  />
                </Routes>
              </Router>
            </JourneyState>
          </BookState>
        </AuthState>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
