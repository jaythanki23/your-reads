import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext as AuthContext } from '../context/auth/authContext';
import { bookContext } from '../context/book/bookContext';

const Navbar = () => {
  const { isAuthenticated, name, image, logout } = useContext(AuthContext);
  const { clear } = useContext(bookContext);

  const onLogout = () => {
    clear?.();
    logout?.();
  }

  let activeStyle = {
    color: "#FF3B3F"
  };


  const authLinks = (
    <>
      <li className='nav-item'>
        <NavLink to='/home' className='nav-link link-dark fw-bold' style={({ isActive }) => isActive ? activeStyle : {}}>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/reading' className='nav-link link-dark fw-bold' style={({ isActive }) => isActive ? activeStyle : {}}>
          Reading
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/shelf' className='nav-link link-dark fw-bold' style={({ isActive }) => isActive ? activeStyle : {}}>
          Shelf
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/read' className='nav-link link-dark fw-bold' style={({ isActive }) => isActive ? activeStyle : {}}>
          Read
        </NavLink>
      </li>
    </>
  )
  
  return (
    <nav className='navbar navbar-expand-sm' style={{"backgroundColor": "#FFF", "maxHeight": "60px"}}>
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
      <div className='container-fluid justify-content-center'>
        <ul className='navbar-nav gap-3'>
          {isAuthenticated ? authLinks : ''}
        </ul>
      </div>
      <div className='container-fluid justify-content-end'>
        <ul className='navbar-nav'>
          {/* {isAuthenticated ? authLinks : guestLinks} */}
          <li className='nav-item'>
            {isAuthenticated ? <a href='#' className='nav-link fw-bold' onClick={onLogout} style={{'color': 'black'}} ><span>Logout</span></a> : ''}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;