import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    // sign in with email and password
    const UserSignUp =(email,passaword)=>{
        return createUserWithEmailAndPassword(auth,email,passaword);
    }
    
    const userInfo = {
      UserSignUp
     }

    return (
        <AuthContext value={userInfo}>
                 {children}
        </AuthContext>
    );
};

export default AuthProvider;