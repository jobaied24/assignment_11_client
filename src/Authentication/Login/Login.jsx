import React, { useContext } from 'react';
import { AuthContext } from '../../../Auth/AuthContext';

const Login = () => {
  const {userSignIn}=useContext(AuthContext);

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    
       userSignIn(email,password)
    .then(res=>{
      console.log(res.user);
    })
    .catch(error=>{
      console.log(error);
    })
  }

    return (
<div className="hero py-20 bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-center text-4xl text-gray-500 font-semibold">Login now!</h1>
      
       {/* form */}
        <form onSubmit={handleSignIn}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
    );
};

export default Login;