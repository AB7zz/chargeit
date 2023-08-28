import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './style.css'
import {Link} from 'react-router-dom'

const VerifyPass = () => {
  return (
    <div className='px-7 py-20 bg-[#04103A] h-screen'>
        <div className='flex'>
            <Link to='/login'><ArrowBackIosNewIcon className='text-white'/></Link>
            <h3 className='m-auto verifyHeader text-white text-center'>Verify Password</h3>
        </div>
        <p className='text-[#999] mt-16'>Enter the verification code we just sent you on your email address.</p>
        <div className='flex justify-around'>
            <input className='mt-10 w-[65px]' type="text" />
            <input className='mt-10 w-[65px]' type="text" />
            <input className='mt-10 w-[65px]' type="text" />
            <input className='mt-10 w-[65px]' type="text" />
        </div>
        <div className='flex'>
          <Link to='/login' className='mt-80 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Verify</Link>
        </div>
    </div>
  )
}

export default VerifyPass