import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col'>

            <Navbar></Navbar>

            <div>
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Error;