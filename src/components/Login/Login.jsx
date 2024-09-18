import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({authHandler}) => {
    const navigate = useNavigate()
    const loginHandler = () => {
        localStorage.setItem("LoginApproved", "true")
        authHandler(true)
        navigate("/home")
    }

    const registerHandler = () => {
        navigate("/register")
    }
    return (
        <div className='login-container d-flex justify-content-center'>
            <section className="wrapper">
                <form action="#">
                    <h2 className='login-header2'>Login</h2>
                    <div className="input-field">
                        <input type="text" required />
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required />
                        <label>Enter your password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>Remember me</p>
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button className='login-button' type="submit" onClick={loginHandler}>Log In</button>
                    <div className="register">
                        <p>Don't have an account? <a href="#" onClick={registerHandler}>Register</a></p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;
