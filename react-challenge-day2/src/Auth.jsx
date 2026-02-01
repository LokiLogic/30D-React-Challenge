
import React, {useState} from 'react';
import './Auth.css';

function Auth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    
    return (
        <div className={`auth-card ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
            <div className="status-icon">
                {isLoggedIn ? '🔓' : '🔒'}
            </div>
            <h1>
                {isLoggedIn ? 'Welcome Back!' : 'Please Log In'}
            </h1>

            <p>
                {isLoggedIn ? 'You have successfully logged in.' : 'You are currently logged out.'}
            </p>
            
            <button onClick={toggleLogin} className="auth-btn">
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>

    );
}

export default Auth;