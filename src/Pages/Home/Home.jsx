import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import ItemCard from './itemCard';
import KeyFeature from '../KeyFeature';
import { Fade } from 'react-awesome-reveal';
import HowItWork from '../HowItWork';

const Home = () => {
     const items = useLoaderData();
     console.log(items);
    return (
        <>
            <Banner></Banner>

                   <Fade
                  direction='up'
                  duration={600}
                  delay={0}>       
                    <h2 className='text-4xl text-center mt-16 md:mt-24 font-semibold text-primary'>
                Recently Added Items
            </h2>
                        </Fade>



            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-16 md:mt-20 mb-4 md:mb-16 mx-6'>
            {
                items.map(item=><ItemCard key={item._id} item={item}></ItemCard>)
            }
            </div>

             <div className='flex justify-center'>
            <Link to='/allItems' className='btn btn-primary text-white px-6 md:px-8 py-3 text-lg  hover:scale-105 transition'>See All Items</Link>
            </div>


            <KeyFeature></KeyFeature>

            <HowItWork></HowItWork>
</>
    );
};

export default Home;