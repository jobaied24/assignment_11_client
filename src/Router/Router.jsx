import React from 'react';
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

const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
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
                Component:AddLostAndFound
            },
            {
                path:'/allItems',
                Component:AllItems
            },
            {
                path:'/allItems/:id',
                Component:PostDetails,
                loader:({params})=>fetch(`http://localhost:3000/items/${params.id}`)
            },
            {  
                path:'/myItems',
                Component:MyItems,         
            },
            {
                path:'/updateItem/:id',
                Component:UpdateItem,
                loader:({params})=>fetch(`http://localhost:3000/items/${params.id}`)
            }
        ]
    }
])
export default router;