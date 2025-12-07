import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const axiosInstance = axios.create({
    baseURL:'http://localhost:3000'
});

const useAxiosSecure = () => {
    const {user}= useContext(AuthContext);

        axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    });

    return axiosInstance; 
};

export default useAxiosSecure;