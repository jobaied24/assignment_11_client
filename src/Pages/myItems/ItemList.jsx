import React, { use } from 'react';
import { Link } from 'react-router';

const ItemList = ({itemsPromise}) => {
    const myItems = use(itemsPromise);
    console.log(myItems);
    return (
        <div className='m-12'>
            <div className="overflow-x-auto">

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            No.
          </label>
        </th>
        <th>Category</th>
        <th>Item Info</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {/* rows */}
      {
        myItems.map((myItem,index)=><>
              <tr>
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-semibold">{myItem.category}</div>
              <div className="text-sm opacity-50">{myItem.postType}</div>
            </div>
          </div>
        </td>
        <td>
          <span className='font-semibold'>
        {myItem.title}
          </span>
  
          <br />
          <span className="badge badge-ghost badge-sm">{myItem.location}</span>
        </td>
        <td className='font-medium'>{myItem.date}</td>
        <th className='flex gap-4'>
          <Link className="btn btn-primary btn-xs text-white">Update</Link>
          <Link className="btn bg-gray-600 btn-xs text-white">Delete</Link>
        </th>
      </tr>
        </>)
      }

      
  </tbody>
  </table>
</div>
        </div>
    );
};

export default ItemList;