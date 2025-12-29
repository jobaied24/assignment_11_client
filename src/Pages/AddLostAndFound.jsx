import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

const AddLostAndFound = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [date, setDate] = useState(null);

    const handleSubmitForm = e =>{
        e.preventDefault();
        const form= e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        
if (date) {
  data.date = date.toISOString();
}


        axios.post('https://assignment11-server-puce.vercel.app/addItems',data,{
            withCredentials:true
        })
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                      Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Item added successfully",
                         showConfirmButton: false,
                         timer: 1500
                       }); 
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm} className='md:mx-auto mx-6 my-12 md:my-20 md:w-lg rounded-box bg-gray-200 px-2 md:px-10 py-8'>
               <h1 className='text-center text-2xl mb-4 text-gray-700 font-semibold'>Add Lost And Found Itmes</h1>
                <fieldset className="fieldset bg-base-200  border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend text-gray-600">Basic Info</legend>

                    {/* Post Type */}
                    <label className="label">Post Type</label>
                    <select defaultValue="select Post Type" name='postType' className="select w-full">
                        <option disabled selected>Select Post Type</option>
                        <option>Lost</option>
                        <option>Found</option>
                    </select>

                    {/* Title */}
                    <label className="label">Title</label>
                    <input type="text" name='title' className="input w-full" placeholder="Title" />

                    {/* Category */}
                    <label className="label">Category</label>
                    <select name="category" className="select w-full">
                        <option disabled selected>Select Category</option>
                        <option>Pets</option>
                        <option>Documents</option>
                        <option>Gadgets</option>
                        <option>Electronics</option>
                        <option>Accessories</option>
                        <option>Keys & Wallets</option>
                        <option>Other</option>
                    </select>


                    {/* Thumbnail */}
                    <label className="label">Thumbnail</label>
                    <input type="text" name='thumbnail' className="input w-full" placeholder="Image URL" />

                    {/* Location */}
                    <label className="label">Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Location" />

                    {/* Date */}
                    <label className="label">Date</label>
                    
                    <DatePicker
                        selected={date}
                        onChange={(d) => setDate(d)}
                        className="input w-full"
                        dateFormat={"dd/MM/yyyy"}
                        popperPlacement='bottom-end'
                        placeholderText='Date'
                    />
                </fieldset>

                {/* {Description} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-gray-600">Description</legend>
                    <textarea name="description" className='textarea w-full h-32' placeholder='Description' ></textarea>
                </fieldset>


                {/* Contact Informations */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-gray-600">Contact Information</legend>

                    <label className="label">Name</label>
                    <input type="text" name='name' defaultValue={user.displayName} className="input w-full bg-gray-200" placeholder="Name" />

                    <label className="label">Email</label>
                    <input type="email" name='email' defaultValue={user.email} className="input w-full bg-gray-200" placeholder="Email" />
                </fieldset>

                {/* submit button */}
                <button className="btn btn-primary w-full text-white mt-7">Add Post</button>

            </form>

        </div>
    );
};

export default AddLostAndFound;