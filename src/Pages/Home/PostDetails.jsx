import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
  const details = useLoaderData();
  const [recoveredDate, setRecoveredDate] = useState(null);
  console.log(details);


  const handleRecoveredItems = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    if(recoveredDate){
      data.date = recoveredDate.toLocaleDateString();
    };
    data.itemId = details._id;
    console.log(data);

    axios.post('http://localhost:3000/recovered',data)
    .then(res=>{
      console.log(res.data);
    })
    .catch(error=>{
      console.log(error);
    })

  }
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
          <label htmlFor="my_modal_7" className={`btn btn-primary mt-4 text-white ${details.status==="recovered" && "btn-disabled"}`}>
            {
              details.postType == "Lost" ?
                <span>Found This!</span> : <span>This is Mine!</span>
            }
          </label>


          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">


              <div className="card-body">
                <h1 className="text-3xl text-primary text-center mb-4 font-medium">Recovery Information</h1>
                
                {/* form */}
                <form onSubmit={handleRecoveredItems}>
                <fieldset className="fieldset px-4">  

                  {/* location */}
                  <input type="text" name='location' className="input w-full" placeholder="Recovered Location" />

                  {/* date */}
                  <DatePicker
                    selected={recoveredDate}
                    onChange={(date) => setRecoveredDate(date)}
                    className="input w-full"
                    dateFormat={"dd/MM/yyyy"}
                    popperPlacement='bottom-end'
                    placeholderText='Recovery Date'
                  />

                  {/* name */}
                  <input type="text" name='name' className="input w-full text-gray-600 bg-gray-100" value={details.name} readOnly/>

                  {/* email */}
                  <input type="email" name='email' className="input w-full text-gray-600 bg-gray-100" value={details.email} readOnly/>
                
                  {/* post Type */}
                  <input type="text" name='postType' className="input w-full text-gray-600 bg-gray-100" placeholder="post Type" value={details.postType} readOnly  />
               
                  {/* post Type */}
                  <input type="text" name='category' className="input w-full text-gray-600 bg-gray-100" placeholder="Category" value={details.category} readOnly  />
               
                    {/* title */}
                  <input type="text" name='title' className="input w-full  text-gray-600 bg-gray-100" placeholder="Item title" value={details.title} readOnly />
                 
                  {/* image */}
                  <input type="text" name='thumbnail' className="input w-full text-gray-600 bg-gray-100" value={details.thumbnail} readOnly/>


                  <button className="btn bg-gray-600 text-white mt-4">submit</button>
                </fieldset>
                </form>

              </div>
            </div>100
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostDetails;