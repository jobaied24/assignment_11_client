import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import AddLostAndFound from '../Pages/AddLostAndFound';
import AllItems from '../Pages/Home/AllItems.jsx/AllItems';
import PostDetails from '../Pages/Home/PostDetails';
import MyItems from '../Pages/myItems/MyItems';
import UpdateItem from '../Pages/UpdateItem';
import RecoveredItems from '../Pages/recovered/RecoveredItems';
import PrivateRoute from '../shared/PrivateRoute';
import ErrorCard from '../error/ErrorCard';
import Error from '../error/Error';

const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home,
                loader:()=>fetch(`http://localhost:3000/items?limit=6`)
                .then(res=>res.json())
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/addLostAndFound',
                element:<PrivateRoute><AddLostAndFound></AddLostAndFound></PrivateRoute>
            },
            {
                path:'/allItems',
                Component:AllItems
            },
            {
                path:'/allItems/:id',
                element:<PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/items/${params.id}`)
            },
            {  
                path:'/myItems',
                element:<PrivateRoute><MyItems></MyItems></PrivateRoute>        
            },
            {
                path:'/updateItem/:id',
                Component:UpdateItem,
                loader:({params})=>fetch(`http://localhost:3000/items/${params.id}`)
            },
            {
                path:'/allRecovered',
                element:<PrivateRoute><RecoveredItems></RecoveredItems></PrivateRoute>
            }
        ]
    },
    {
        path:'*',
        Component:Error,
        children:[
            {
                path:'*',
                Component:ErrorCard
            }
        ]
    }      
    
])
export default router;