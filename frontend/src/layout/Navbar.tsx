import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext as AuthContext } from '../context/auth/authContext';
import { bookContext } from '../context/book/bookContext';

const Navbar = () => {
  const { isAuthenticated, name, image, logout } = useContext(AuthContext);
  const { clear } = useContext(bookContext);

  const onLogout = () => {
    clear?.();
    logout?.();
  }

  const guestLinks = (
    <>
      <li className='nav-item'>
        <Link to='/login' className='nav-link link-dark fs-5' >Login</Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li className='nav-item'>
        <a href='#' className='nav-link fw-bold' onClick={onLogout} style={{'color': 'black'}} ><span>Logout</span></a>
      </li>
    </>
  )


  return (
    <nav className='navbar navbar-expand-sm' style={{"backgroundColor": "#DDE0E5", "maxHeight": "60px"}}>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
          {isAuthenticated ? <div className='d-flex justify-content-center align-items-center'> 
                              <img src={image as string} alt='profile pic' referrerPolicy="no-referrer" style={{'width': '35px', 'height': '35px', 'borderRadius': '50%'}} />
                              <p className='nav-link fw-bold text-center mt-2' style={{'color': 'black'}}>{name}</p>
                             </div>
                             : 
                             null
          } 
          </li>
        </ul>
      </div>
      <div className='container-fluid justify-content-end'>
        <ul className='navbar-nav'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;