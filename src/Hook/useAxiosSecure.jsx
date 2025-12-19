import axios from 'axios';
import React from 'react';
import { AuthContext } from '../Auth/AuthContext';

const axiosInstance = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials: true
});

const useAxiosSecure = () => {

    return axiosInstance; 
};

export default useAxiosSecure;