import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
<div className="hero bg-base-200 min-h-screen py-20 px-10">
  <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
<div>
        <img
      src={details.thumbnail}
      className="max-w-sm rounded-lg object-cover shadow-xl"
    />
</div>
    <div className='space-y-2'>
      <h1 className="text-4xl my-2 text-gray-800 font-bold ">{details.title}</h1>
 
    <p className='text-sm  text-gray-800'><span className='font-medium'>Category: </span>{details.category}</p>
    <p className='text-sm  text-gray-800'><span className='font-medium'>Location: </span>{details.location}</p>
    <p className='text-sm  text-gray-800 '><span className='font-medium'>Date: </span>{details.date}</p>
    <p className='text-sm  text-gray-800 '><span className='font-medium'>Name: </span>{details.name}</p>
    <p className='text-sm  text-gray-800 '><span className='font-medium'>Email: </span>{details.email}</p>
          <p className="text-sm text-gray-800 leading-relaxed  mt-4 bg-base-100 p-4 rounded-lg border-2 border-gray-300 py-6">
       {details.description}
      </p>
      <button className="btn btn-primary mt-2 text-white"> Found This!</button>
    </div>
  </div>
</div>
    );
};

export default PostDetails;