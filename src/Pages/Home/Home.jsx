import React from 'react';
import Banner from './Banner';
import AllItems from './AllItems.jsx/AllItems';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllItems></AllItems>
             <div className='flex justify-center mb-12'>
            <Link to='/allItems' className='btn btn-primary text-white px-8'>See All Items</Link>
            </div>
        </div>
    );
};

export default Home;