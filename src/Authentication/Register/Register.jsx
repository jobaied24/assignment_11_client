import React, { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthContext';

const Register = () => {
  const { UserSignUp, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state || '/';

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const name = userData.name;
    const email = userData.email;
    const photo = userData.photo;
    const password = userData.password;
    console.log(email, password);

    // check password
    const checkPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (checkPass.test(password) == false) {
      const msg = 'Password must have an uppercase, a lowercase letter and atleast 6 characters';
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
      });
      return;
    }

    if (!email || !password || !name || !photo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Please fill out all the fields!'
      });
      return;
    }


    // register user
    UserSignUp(email, password)
      .then(res => {

        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign up successfully",
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            navigate(redirectPath)
          });
      })
      .catch(error => {
        const errorCode = error.code;
        console.log(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorCode
        });
      })
  }


  // google signin
  const handleGoogleSignIn = () => {
    return googleSignIn()
      .then(res => {
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in successfully",
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            navigate(redirectPath);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        console.log(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorCode
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

              <div className=" text-gray-500">Have an account already? <Link className='font-semibold text-blue-500' to='/login'>Log in</Link></div>
              <button className="btn btn-primary mt-4 text-white">Register</button>
            </fieldset>
          </form>

          <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;