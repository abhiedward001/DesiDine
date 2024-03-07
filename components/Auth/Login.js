import React, { useState } from 'react';
import loginImage from '../../assets/login.png';
import Footer from '../LandingPage/Footer';
import { Link } from "react-router-dom";
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [blurData, setBlurData] = useState({
        email: false,
        password: false
    });

    const [showPassword, setShowPassword] = useState(false); // State to track whether password should be shown

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const inputChangeHandler = (identifier, event) => {
        setFormData((prevValue) => ({
            ...prevValue,
            [identifier]: event.target.value
        }));
        setBlurData((prevData) => ({
            ...prevData,
            [identifier]: false
        }));
    };

    const inputBlurHandler = (identifier) => {
        setBlurData((prevData) => ({
            ...prevData,
            [identifier]: true
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState); // Toggle showPassword state
    };

    const emailValid = blurData.email && !formData.email.includes('@');

    const isPasswordValid = () => {
        const password = formData.password;
        // Check if password meets minimum length requirement
        if (password.length < 8) {
            return false;
        }
        // Check if password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        // Check if password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return false;
        }
        // Check if password contains at least one digit
        if (!/\d/.test(password)) {
            return false;
        }
        // Check if password contains at least one special character
        if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            return false;
        }
        return true;
    };

    return (
        <>
            <h1>Welcome back</h1>
            <p>Please enter your registered email and password to access your account.</p>
            <form className='Login mx-auto my-32 w-10/12 shadow-lg rounded-lg flex' onSubmit={formSubmitHandler}>
                <div className='Image'>
                    <img src={loginImage} alt='' className='h-[500px] rounded-lg'></img>
                </div>

                <div className='formContainer w-96'>
                    <div className='username m-3 pt-4'>
                        <label htmlFor='email'>Email</label><br />
                        <input
                            type='text'
                            id='email'
                            placeholder='Enter your email'
                            className='bg-gray-200 p-2 mt-1 rounded-lg w-[400px]'
                            onChange={(event) => inputChangeHandler('email', event)}
                            value={formData.email}
                            onBlur={() => inputBlurHandler('email')}
                        />
                    </div>
                    <div>
                        {emailValid && <p className='text-red-500'>Please enter a correct email address</p>}
                    </div>
                    <div className='password m-3 pt-4'>
                        <label htmlFor='password'>Password</label><br />
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                                id='password'
                                placeholder='Enter your password'
                                className='bg-gray-200 p-2 mt-1 rounded-lg w-[400px]'
                                onChange={(event) => inputChangeHandler('password', event)}
                                value={formData.password}
                                onBlur={() => inputBlurHandler('password')}
                            />
                            <span className='absolute right-3 top-2 cursor-pointer' onClick={togglePasswordVisibility}>
                                {showPassword ? <i className='far fa-eye'></i> : <i className='far fa-eye-slash'></i>}
                            </span>
                        </div>
                        {blurData.password && !isPasswordValid() && <p className='text-red-500'>Password must contain @, A-Z, a-z, 1-9 and length greater than 8</p>}
                    </div>

                    <div className='submit mx-[25px] mt-5'>
                        <button type='submit' className='bg-blue-700 text-white p-2 rounded-lg w-24'><Link to='/'>Submit</Link></button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Login;
