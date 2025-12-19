import React from 'react';

const ErrorCard = () => {
    return (
<div className="card mx-auto my-30 p-10 w-sm bg-gray-600 shadow-sm">
  <div className="card-body flex flex-col justify-center items-center text-primary">
    <h2 className="card-title  text-6xl">404</h2>
    <h3 className='text-xl font-medium'>Page Not Found</h3>
  </div>
</div>
    );
};

export default ErrorCard;