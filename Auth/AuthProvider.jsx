import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    // register with email and password
    const UserSignUp =(email,passaword)=>{
        return createUserWithEmailAndPassword(auth,email,passaword);
    }

    // signin user
    const userSignIn = (email,passaword) =>{
        return signInWithEmailAndPassword(auth,email,passaword);
    }
    
    const userInfo = {
      UserSignUp,
      userSignIn
     }

    return (
        <AuthContext value={userInfo}>
                 {children}
        </AuthContext>
    );
};

export default AuthProvider;