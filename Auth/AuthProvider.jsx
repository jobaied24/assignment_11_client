import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    // register with email and password
    const UserSignUp =(email,passaword)=>{
        return createUserWithEmailAndPassword(auth,email,passaword);
    }

    // signin user
    const userSignIn = (email,passaword) =>{
        return signInWithEmailAndPassword(auth,email,passaword);
    }

    // signin with google
    const googleSignIn = ()=>{
     return signInWithPopup(auth,provider);
    }
    
    const userInfo = {
      UserSignUp,
      userSignIn,
      googleSignIn
     }

    return (
        <AuthContext value={userInfo}>
                 {children}
        </AuthContext>
    );
};

export default AuthProvider;