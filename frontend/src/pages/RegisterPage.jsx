import React, { useState } from 'react';
import axios from "axios";
import './RegisterPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  }

  const maxDate = () => {
    const today = new Date();
    const year = today.getFullYear() - 18;
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|co\.uk)$/;
    return emailRegex.test(email);
  };

  const register = () => {
    let isValid = true;
    let errors = {};

    if (!firstName) {
      isValid = false;
      errors.firstName = "First Name is required";
    }

    if (!lastName) {
      isValid = false;
      errors.lastName = "Last Name is required";
    }

    if (!address) {
      isValid = false;
      errors.address = "Address is required";
    }

    if (!dob) {
      isValid = false;
      errors.dob = "Date of Birth is required";
    }

    if (!phone) {
      isValid = false;
      errors.phone = "Phone is required";
    }

    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!isEmailValid(email)) {
      isValid = false;
      errors.email = "Invalid email address";
    }

    if (!password) {
      isValid = false;
      errors.password = "Password is required";
    }

    if (!passwordConfirm) {
      isValid = false;
      errors.passwordConfirm = "Password Confirmation is required";
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password)) {
      isValid = false;
      errors.password = "Password must have at least 8 characters, 1 uppercase letter, and 1 number";
    }

    if (password !== passwordConfirm) {
      isValid = false;
      errors.passwordConfirm = "Passwords do not match";
    }

    const currentDate = new Date();
    const minAge = 18;
    const dobDate = new Date(dob);
    const age = currentDate.getFullYear() - dobDate.getFullYear();
    if (dobDate.getFullYear() > currentDate.getFullYear() - minAge ||
      (dobDate.getFullYear() === currentDate.getFullYear() - minAge && dobDate.getMonth() > currentDate.getMonth()) ||
      (dobDate.getFullYear() === currentDate.getFullYear() - minAge && dobDate.getDate() > currentDate.getDate())) {
        isValid = false;
        errors.dob = "You must be at least 18 years old to sign up";
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
          }
          
          axios.post("http://localhost:8000/customers", {
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: email,
            dob: dob,
            phone: phone,
            password: password,
            passwordConfirm: passwordConfirm
          }).then(() => {
            setIsRegistrationSuccessful(true);
            setFirstName('');
            setLastName('');
            setAddress('');
            setDOB('');
            setPhone('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
            setErrors({});
            toast.success('Registration Successful')
          }).catch(error => {
            console.log(error);
            setIsRegistrationSuccessful(false);
          });
        }

        return (
        <div className="register">
            <h1>Register</h1>
            {isRegistrationSuccessful && <p>Registration successful!</p>}
            <label>First Name: </label>
        <input type="text" onChange={(event) => {
        setFirstName(event.target.value);
        }} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <label>Last Name: </label>
        <input type="text" onChange={(event) => {
        setLastName(event.target.value);
        }} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <label>Address: </label>
        <input type="text" onChange={(event) => {
        setAddress(event.target.value);
        }} />
        {errors.address && <p className="error">{errors.address}</p>}
        <label>Date of Birth: </label>
        <input
        type="date"
        max={maxDate()}
        onChange={(event) => {
        setDOB(event.target.value);
        }}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}
        <label>Phone: </label>
        <input type="text" onChange={(event) => {
        setPhone(event.target.value);
        }} />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <label>Email: </label>
        <input type="text" onChange={(event) => {
        setEmail(event.target.value);
        }} />
        {errors.email && <p className="error">{errors.email}</p>}
        <label>Password: </label>
        <input
        type={showPassword ? "text" : "password"}
        onChange={(event) => {
        setPassword(event.target.value);
        }}
        />
        <button
        type="button"
        onClick={() => togglePasswordVisibility('password')}
        >
        {showPassword ? 'Hide' : 'Show'} Password
        </button>
        {errors.password && <p className="error">{errors.password}</p>}
        <label>Confirm Password: </label>
  <input
    type={showConfirmPassword ? "text" : "password"}
    onChange={(event) => {
      setPasswordConfirm(event.target.value);
    }}
  />
  <button
    type="button"
    onClick={() => togglePasswordVisibility('confirmPassword')}
  >
    {showConfirmPassword ? 'Hide' : 'Show'} Password
        </button>
  {errors.passwordConfirm && (
    <p className="error">{errors.passwordConfirm}</p>
  )}

  <button onClick={register}>Register</button>
  <ToastContainer/>
</div>
);
};

export default RegisterPage;
