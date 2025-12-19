import React, { Suspense, useContext } from 'react';
import useRecoveredApi from '../../Api/useRecoveredApi';
import { AuthContext } from '../../Auth/AuthContext';
import RecoveredItemList from './RecoveredItemList';
import Loading from '../../shared/Loading';

const RecoveredItems = () => {
    const {user} = useContext(AuthContext);
    const {recoveredItemsPromise}=useRecoveredApi();
     
  
    return (
        <Suspense fallback={<Loading></Loading>}>
          <RecoveredItemList recoveredItemsPromise={recoveredItemsPromise(user.email)}></RecoveredItemList>
        </Suspense>
    );
};

export default RecoveredItems;