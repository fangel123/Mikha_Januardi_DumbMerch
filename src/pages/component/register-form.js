/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './form.css';
import { useNavigate } from 'react-router-dom';

export default function register() {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };
  return (
    <form action="">
      <div className='form-right'>
      <h1>Register</h1>
        <div className='form d-flex'>
          <label htmlFor="name"></label>
          <input
            type="text"
            id='name'
            placeholder='Name'
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id='email'
            placeholder='Email'
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id='password'
            placeholder='Password'
          />
          <button onClick={handleNavigateToLogin} action="" className='btn btn-danger'>Register</button>
        </div>
      </div>
    </form>
  );
};
