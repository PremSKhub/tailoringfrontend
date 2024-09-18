// import React from 'react'

// import './NavBar.css'
// import Page1Logo from '../../assets/page1logo.png'

// const NavBar = () => {
//     return (
//         <section>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     {/* Left Side: Logo */}
//                     <a className="navbar-brand" href="#">
//                     <img src={Page1Logo} className="logo" alt="Logo" />
//                     </a>
//                     {/* Center: Heading */}
//                     <h3 className="navbar-heading">Favit</h3>
//                     {/* Right Side: Links */}
//                     <div className="ml-auto">
//                         <a className="nav-link d-inline" href="/">Home</a>
//                         <a className="nav-link d-inline" href="/dashboard">Profile</a>
//                         <a className="nav-link d-inline" href="/profile">Logout</a>
//                     </div>
//                 </div>
//             </nav>

//         </section>
//     )
// }

// export default NavBar



















import React from 'react';
import './NavBar.css';
import Page1Logo from '../../assets/page1logo.png';

const NavBar = ({ authHandler }) => {
    const logoutHandler = () => {
        authHandler(false)
        localStorage.setItem("LoginApproved", "false")
    }
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
                <div className="container-fluid">
                    {/* Left Side: Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={Page1Logo} className="logo animated-logo" alt="Logo" />
                    </a>
                    {/* Center: Heading */}
                    <h3 className="navbar-heading">Favit</h3>
                    {/* Right Side: Links */}
                    <div className="ml-auto">
                        <a className="nav-link d-inline" href="/">Home</a>
                        <a className="nav-link d-inline" href="/dashboard">Profile</a>
                        <a className="nav-link d-inline" onClick={logoutHandler}>Logout</a>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
