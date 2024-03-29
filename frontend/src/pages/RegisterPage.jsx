import React, { useState } from 'react';
import axios from "axios";
import './RegisterPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';

const RegisterPage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [houseroadname, setHouseroadname] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
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

    if (!username) {
      isValid = false;
      errors.username = "username is required";
    }

    if (!firstName) {
      isValid = false;
      errors.firstName = "First Name is required";
    }

    if (!lastName) {
      isValid = false;
      errors.lastName = "Last Name is required";
    }

    if (!houseroadname) {
      isValid = false;
      errors.houseroadname = "Address is required";
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
            username: username,
            firstName: firstName,
            lastName: lastName,
            username: username,
            houseroadname: houseroadname,
            postcode: postcode,
            city: city,
            country: country,
            email: email,
            dob: dob,
            phone: phone,
            password: password,
            passwordConfirm: passwordConfirm
          }).then(() => {
            setIsRegistrationSuccessful(true);
            setFirstName('');
            setLastName('');
            setHouseroadname('');
            setPostcode('');
            setCity('');
            setCountry('');
            setDOB('');
            setPhone('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
            setErrors({});
            toast.success('Registration Successful');
          }).then(() => {
            axios.post("http://localhost:8000/login", {
              username: username,
              password: password
            }).then(() => {
              console.log('Username and password posted to /logins');
            }).catch(error => {
              console.log('Error posting username and password to /logins:', error);
            });
          }).catch(error => {
            console.log(error);
            setIsRegistrationSuccessful(false);
          });
        };
        
      
        return (
          <div className="register-container">
          <NormNavbar />
          <div className="main-content">
          <div className="register-left">
          <h1>Register</h1>
          {isRegistrationSuccessful && <p>Registration successful!</p>}
          <div className='FirstName'>
          <label>First Name: </label>
          <input type="text" onChange={(event) => {
          setFirstName(event.target.value);
          }} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className='LastName'>
          <label>Last Name: </label>
          <input type="text" onChange={(event) => {
          setLastName(event.target.value);
          }} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className='Username'>
          <label>Username: </label>
          <input type="text" onChange={(event) => {
          setUsername(event.target.value);
          }} />
          {errors.lastName && <p className="error">{errors.username}</p>}
          </div>
          <div className='House Address'>
          <label>Address Line:</label>
          <input type="text" onChange={(event) => {
          setHouseroadname(event.target.value);
          }} />
          {errors.houseroadname && <p className="error">{errors.houseroadname}</p>}
          </div>
          <div className='Postcode'>
          <label>Postcode: </label>
          <input type="text" onChange={(event) => {
          setPostcode(event.target.value);
          }} />
          {errors.postcode && <p className="error">{errors.postcode}</p>}
          </div>
          <div className='City'>
          <label>City: </label>
          <input type="text" onChange={(event) => {
          setCity(event.target.value);
          }} />
          {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className='Country'>
          <label>Country: </label>
          <input type="text" onChange={(event) => {
          setCountry(event.target.value);
          }} />
          {errors.country && <p className="error">{errors.country}</p>}
          </div>
          <div className='DOB'>
          <label>Date of Birth: </label>
          <input type="date"max={maxDate()}onChange={(event) => {setDOB(event.target.value);
          }}/>{
          errors.dob && <p className="error">{errors.dob}</p>}
          </div>
          <div className='Phone'>
          <label>Phone: </label>
          <input type="text" onChange={(event) => {
          setPhone(event.target.value);
          }} />
          {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className='Email'>
          <label>Email: </label>
          <input type="text" onChange={(event) => {
          setEmail(event.target.value);
          }} />
          {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='Password'>
          <label>Password: </label>
          <input
          type={showPassword ? "text" : "password"}
          onChange={(event) => {
          setPassword(event.target.value);
          }}
          />
          <button type="button" className="btn btn-primary" onClick={() => togglePasswordVisibility('password')}> {showPassword ? 'Hide' : 'Show'}</button>
          {errors.password && <p className="error">{errors.password}</p>}
          </div> 
          <div className='ConfirmPassword'>
          <label>Confirm Password: </label>
          <input type={showConfirmPassword ? "text" : "password"} onChange={(event) => {setPasswordConfirm(event.target.value);
          }}
            />
            <button type="button" className="btn btn-primary" onClick={() => togglePasswordVisibility('confirmPassword')}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}</button>
            {errors.passwordConfirm && (
              <p className="error">{errors.passwordConfirm}</p>
            )}
          </div>
            <button className="btn btn-primary" onClick={register}>Register</button>
        <ToastContainer/>
      <Footer/>
    </div>
  </div>
</div>
);
};

export default RegisterPage;
