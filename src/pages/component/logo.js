import React from 'react'
import logo_dumbmerch from './images/Logo_Dumbmerch.png'
import { Link } from 'react-router-dom'


export default function logo() {
  return (
  <div className='form-left'>
    <img src={logo_dumbmerch} alt="" />
    <h1>
      Easy, Fast and Reliable
    </h1>
    <p>
      Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span>Indonesia</span>
    </p>
    <button className='btn btn-danger'><Link to='/login'>Login</Link></button>
    <button className='btn btn-black'><Link to='/register'>Register</Link></button>
  </div>
  )
}
