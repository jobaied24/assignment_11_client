import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import DropDown from '../Pages/Home/DropDown/DropDown';


const Navbar = () => {
  const {user}=useContext(AuthContext);
  
  const link = <div className='text-gray-600'>
  <NavLink to='/'><li>Home</li></NavLink>
  </div>
  
    return (
<div className="navbar bg-base-100 shadow-sm px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {link}
      </ul>
    </div>
    <h2 className="text-2xl text-gray-500">LostAnd<span className='text-primary font-semibold'>Found</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {link}
    </ul>
  </div>
  <div className="navbar-end gap-2">
   
   {
    user ?  <DropDown></DropDown>
    :
    <>
  <NavLink to='/login' className="btn btn-primary text-white">Login</NavLink>
    <NavLink to='/register' className="btn btn-primary text-white">Register</NavLink>
    </>
   }
  
  </div>
</div>
    );
};

export default Navbar;