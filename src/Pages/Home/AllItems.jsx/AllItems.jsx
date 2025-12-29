import axios from 'axios';
import React, {useEffect, useState } from 'react';
import ItemCard from '../itemCard';
import ErrorCard from '../../../error/ErrorCard';


const AllItems = () =>{

    const [items,setItems] = useState([]);
   
useEffect(()=>{
    axios.get('https://assignment11-server-puce.vercel.app/items',{
        withCredentials:true
    })
    .then(res=>{
        console.log(res.data);
        setItems(res.data);
    })
    .catch(error=>{
        console.log(error);
    })
    },[]);


    const handleSearchItems = e =>{
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);

    axios(`https://assignment11-server-puce.vercel.app/items?title=${search}`)
    .then(res=>{
        console.log(res.data);
        setItems(res.data);
    })
    .catch(error=>{
        console.log(error);
    })

    }
    
    return (
    <div>

        {/* search */}
        <form onSubmit={handleSearchItems}>
            <fieldset className="fieldset  md:mx-auto my-6 mx-4 md:w-1/2 rounded-box md:p-4">
  <div className="join">
    <input type="text" name='search' className="input w-full join-item" placeholder="Find items by title" />
    <button className="btn btn-primary text-white join-item">search</button>
  </div>
</fieldset>
        </form>



{/* items */}

          {
           items.length===0 && <div className='flex justify-center'>
           <div className="card my-10 p-10 w-sm bg-gray-600 text-center shadow-sm">
  <div className="card-body flex flex-col justify-center items-center text-primary">
    <h2 className="card-title  text-4xl">Sorry!</h2>
    <h3 className='text-xl font-medium'>There is no items with this title</h3>
  </div>
</div>
           </div>
          }


        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 my-8 md:my-16 mx-6'>

            {
                items.map(item=><ItemCard key={item._id} item={item}></ItemCard>)
            }
        </div>

    </div>


        
    );
};

export default AllItems;