// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK8riQTlAFc_zmeQIdiSXAvyRjeRyKMwo",
  authDomain: "assignment-11-auth-56502.firebaseapp.com",
  projectId: "assignment-11-auth-56502",
  storageBucket: "assignment-11-auth-56502.firebasestorage.app",
  messagingSenderId: "636330297380",
  appId: "1:636330297380:web:2d02bf1e836c209ea6f0b1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);