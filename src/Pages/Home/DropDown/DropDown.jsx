import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../../Auth/AuthContext';
import Swal from 'sweetalert2';

const DropDown = () => {
    const {user,signOutUser} = useContext(AuthContext);
    const handleSignOut = ()=>{
        signOutUser()
        .then(()=>{
           
            Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User Sign Out",
                      showConfirmButton: false,
                      timer: 1500
                    });
                  })
                 
            
    }
    return (
        <div className='flex gap-3 items-center'>
                        <img src={user.photoURL} className='h-[50px] rounded-full'></img>

            <NavLink to='/' onClick={handleSignOut} className="btn btn-primary text-white">Sign Out</NavLink>
        </div>
    );
};

export default DropDown;