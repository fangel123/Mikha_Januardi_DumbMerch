import React from 'react'
import RegisterForm from './component/register-form'
import Logo from './component/logo'

export default function register() {
  return (
    <div className='login d-flex'>
      <div className='left'>
        <Logo />
      </div>
      <div className='right'>
        <RegisterForm />
      </div>
    </div>
  )
}
