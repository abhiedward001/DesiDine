import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import loginImage from '../../assets/login.png';
import Footer from '../LandingPage/Footer';
import {login} from '../../utils/authSlice';

function Login() {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [blurData, setBlurData] = useState({
		email: false,
		password: false,
	});

	const [showPassword, setShowPassword] = useState(false);

	const formSubmitHandler = event => {
		event.preventDefault();
		console.log(formData);
	};

	const authHandler = () => {
		dispatch(login());
	};

	const inputChangeHandler = (identifier, event) => {
		setFormData(previousData => ({
			...previousData,
			[identifier]: event.target.value,
		}));
		setBlurData(previousData => ({
			...previousData,
			[identifier]: false,
		}));
	};

	const inputBlurHandler = identifier => {
		setBlurData(previousData => ({
			...previousData,
			[identifier]: true,
		}));
	};

	const togglePasswordVisibility = () => {
		setShowPassword(previousState => !previousState);
	};

	const emailValid = blurData.email && !formData.email.includes('@');
	const isPasswordValid = () => {
		const password = formData.password;
		return (
			password.length >= 8
            && /[A-Z]/.test(password)
            && /[a-z]/.test(password)
            && /\d/.test(password)
            && /[$&+,:;=?@#|'<>.^*()%!-]/.test(password)
		);
	};

	const buttonDisabled = formData.email.length === 0 || formData.password.length === 0 || emailValid || !isPasswordValid();

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
							onChange={event => inputChangeHandler('email', event)}
							value={formData.email}
							onBlur={() => inputBlurHandler('email')}
						/>
						{emailValid && <p className='text-blue-500'>Please enter a correct email address</p>}
					</div>
					<div className='password m-3 pt-4'>
						<label htmlFor='password'>Password</label><br />
						<div className='relative'>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								placeholder='Enter your password'
								className='bg-gray-200 p-2 mt-1 rounded-lg w-[400px]'
								onChange={event => inputChangeHandler('password', event)}
								value={formData.password}
								onBlur={() => inputBlurHandler('password')}
							/>
							<span className='absolute right-3 top-2 cursor-pointer' onClick={togglePasswordVisibility}>
								{showPassword ? <i className='far fa-eye'></i> : <i className='far fa-eye-slash'></i>}
							</span>
						</div>
						{blurData.password && !isPasswordValid() && (
							<p className='text-red-500'>Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.</p>
						)}
					</div>

					<div className='submit mx-[25px] mt-5'>
						{buttonDisabled ? (
							<button
								type='submit'
								className='bg-gray-700 text-white p-2 rounded-lg w-24'
								disabled
							>
								Submit
							</button>
						) : (
							<button
								type='submit'
								className='bg-blue-700 text-white p-2 rounded-lg w-24'
								onClick={authHandler}
							>
								<Link to='/'>Submit</Link>
							</button>
						)}
					</div>
				</div>
			</form>
			<Footer />
		</>
	);
}

export default Login;
