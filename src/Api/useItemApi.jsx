import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useItemApi = () => {
    const axiosSecure= useAxiosSecure();

    const itemsPromise = () =>{
        return axiosSecure.get(`/items`)
        .then(res=>res.data);
    }

    return {
        itemsPromise
    };
};

export default useItemApi;