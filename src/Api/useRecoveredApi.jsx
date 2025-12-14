import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';

const useRecoveredApi = () => {
    const axiosSecure = useAxiosSecure()

    const recoveredItemsPromise = email =>{
        return axiosSecure.get(`/allRecovered?email=${email}`)
        .then(res=>res.data);
    }
    return {
        recoveredItemsPromise
    }
};

export default useRecoveredApi;