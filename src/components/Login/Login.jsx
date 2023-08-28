import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-[#04103A] h-screen'>
      <div className='px-7 py-20'>
        <div>
          <h3 className='loginHeader text-white'>Welcome back.</h3>
          <h3 className='loginHeader text-white'>You've been missed</h3>
        </div>
        
        <div className='mt-20'>
          <input type="text" placeholder='Email or Phone' />
          <input type="password" placeholder='Password' />
          <div className='flex'>
            <Link to='/forgotpass' className='text-[#03A46D] ml-auto'>Forgot password?</Link>
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>

        <div className='flex'>
          <p className='text-center text-sm text-[#9BA0B1] m-auto'>Don't have an account? <Link to='/register' className='text-white'>Register</Link></p>
        </div>
        <div className='flex'>
          <Link to='/selectev' className='mt-5 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Login</Link>
        </div>
        <div className='flex'>
          <p className='m-auto mt-5 text-[#697089]'>Skip Now</p>
        </div>
      </div>
    </div>
  )
}

export default Login