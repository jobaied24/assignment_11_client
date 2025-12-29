import React, { use } from 'react';
import EmptyMsg from '../../error/EmptyMsg';

const RecoveredItemList = ({recoveredItemsPromise}) => {
    const recoveredItems = use(recoveredItemsPromise);
    console.log(recoveredItems);
    
    return (
    <div className='my-4 md:my-12 mx-1 md:mx-20'>
      {
        recoveredItems.length>0 ? 
              <div className="overflow-x-auto">

        <table className="table-xs md:table text-gray-600">
          {/* head */}
          <thead>
            <tr>
              <th className='hidden md:block'>
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
              recoveredItems.map((recoveredItem, index) =>
                <tr key={recoveredItem._id}>
                  <th className='hidden md:block'>
                    <label>
                      {index + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center  md:gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-10 w-10 hidden md:block">
                <img
                  src={recoveredItem.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
                      <div>
                        <div className="font-semibold">{recoveredItem.category}</div>
                        <div className="text-sm opacity-50">{recoveredItem.postType}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='font-semibold'>
                      {recoveredItem.title}
                    </span>

                    <br />
                    <span className="badge badge-ghost badge-sm">{recoveredItem.location}</span>
                  </td>
                  <td className='font-medium'>{recoveredItem.date}</td>

                </tr>
              )
            }
          </tbody>
        </table>
      </div>  : <EmptyMsg></EmptyMsg>
      }

    </div>
    );
};

export default RecoveredItemList;