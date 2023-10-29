import React, { useState } from 'react';
import amazonInLogo from "./Body/BannerImages/amazonInLogo.png"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import app from './firebase';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertBox, setAlertBox] = useState(false);

  const allDataObj = [
    {
      heading: 'Email or mobile phone number',
      type: '',
      placeholder: '',
      value: email,
      handleChange: setEmail,
      required: false
    },
    {
      heading: 'Password',
      type: 'password',
      placeholder: 'At least 6 characters',
      value: password,
      handleChange: setPassword,
      required: false
    }
  ];

  // Function to handle user registration
  const handleRegistration = async (email) => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign-in successful
        const user = userCredential.user;
        toast.success('User signed in successfully!', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
        navigate('/');
        // need to add notification for login and change hello guest in text to user name
        // Proceed with the authenticated session
      })
      .catch((error) => {
        console.dir(error);
        // Handle sign-in errors
        var str = "";
        if (error.code === 'auth/user-not-found') {
          str = "User not found."
        } else if (error.code === 'auth/wrong-password') {
          str = "Wrong password."
        } else if (error.code === 'auth/too-many-requests') {
          str = "Too many attempts. Try again later."
        } else {
          str = error.message
        }
        toast.error(str, {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
      });
  };

  const handleSubmit = (e) => {
      handleRegistration(email);
    e.preventDefault();
  };

  return (
    <div className="center flex-column">
      <img src={amazonInLogo} alt="logo" />
      {alertBox && <div className="p-3 mt-2 alertBorderBox" style={{ width: 350 }}>
        <p className="m-0 alert_color font-17">There was a problem</p>
        <p className="m-0 font-13">Your provided Email {email} has already been used. Please use another Email address.</p>
      </div>}
      <div className="mt-2 borderBox" style={{ width: 350 }}>
        <h2 style={{ fontWeight: 400, marginBottom: 15 }}>Sign in</h2>
        <form onSubmit={handleSubmit}>
          {allDataObj?.map((data, index) => (<div className="d-flex flex-column mb-3">
              <label className="m-0 heading">{data?.heading}</label>
              <Input checked={true} type={data?.type} className="input_field" placeholder={data?.placeholder} value={data?.value} onChange={data?.handleChange} required={data?.heading} />
              {index === 3 && <p className="m-0 mt-1 font-12">Passwords must be at least 6 characters.</p>}
            </div>))}
            <button className="center w-100 continueBtn" type="submit">Continue</button>
            <p className="heading m-0 mt-3" style={{ fontWeight: 'unset' }}>
              By continuing, you agree to Amazon's 
            <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"> Conditions of Use </a>
            and
            <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice.</a>
            </p>
            {false && <p className="heading m-0 mt-3" style={{ fontWeight: 'unset' }}>
              Reset Password
            </p>}
        </form>
        </div>
        <div class="divider-break my-3"><h5 aria-level="5">New to Amazon?</h5></div>
        <Link to="/register" className="center createAmaAcc">
          Create your Amazon account
        </Link>
      <style>
        {`
        .borderBox {
          border-radius: 8px;
          padding: 20px 26px;
          border: 1px solid #ddd;
        }
        .alertBorderBox {
          border-radius: 8px;
          padding: 14px 18px;
          border: 1px solid var(--alert_color);
        }
        .heading{
          padding-bottom: 2px;
          font-weight: 700;
          font-size: 13px;
          line-height: 19px;
          color: #111;
        }
        .continueBtn{
          color: #0F1111;
          background: #FFD814;
          border: 1px solid #FCD200;
          // border-color: #FCD200;
          border-radius: 8px;
          box-shadow: 0 2px 5px 0 rgba(213,217,217,.5);
          font-size: 13px;
          padding: 5px;
        }
        .createAmaAcc:hover{
          color: unset !important;
          text-decoration: none;
        }
        .createAmaAcc{
          width: 350px;
          color: #0F1111;
          background: transparent;
          border: 1px solid #D5D9D9;
          border-radius: 8px;
          box-shadow: 0 2px 5px 0 rgba(213,217,217,.5);
          font-size: 13px;
          padding: 5px;
        }
        h5 {
          line-height: 1;
          font-size: 12px;
          color: #767676;
          font-weight: 400;
          z-index: 2;
          position: relative;
          display: inline-block;
          background-color: #fff;
          padding: 0 8px 0 7px;
      }
        .divider-break {
          width: 350px;
          text-align: center;
          position: relative;
          top: 2px;
          padding-top: 1px;
          margin-bottom: 14px;
          line-height: 0;
        }
        .divider-break:after {
          content: "";
          width: 100%;
          background-color: transparent;
          display: block;
          height: 1px;
          border-top: 1px solid #e7e7e7;
          position: absolute;
          top: 50%;
          margin-top: -1px;
          z-index: 1;
      }
      `}
      </style>
    </div>
  );
};

export default Signin;
