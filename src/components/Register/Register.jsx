import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Register = () => {
  return (
    <div className='bg-[#04103A] h-screen'>
      <div className='px-7 py-20'>
        <div>
          <h3 className='regHeader text-white'>Let's Register to</h3>
          <h3 className='regHeader text-white'>Get Started</h3>
        </div>
        
        <div className='mt-20'>
          <input type="text" placeholder='Email or Phone' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Password Authentication' />
        </div>
      </div>
      <div className='mt-[100px]'>

        <div className='flex'>
          <p className='text-center text-sm text-[#9BA0B1] m-auto'>Have an account? <Link to='/login' className='text-white'>Login</Link></p>
        </div>
        <div className='flex'>
          <Link to='/register' className='mt-5 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Register</Link>
        </div>
        <div className='flex'>
          <p className='m-auto mt-5 text-[#697089]'>Skip Now</p>
        </div>
      </div>
    </div>
  )
}

export default Register