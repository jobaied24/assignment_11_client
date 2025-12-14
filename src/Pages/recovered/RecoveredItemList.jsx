import React, { use } from 'react';

const RecoveredItemList = ({recoveredItemsPromise}) => {
    const recoveredItems = use(recoveredItemsPromise);
    console.log(recoveredItems);
    
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
              recoveredItems.map((recoverdItem, index) =>
                <tr key={recoverdItem._id}>
                  <th>
                    <label>
                      {index + 1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-semibold">{recoverdItem.category}</div>
                        <div className="text-sm opacity-50">{recoverdItem.postType}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='font-semibold'>
                      {recoverdItem.title}
                    </span>

                    <br />
                    <span className="badge badge-ghost badge-sm">{recoverdItem.location}</span>
                  </td>
                  <td className='font-medium'>{recoverdItem.date}</td>

                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default RecoveredItemList;