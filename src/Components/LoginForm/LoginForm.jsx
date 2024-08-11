import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginFormStyle.css';
import { FaUser, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <FaUser className='User-icon' />
                <div className="input-box">
                    <input 
                        type={passwordVisible ? "text" : "password"} 
                        placeholder='Password' 
                        required 
                    />
                    <span onClick={togglePasswordVisibility} className='eye_icon'>
                        {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                </div>
                <FaLock className='Lock-icon' />

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password ?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
