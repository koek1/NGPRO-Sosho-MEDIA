import React from 'react';
import './ManageProfile.css';

const ManageProfile = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <div className='Header'>
                    <h1>ManageProfile</h1>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Gender' required/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Bio' required/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required/>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default ManageProfile