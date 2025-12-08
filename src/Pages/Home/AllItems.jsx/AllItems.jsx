import axios from 'axios';
import React, {useEffect, useState } from 'react';
import ItemCard from '../itemCard';


const AllItems = () =>{

    const [items,setItems] = useState([]);
   
useEffect(()=>{
    axios.get('http://localhost:3000/items')
    .then(res=>{
        console.log(res.data);
        setItems(res.data);
    })
    .catch(error=>{
        console.log(error);
    })
    },[])
    return (
    <div>
        <div className='grid md:grid-cols-3 grid-cols- gap-10 my-16 mx-6'>
            {
                items.map(item=><ItemCard item={item}></ItemCard>)
            }
        </div>

    </div>


        
    );
};

export default AllItems;