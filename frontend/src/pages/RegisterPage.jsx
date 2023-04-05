import React, { useEffect, useState } from 'react';
import axios from "axios";

const RegisterPage = () => {

    const [getFirstName, setFirstName] = useState();
    const [getLastName, setLastName] = useState();
    const [getAddress, setAddress] = useState();
    const [getDOB, setDOB] = useState();
    const [getPhone, setPhone] = useState();
    const [getEmail, setEmail] = useState();
    const [getPassword, setPassword] = useState();
    const [getPasswordConfirm, setPasswordConfirm] = useState();


    const register = () => {
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

    return (
        <div className="register">
            <h1>Register</h1>
            <label>First Name</label>
            <input type="text" onChange={(event) => {
                setFirstName(event.target.value);
            }
            } />
            <label>Last Name</label>
            <input type="text" onChange={(event) => {
                setLastName(event.target.value);
            }
            } />
            <label>Address</label>
            <input type="text" onChange={(event) => {
                setAddress(event.target.value);
            }
            } />
            <label>Date of Birth</label>
            <input type="date" onChange={(event) => {
                setDOB(event.target.value);
            }
            } />
            <label>Phone</label>
            <input type="text" onChange={(event) => {
                setPhone(event.target.value);
            }
            } />
            <label>Email</label>
            <input type="text" onChange={(event) => {
                setEmail(event.target.value);
            }
            } />
            <label>Password</label>
            <input type="text" onChange={(event) => {
                setPassword(event.target.value);
            }
            } />
            <label>Confirm Password</label>
            <input type="text" onChange={(event) => {
                setPasswordConfirm(event.target.value);
            }
            } />
            <button onClick={register}>Register</button>
        </div>
    )



}

export default RegisterPage;

