import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center my-28'>
            <span className="loading text-primary loading-bars loading-xl"></span>
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading loading-bars loading-xl"></span>
            <span className="loading text-primary loading-bars loading-xl"></span>
        </div>
    );
};

export default Loading;