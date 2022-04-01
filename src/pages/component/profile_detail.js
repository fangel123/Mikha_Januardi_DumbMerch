import React from 'react'
import './form.css';
import profile from './images/profile.jpg'
import logo from './images/Logo_Dumbmerch.png'
import mouse from './images/mouse.png'

export default function profile_detail() {
  return (
    <div>
      <div className='my d-flex'>
        <div className='my-left'>
          <h1>My Profile</h1>
        </div>
        <div className='my-right'>
          <h1>My Transaction</h1>
        </div>
      </div>
      <div className='container-profile d-flex'>
        <div className='profile'>
          <div className='profile-picture'>
            <img src={profile} alt="" />
          </div>
          <div className="profile-detail">
            <h6>Name</h6>
            <p>Mikha</p>
            <h6>Email</h6>
            <p>mikhajuntaq@gmail.com</p>
            <h6>Phone</h6>
            <p>089618657200</p>
            <h6>Gender</h6>
            <p>Male</p>
            <h6>Address</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi earum dolorum tenetur alias, tempora officia?</p>
          </div>
        </div>
        <div className="transaction">
          <div className='transaction-content d-flex'>
            <div className='transaction-image'>
              <img src={mouse} alt="" />
            </div>
            <div className='transaction-detail'>
              <div className='details'>
                <h4>Mouse</h4>
                <h5>Saturday, 14 Juli 2021</h5>
                <p>Price : Rp.500.000</p>
                <h6>Sub Total : 500.000</h6>
              </div>
            </div>
            <div className='transaction-logo'>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
