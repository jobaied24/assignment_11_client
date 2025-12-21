import React from 'react';
import { Fade } from "react-awesome-reveal";

const KeyFeature = () => {
    return (
        <div className='my-28 mx-20 text-gray-600 flex flex-col gap-5 text-center '>
            <Fade
                direction='up'
                cascade
                damping={0.2}
            >
                <h2 className='text-5xl font-semibold'>Take your lost & found experience<br /> <span className='text-primary'>to the next level</span></h2>
                <p className='text-lg max-w-5xl mx-auto'>From fast search and secure posting to interactive location tracking, everything you need to report or find lost items is all in one platform.</p>
            </Fade>
        </div>

    );
};

export default KeyFeature;