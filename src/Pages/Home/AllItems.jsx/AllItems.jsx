import axios from 'axios';
import React, {useEffect } from 'react';



const AllItems = () => {
    useEffect(()=>{
    axios.get('http://localhost:3000/items')
    .then(res=>{
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error);
    })
    },[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default AllItems;