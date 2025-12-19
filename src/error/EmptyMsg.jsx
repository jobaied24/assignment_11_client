import React from 'react';

const EmptyMsg = () => {
    return (
<div className="card mx-auto my-30 p-10 w-sm bg-gray-600 shadow-sm">
  <div className="card-body flex flex-col justify-center items-center text-primary">
    <h2 className="card-title  text-3xl">No items found.</h2>
    <h3 className='text-lg font-medium text-center'>There is no data to display at the moment.</h3>
  </div>
</div>
    );
};

export default EmptyMsg;