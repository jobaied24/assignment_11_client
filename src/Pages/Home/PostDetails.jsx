import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
  const details = useLoaderData();
  const [recoveredDate, setRecoveredDate] = useState(null);

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


          {/* modal */}
          {/* The button to open modal */}
          <label htmlFor="my_modal_7" className="btn btn-primary mt-4 text-white">
            {
              details.postType == "Found" ?
                <span>Found This!</span> : <span>This is Mine!</span>
            }
          </label>


          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">

              {/* form */}
              <div className="card-body">
                <h1 className="text-3xl text-primary text-center mb-4 font-medium">Recovery Information</h1>
                <fieldset className="fieldset px-4">
                  {/* location */}
                  <input type="text" className="input w-full" placeholder="Recovered Location" />

                  {/* date */}
                  <DatePicker
                    selected={recoveredDate}
                    onChange={(date) => setRecoveredDate(date)}
                    className="input w-full"
                    dateFormat={"dd/MM/yyyy"}
                    popperPlacement='bottom-end'
                    placeholderText='Recovery date'
                  />

                  {/* name */}
                  <input type="text" className="input w-full text-gray-600" value={details.name} />

                  {/* email */}
                  <input type="email" className="input w-full text-gray-600" value={details.email} />


                  <button className="btn bg-gray-600 text-white mt-4">Login</button>
                </fieldset>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostDetails;