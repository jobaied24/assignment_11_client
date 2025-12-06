import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Auth/AuthContext';

const AddLostAndFound = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [date, setDate] = useState(null);

    const handleSubmitForm = e =>{
        e.preventDefault();
        console.log('add lost or found items')
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm} className='mx-auto my-20 md:w-md'>

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
                        dateFormat={"dd/mm/yyyy"}
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
                <button className="btn btn-primary w-full text-white mt-4">Login</button>

            </form>

        </div>
    );
};

export default AddLostAndFound;