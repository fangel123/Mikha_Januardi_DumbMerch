import React from 'react'
import './form.css';
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <form action="">
      <div className='form-right'>
      <h1>Login</h1>
        <div className='form d-flex'>
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
          <button className='btn btn-danger'><Link to='/home'>Login</Link></button>
        </div>
      </div>
    </form>
  );
};
