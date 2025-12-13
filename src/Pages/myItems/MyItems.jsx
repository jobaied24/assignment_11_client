import React, { Suspense, useContext } from 'react';
import useItemApi from '../../Api/useItemApi';
import ItemList from './ItemList';
import { AuthContext } from '../../Auth/AuthContext';

const MyItems = () => {
    const {user} = useContext(AuthContext); 
    const {itemsPromise} = useItemApi();
    console.log(itemsPromise)
      if (!user) {
    return <p>Loading user...</p>;
  }
    return (
     <div>

        <Suspense fallback='wait kijiey...'>
     <ItemList itemsPromise={itemsPromise(user.email)}></ItemList>
        </Suspense>
     </div>
    );
};

export default MyItems;