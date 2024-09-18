import { useNavigate } from 'react-router-dom';

// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//     return (
//         <>
//             <section className="wrapper">
//                 <form action="#">
//                     <h2>Sign Up</h2>
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Enter your full name</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="email" required />
//                         <label>Enter your email</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Enter your phone number</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Enter your tailoring shop name</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="password" required />
//                         <label>Create a password</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="password" required />
//                         <label>Confirm your password</label>
//                     </div>
//                     <button type="submit">Sign Up</button>
//                     <div className="login">
//                         <p>Already have an account? <a href="#">Log In</a></p>
//                     </div>
//                 </form>
//             </section>
//         </>
//     );
// }

// export default Signup;





// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//     return (
//         <>
//             <section className="signup-wrapper">
//                 <form action="#">
//                     <h2>Sign Up</h2>
//                     <div className="form-row">
//                         <div className="input-field">
//                             <input type="text" required />
//                             <label>Full Name</label>
//                         </div>
//                         <div className="input-field">
//                             <input type="email" required />
//                             <label>Email Address</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-field">
//                             <input type="tel" required />
//                             <label>Phone Number</label>
//                         </div>
//                         <div className="input-field">
//                             <input type="text" required />
//                             <label>Experience Level</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-field">
//                             <input type="text" required />
//                             <label>Specialization</label>
//                         </div>
//                         <div className="input-field">
//                             <input type="text" required />
//                             <label>Username</label>
//                         </div>
//                     </div>
//                     <div className="form-row">
//                         <div className="input-field">
//                             <input type="password" required />
//                             <label>Password</label>
//                         </div>
//                         <div className="input-field">
//                             <input type="password" required />
//                             <label>Confirm Password</label>
//                         </div>
//                     </div>
//                     <button type="submit">Sign Up</button>
//                 </form>
//             </section>
//         </>
//     );
// }

// export default Signup;













// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//     return (
//         <section className="signup-wrapper">
//             <form action="#">
//                 <h2>Sign Up</h2>
//                 <div className="form-row">
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Full Name</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="email" required />
//                         <label>Email Address</label>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Phone Number</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Experience Level</label>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Specialization</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="text" required />
//                         <label>Username</label>
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="input-field">
//                         <input type="password" required />
//                         <label>Password</label>
//                     </div>
//                     <div className="input-field">
//                         <input type="password" required />
//                         <label>Confirm Password</label>
//                     </div>
//                 </div>
//                 <button type="submit">Sign Up</button>
//                 <div className="login-prompt">
//                     <p>Already have an account? <button className="login-button">Login</button></p>
//                 </div>
//             </form>
//         </section>
//     );
// }

// export default Signup;






















import React from 'react';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className='signup-container d-flex justify-content-center'>
            <section className="signup-wrapper">
                <form action="#">
                    <h2 className='signup-header2'>Sign Up</h2>
                    <div className="form-row">
                        <div className="input-field">
                            <input type="text" required />
                            <label>Full Name</label>
                        </div>
                        <div className="input-field">
                            <input type="email" required />
                            <label>Email Address</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-field">
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                        <div className="input-field">
                            <input type="text" required />
                            <label>Experience Level</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-field">
                            <input type="text" required />
                            <label>Specialization</label>
                        </div>
                        <div className="input-field">
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-field">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required />
                            <label>Confirm Password</label>
                        </div>
                    </div>
                    <button type="submit" className='signup-button'>Sign Up</button>
                    <div className="login-prompt">
                        <p>Already have an account? <a href="#" className="login-link" onClick={() => navigate('/login')}>Login</a></p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Signup;
