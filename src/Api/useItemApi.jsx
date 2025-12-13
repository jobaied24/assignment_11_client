import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useItemApi = () => {
    const axiosSecure= useAxiosSecure();

    const itemsPromise = email =>{
        return axiosSecure.get(`/items?email=${email}`)
        .then(res=>res.data);
    }

    return {
        itemsPromise
    };
};

export default useItemApi;