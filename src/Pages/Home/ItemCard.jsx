import React from 'react';
import { Link } from 'react-router';

const ItemCard = ({item}) => {
    
    return (
<div className="card bg-base-100 w-96 shadow-sm hover:shadow-xl transition-all duration-300">
  <figure>
    <img
    className='h-[180px]'
      src={item.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-gray-800">{item.title}
      <div className="badge bg-primary text-gray-700">{item.postType}</div>
    </h2>
    <p className='text-sm text-gray-600'><span className='font-semibold'>Category: </span>{item.category}</p>
    <p className='text-sm text-gray-600'><span className='font-semibold'>Location: </span>{item.location}</p>
    <p className='text-sm text-gray-600 '><span className='font-semibold'>Date: </span>{item.date}</p>
    <div className="card-actions mt-4 justify-end">
      <Link to={`/allItems/${item._id}`} className="btn bg-gray-600 w-full text-white">View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ItemCard;