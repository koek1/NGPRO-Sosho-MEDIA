import React, { useState } from 'react';
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
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input 
                        type={passwordVisible ? "text" : "password"} 
                        placeholder='Password' 
                        required 
                    />
                    <span onClick={togglePasswordVisibility} className='eye_icon'>
                        {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password ?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
