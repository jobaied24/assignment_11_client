import axios from 'axios';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import EmptyMsg from '../../error/EmptyMsg';

const ItemList = ({ itemsPromise }) => {
  const initialItems = use(itemsPromise);
  const [myItems,setmyItems] = useState(initialItems);

  const handleDeleteItem = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f9bf3b",
      cancelButtonColor: "#4B5563",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment11-server-puce.vercel.app/deleteItem/${id}`,{
          withCredentials:true
        })
        .then(res=>{
          console.log(res.data);
          if(res.data.deletedCount){
                  Swal.fire({
          title: "Deleted!",
          text: "Item has been deleted.",
          icon: "success"
        });

        const remainMyItems = myItems.filter(items =>items._id !== id);
        setmyItems(remainMyItems);
          }

        })

      }
    });

  }
  console.log(myItems);
  return (
    <div className='mx-1 my-4 md:m-12'>
      {
        myItems.length>0 ?       <div className="overflow-x-auto">

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
              <th className='hidden md:block'>Item Info</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {/* rows */}
            {
              myItems.map((myItem, index) =>
                <tr key={myItem._id}>
                  <th className='hidden md:block'>
                    <label>
                      {index + 1}
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
                  <td className='hidden md:block'>
                    <span className='font-semibold'>
                      {myItem.title}
                    </span>

                    <br />
                    <span className="badge badge-ghost badge-sm">{myItem.location}</span>
                  </td>
                  <td className='font-medium'>{myItem.date}</td>
                  <th className='flex gap-1 md:gap-4'>
                    <Link to={`/updateItem/${myItem._id}`} className="btn btn-primary btn-xs text-white">Update</Link>
                    <Link onClick={()=>handleDeleteItem(myItem._id)} className="btn bg-gray-600 btn-xs text-white">Delete</Link>
                  </th>
                </tr>
              )
            }


          </tbody>
        </table>
      </div>   : <EmptyMsg></EmptyMsg>
      }

    </div>
  );
};

export default ItemList;