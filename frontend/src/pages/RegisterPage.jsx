import React, { useState } from 'react';
import axios from "axios";

const RegisterPage = () => {

    const [getFirstName, setFirstName] = useState('');
    const [getLastName, setLastName] = useState('');
    const [getAddress, setAddress] = useState('');
    const [getDOB, setDOB] = useState('');
    const [getPhone, setPhone] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getPasswordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [getError, setError] = useState({});

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


    const register = () => {
        let isValid = true;
        let errors = {};

        if (!getFirstName) {
            isValid = false;
            errors.firstName = "First Name is required";
        }

        if (!getLastName) {
            isValid = false;
            errors.lastName = "Last Name is required";
        }

        if (!getAddress) {
            isValid = false;
            errors.address = "Address is required";
        }

        if (!getDOB) {
            isValid = false;
            errors.dob = "Date of Birth is required";
        }

        if (!getPhone) {
            isValid = false;
            errors.phone = "Phone is required";
        }

        if (!getEmail) {
            isValid = false;
            errors.email = "Email is required";
        }

        if (!getPassword) {
            isValid = false;
            errors.password = "Password is required";
        }

        if (!getPasswordConfirm) {
            isValid = false;
            errors.passwordConfirm = "Password Confirmation is required";
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!passwordPattern.test(getPassword)) {
            isValid = false;
            errors.password = "Password must have at least 8 characters, 1 uppercase letter, and 1 number";
        }

        if (getPassword !== getPasswordConfirm) {
            isValid = false;
            errors.passwordConfirm = "Passwords do not match";
        }

        const currentDate = new Date();
        const minAge = 18;
        const dob = new Date(getDOB);
        const age = currentDate.getFullYear() - dob.getFullYear();
        const m = currentDate.getMonth() - dob.getMonth();

        if (m < 0 || (m === 0 && currentDate.getDate() < dob.getDate())) {
            age--;
        }

        if (age < minAge) {
            isValid = false;
            errors.dob = "You must be at least 18 years old to sign up";
        }

        if (Object.keys(errors).length > 0) {
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    alert(errors[key]);
                }
            }

            return;

        }

        setError(errors);

        if (isValid) {
            axios.post("http://localhost:8000/customers", {
                firstName: getFirstName,
                lastName: getLastName,
                address: getAddress,
                email: getEmail,
                dob: getDOB,
                phone: getPhone,
                password: getPassword,
                passwordConfirm: getPasswordConfirm
            }).then(() => {
                console.log("success");
            });
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <label>First Name</label>
            <input type="text" onChange={(event) => {
                setFirstName(event.target.value);
            }} />
            {getError.firstName && <p className="error">{getError.firstName}</p>}
            <label>Last Name</label>
            <input type="text" onChange={(event) => {
                setLastName(event.target.value);
            }} />
            {getError.lastName && <p className="error">{getError.lastName}</p>}
            <label>Address</label>
            <input type="text" onChange={(event) => {
                setAddress(event.target.value);
            }} />
            {getError.address && <p className="error">{getError.address}</p>}
            <label>Date of Birth</label>
            <input
                type="date"
                max={maxDate()}
                onChange={(event) => {
                    setDOB(event.target.value);
                }}
            />
            {getError.dob && <p className="error">{getError.dob}</p>}
            <label>Phone</label>
            <input type="text" onChange={(event) => {
                setPhone(event.target.value);
            }} />
            {getError.phone && <p className="error">{getError.phone}</p>}
            <label>Email</label>
            <input type="text" onChange={(event) => {
                setEmail(event.target.value);
            }} />
            {getError.email && <p className="error">{getError.email}</p>}        
            <label>Password</label>
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
            {getError.password && <p className="error">{getError.password}</p>}

            <label>Confirm Password</label>
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
            {getError.passwordConfirm && (
                <p className="error">{getError.passwordConfirm}</p>
            )}

            <button onClick={register}>Register</button>
        </div>
    );
};

export default RegisterPage;