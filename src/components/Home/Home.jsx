import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Page1Logo from '../../assets/page1logo.png';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className='home-container'>
      <div className="storage">
        <img src={Page1Logo} className="logo animated-logo" alt="Logo" />
        <div className="buttons">
          <button id="existingCustomer" onClick={() => handleClick('/existing-customer')}>
            Existing Customer
          </button>
          <button id="newCustomer" onClick={() => handleClick('/new-customer')}>
            New Customer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
