import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { USER_NAME, PASSWORD } from '../../utils/constant'
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username !== USER_NAME || password !== PASSWORD) {
            setLoginError(true);
        }
        else {
            navigate('/dashboard')
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                { loginError && (
                    <div className="error">Invalid username or password</div>
                )}
            </form>
        </div>
    );
};

export default Login;