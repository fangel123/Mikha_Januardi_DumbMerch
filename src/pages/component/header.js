import React from 'react'
import './form.css';
import logo_dumbmerch from './images/Logo_Dumbmerch.png'
import { Link } from 'react-router-dom'


export default function header() {
  return (
  <nav className="navbar navbar-light">
    <div className="navigation d-flex">
      <Link to='/home'><img src={logo_dumbmerch} alt="" /></Link>
    </div>
    <div className="link">
      <Link className="nav-link active btn-complain" to="/user_complain">Complain</Link>
      <Link className="nav-link active btn-profile" to="/profile">Profile</Link>
      <Link className="nav-link active" to="/category">Category</Link>
      <Link className="nav-link active" to="/product">Product</Link>
      <Link className="nav-link active" to="/login">Logout</Link>
    </div>
  </nav>
  )
}
