import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    // textDecoration: "underline",
    color: "#4267B2"
  };

  const guestLinks = (
    <>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link link-dark fw-bold' style={({ isActive }) => isActive ? activeStyle : {}} >Login</NavLink>
      </li>
    </>
  );

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