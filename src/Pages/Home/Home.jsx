import React from 'react';
import Banner from './Banner';
import AllItems from './AllItems.jsx/AllItems';
import { Link, useLoaderData } from 'react-router';
import ItemCard from './itemCard';

const Home = () => {
     const items = useLoaderData();
     console.log(items);
    return (
        <>
            <Banner></Banner>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 my-16 mx-6'>
            {
                items.map(item=><ItemCard item={item}></ItemCard>)
            }
            </div>

            

             <div className='flex justify-center mb-12'>
            <Link to='/allItems' className='btn btn-primary text-white px-8'>See All Items</Link>
            </div>
</>
    );
};

export default Home;