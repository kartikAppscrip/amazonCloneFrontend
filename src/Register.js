import React, { useEffect, useState } from 'react';
import amazonInLogo from "./Body/BannerImages/amazonInLogo.png"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input';
import app from './firebase';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertBox, setAlertBox] = useState(false);
  const [alertCode, setAlertCode] = useState('');
  const [alertToShow, setAlertToShow] = useState('');

  const allDataObj = [
    {
      heading: 'Your name',
      type: 'name',
      placeholder: 'First and last name',
      value: name,
      handleChange: setName,
      required: false
    },
    {
      heading: 'Mobile number',
      type: 'number_',
      placeholder: 'Mobile number',
      value: number,
      handleChange: (num) => setNumber(num?.replace(/[^0-9 ]/g, '')),
      required: false
    },
    {
      heading: 'Email (optional)',
      type: 'email',
      placeholder: 'Email',
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
  const handleRegistration = async (email, password) => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('User was registered with us successfully!', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
        navigate('/signin');
      })
      .catch((error) => {
        setAlertBox(true);
        setAlertCode(error.code);
        console.dir(error);
      });
  };

  const handleSubmit = (e) => {
    if (password.length > 6) {
      handleRegistration(email, password);
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (alertCode?.length > 0) {
      switch (alertCode) {
        case "auth/invalid-email":
          setAlertToShow(`Your provided Email ${email} is invalid. Please use another Email address.`);
          break;
        case "auth/email-already-in-use":
          setAlertToShow(`Your provided Email ${email} has already been used. Please use another Email address.`);
          break;
        default:
          setAlertToShow("");
          setAlertBox(false);
          break;
      }
    }
  }, [alertCode]);

  return (
    <div className="center flex-column">
      <img src={amazonInLogo} alt="logo" />
      {alertBox && <div className="p-3 mt-2 alertBorderBox" style={{ width: 350 }}>
        <p className="m-0 alert_color font-17">There was a problem</p>
        <p className="m-0 font-13">{alertToShow}</p>
      </div>}
      <div className="p-3 mt-2 borderBox" style={{ width: 350 }}>
        <h2 style={{ fontWeight: 400, marginBottom: 10 }}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          {allDataObj?.map((data, index) => (<div className="d-flex flex-column mb-3">
              <label className="m-0 heading">{data?.heading}</label>
              <Input type={data?.type} className="input_field" placeholder={data?.placeholder} value={data?.value} onChange={data?.handleChange} required={data?.heading} />
              {index === 3 && <p className="m-0 mt-1 font-12">Passwords must be at least 6 characters.</p>}
            </div>))}
            <p className="heading" style={{ fontWeight: 'unset' }}>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
          <button className="center w-100 continueBtn" type="submit">Continue</button>
        </form>
        <p className="font-12 my-3">Already have an account? <Link to="/signin">Sign in</Link></p>
      </div>
      <style>
        {`
        .borderBox {
          border-radius: 8px;
          padding: 14px 18px;
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
      `}
      </style>
    </div>
  );
};

export default Register;
