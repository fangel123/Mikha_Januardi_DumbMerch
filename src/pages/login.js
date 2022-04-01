import React from 'react'
import LoginForm from './component/login-form'
import Logo from './component/logo'

export default function login() {
  return (
    <div className='login d-flex'>
      <div className='left'>
        <Logo />
      </div>
      <div className='right'>
        <LoginForm />
      </div>
    </div>
  )
}
