import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';
import axios from 'axios';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // register with email and password
    const UserSignUp =(email,passaword)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,passaword);
    }

    // signin user
    const userSignIn = (email,passaword) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passaword);
    }

    // signin with google
    const googleSignIn = ()=>{
        setLoading(true);
     return signInWithPopup(auth,provider);
    };

    // user signout
    const signOutUser = ()=>{
        return signOut(auth);
    }

    // current user
    useEffect(()=>{
        
     const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      if(currentUser?.email){
        const userData ={email:currentUser.email} ;
        axios.post('https://assignment11-server-puce.vercel.app/jwt',userData,{
            withCredentials:true
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
      };

      
      setLoading(false);

     });

     return unSubscribe;

    },[])
    
    const userInfo = {
      UserSignUp,
      userSignIn,
      googleSignIn,
      user,
      loading,
      signOutUser
     }

    return (
        <AuthContext value={userInfo}>
                 {children}
        </AuthContext>
    );
};

export default AuthProvider;