import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const myItem = useLoaderData();
    const [itemDate, setItemDate] =useState(myItem.date ? new Date(myItem.date) : null);

    const handleUpdateItem = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        if(itemDate){
        data.date = itemDate.toISOString();
        }
        console.log(data);

        axios.put(`https://assignment11-server-puce.vercel.app/updateItem/${myItem._id}`, data,{
            withCredentials:true
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item Update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdateItem} className='mx-auto my-20 md:w-lg rounded-box bg-gray-100 px-10 py-8'>
                <h1 className='text-center text-2xl mb-4 text-primary font-semibold'>Update Item</h1>
                <fieldset className="fieldset bg-base-200  border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend text-gray-600">Basic Info</legend>

                    {/* Post Type */}
                    <label className="label">Post Type</label>
                    <select defaultValue={myItem.postType} name='postType' className="select w-full">
                        <option disabled >Select Post Type</option>
                        <option>Lost</option>
                        <option>Found</option>
                    </select>

                    {/* Title */}
                    <label className="label">Title</label>
                    <input type="text" name='title' defaultValue={myItem.title} className="input w-full" placeholder="Title" />

                    {/* Category */}
                    <label className="label">Category</label>
                    <select defaultValue={myItem.category} name="category" className="select w-full">
                        <option disabled >Select Category</option>
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
                    <input type="text" name='thumbnail' defaultValue={myItem.thumbnail} className="input w-full" placeholder="Image URL" />

                    {/* Location */}
                    <label className="label">Location</label>
                    <input type="text" name='location' defaultValue={myItem.location} className="input w-full" placeholder="Location" />

                    {/* Date */}
                    <label className="label">Date</label>

                    <DatePicker
                        selected={itemDate}
                        onChange={(d) => setItemDate(d)}
                        className="input w-full"
                        dateFormat={"dd/MM/yyyy"}
                        popperPlacement='bottom-end'
                        placeholderText='Date'
                    />
                </fieldset>

                {/* {Description} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-gray-600">Description</legend>
                    <textarea name="description" defaultValue={myItem.description} className='textarea w-full h-32' placeholder='Description' ></textarea>
                </fieldset>


                {/* Contact Informations */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-gray-600">Contact Information</legend>

                    <label className="label">Name</label>
                    <input type="text" name='name' value={myItem.name} readOnly className="input w-full bg-gray-200" placeholder="Name" />

                    <label className="label">Email</label>
                    <input type="email" name='email' value={myItem.email} readOnly className="input w-full bg-gray-200" placeholder="Email" />
                </fieldset>

                {/* submit button */}
                <button className="btn bg-gray-600 w-full text-white mt-7">Update Item</button>

            </form>
        </div>
    );
};

export default UpdateItem;