import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>

            <Navbar></Navbar>

            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;