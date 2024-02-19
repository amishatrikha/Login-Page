import React from 'react';
import './LoginForm.css';
import FaqImage from './images/faq.jpg'; // Import your first image
import CustomerServiceImage from './images/customerservice.jpg'; // Import your second image
const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>My Benefits Advice</h1>
            <div className="input-box">
                <label htmlFor="username">Username/Email</label>
                <input id="username" type="email" required/>
            </div>
            <div className="input-box">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required/>
            </div>
            <div className="forgot">
                <a href="#">Forget Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="button-divider"></div>
            <div className="additional-info">
                <p>We do not share your information. Your information</p>
                <p>is only used to facilitate your benefits offered</p>
                <p>through your employer</p>
            </div>
            <div className="logos-container">
                <img src={FaqImage} alt="FAQ" className="logo" />
                <img src={CustomerServiceImage} alt="Customer Service" className="logo" />
            </div>
        </form>
    </div>
  )
}

export default LoginForm