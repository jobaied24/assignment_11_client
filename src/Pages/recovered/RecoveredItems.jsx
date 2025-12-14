import React, { Suspense, useContext } from 'react';
import useRecoveredApi from '../../Api/useRecoveredApi';
import { AuthContext } from '../../Auth/AuthContext';
import RecoveredItemList from './RecoveredItemList';

const RecoveredItems = () => {
    const {user} = useContext(AuthContext);
    const {recoveredItemsPromise}=useRecoveredApi();
     
          if (!user) {
    return <p>Loading user...</p>;
  }
  
    return (
        <Suspense fallback={'wait kijiey'}>
          <RecoveredItemList recoveredItemsPromise={recoveredItemsPromise(user.email)}></RecoveredItemList>
        </Suspense>
    );
};

export default RecoveredItems;