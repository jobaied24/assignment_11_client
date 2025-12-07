import React from 'react';

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
    <p className='text-sm text-gray-600'>{item.category}</p>
    <p className='text-sm text-gray-600'>{item.location}</p>
    <p className='text-sm text-gray-600 '>{item.date}</p>
    <div className="card-actions mt-4 justify-end">
      <button className="btn bg-gray-600 w-full text-white">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ItemCard;