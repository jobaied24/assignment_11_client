import React, { Suspense, useContext } from 'react';
import useItemApi from '../../Api/useItemApi';
import ItemList from './ItemList';
import { AuthContext } from '../../Auth/AuthContext';
import Loading from '../../shared/Loading';

const MyItems = () => {
    const {user} = useContext(AuthContext); 
    const {itemsPromise} = useItemApi();
    console.log(itemsPromise)

    return (
     <div>
       
      <Suspense fallback={<Loading></Loading>}>
     <ItemList itemsPromise={itemsPromise(user.email)}></ItemList>
        </Suspense> 


     </div>
    );
};

export default MyItems;