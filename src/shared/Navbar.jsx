import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import DropDown from '../Pages/Home/DropDown/DropDown';


const Navbar = () => {
  const {user}=useContext(AuthContext);
  
  const link = <>
  <li><NavLink to='/'>Home</NavLink></li>
  {
    user && <>
    <li><NavLink to='/addLostAndFound'>Add Itmes</NavLink></li>
    <li><NavLink to='/myItems'>My Items</NavLink></li>
    <li><NavLink to='/allRecovered'>Recovered Items</NavLink></li>
    </>
}
  </>
  
    return (
<div className="navbar bg-base-100 shadow-sm md:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow text-gray-600">
      {link}
      </ul>
    </div>
    
    {/* logo */}
    <h2 className="text-2xl text-gray-500 hidden md:block">LostAnd<span className='text-primary font-semibold'>Found</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-600">
   {link}
    </ul>
  </div>
  <div className="navbar-end gap-2">
   
   {
    user ?  <DropDown></DropDown>
    :
    <>
  <NavLink to='/login' className="btn btn-sm md:btn-md btn-primary text-white">Login</NavLink>
  <NavLink to='/register' className="btn btn-sm md:btn-md btn-primary text-white">Register</NavLink>
    </>
   }
  
  </div>
</div>
    );
};

export default Navbar;