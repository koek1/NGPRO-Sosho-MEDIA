import React from 'react';
import { Link } from 'react-router-dom';
import './SignupFormStyle.css'; 

const SignupForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                </div>
                <button type="submit">Sign Up</button>
                
                <div className="back-link">
                    <p>Already have an account? <Link to="/">Back to Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
