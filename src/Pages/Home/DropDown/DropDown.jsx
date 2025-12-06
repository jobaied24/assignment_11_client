import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../../Auth/AuthContext';
import Swal from 'sweetalert2';

const DropDown = () => {
    const { user, signOutUser } = useContext(AuthContext);
    // const [click,setclick]=useState(false);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Sign Out",
                    showConfirmButton: false,
                    timer: 1500
                });
            });

    }
    return (
        <div className='flex gap-3 items-center'>
            <div className="dropdown dropdown-hover dropdown-center">
                <div tabIndex={0} role="button" className=" m-1">
                    <img src={user.photoURL} className='h-[45px] rounded-full'></img>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-gray-500 text-primary rounded-box z-10 w-48 py-5 mt-2 shadow-sm">
                      <h3 className='text-xl font-semibold text-center'>{user.displayName}</h3>
                </ul>
 
            </div>

            <NavLink to='/' onClick={handleSignOut} className="btn btn-primary text-white">Sign Out</NavLink>
        </div>
    );
};

export default DropDown;