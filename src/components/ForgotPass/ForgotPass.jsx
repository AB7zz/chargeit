import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './style.css'
import {Link} from 'react-router-dom'


const ForgotPass = () => {
  return (
    <div className='px-7 py-20 bg-[#04103A] h-screen'>
        <div className='flex'>
            <Link to='/login'><ArrowBackIosNewIcon className='text-white'/></Link>
            <h3 className='m-auto forgHeader text-white text-center'>Forgot Password</h3>
        </div>
        <p className='text-[#999] mt-16'>Enter the email associated with your account and we’ll send an email with instructions to reset your password.</p>
        <input className='mt-10' type="text" placeholder='Email' />
        <div className='flex'>
          <Link to='/verifypass' className='mt-80 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Send</Link>
        </div>
    </div>
  )
}

export default ForgotPass