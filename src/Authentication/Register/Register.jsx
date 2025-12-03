import React, { useContext } from 'react';
import { AuthContext } from '../../../Auth/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
  const {UserSignUp}=useContext(AuthContext);

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const name = userData.name;
    const email = userData.email; 
    const photo = userData.photo;
    const password = userData.password;
    console.log(email,password);
    
    // check password
    const checkPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(checkPass.test(password)==false){
      const msg = 'Password must have an uppercase, a lowercase letter and atleast 6 characters';
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text:msg,
});
return
    }

    if(!email || !password || !name || !photo){
            Swal.fire({
  icon: "error", 
  title: "Oops...",
  text:'Please fill out all the fields!'
});
return 
    }

    
    // register user
    UserSignUp(email,password)
    .then(res=>{
      console.log(res.user);
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Sign up successfully",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
  icon: "error", 
  title: "Oops...",
  text:'registration failed!'
});
    })
  }
    return (
<div className="hero py-20 bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-center text-4xl text-gray-500 font-semibold">Register now!</h1>
        {/* form */}
        <form onSubmit={handleRegister}>
        <fieldset className="fieldset">

          {/* name */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
           
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          
          {/* Photo URL */}
          <label className="label">Photo</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <div><a className=" text-gray-500">Have an account already? <Link className='font-semibold text-blue-500' to='/login'>Log in</Link></a></div>
          <button className="btn btn-primary mt-4">Register</button>
        </fieldset>
        </form>

      </div>
    </div>
  </div>
    );
};

export default Register;