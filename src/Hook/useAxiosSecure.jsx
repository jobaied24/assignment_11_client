import axios from 'axios';
import React from 'react';
import { AuthContext } from '../Auth/AuthContext';

const axiosInstance = axios.create({
    baseURL:'https://assignment11-server-puce.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {

    return axiosInstance; 
};

export default useAxiosSecure;