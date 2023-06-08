import React from 'react';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';
import { ToastContainer, Toast } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DriverRegistration = () => {

    const [driverfname, setDriverfname] = useState('');
    const [driverlname, setDriverlname] = useState('');
    const [driveremail, setDriveremail] = useState('');
    const [driverpassword, setDriverpassword] = useState('');
    const [driverpasswordconfirm, setDriverpasswordconfirm] = useState('');
    const [driverphone, setDriverphone] = useState('');
    const [driveraddressline, setDriveraddressline] = useState('');
    const [driverpostcode, setDriverpostcode] = useState('');
    const [drivercity, setDrivercity] = useState('');
    const [drivercounty, setDrivercounty] = useState('');
    const [driverlicense, setDriverlicense] = useState('');
    const [driverlicenseexpiry, setDriverlicenseexpiry] = useState('');
    const [driverdob, setDriverdob] = useState('');
    const [drivervehicle, setDrivervehicle] = useState('');
    const [drivervehiclemodel, setDrivervehiclemodel] = useState('');
    const [drivervehiclereg, setDrivervehiclereg] = useState('');
    const [drivervehiclecolour, setDrivervehiclecolour] = useState('');
    const [drivervehiclemake, setDrivervehiclemake] = useState('');
    const [drivervehicleyear, setDrivervehicleyear] = useState('');
    const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    }

    const register = () => {
        

