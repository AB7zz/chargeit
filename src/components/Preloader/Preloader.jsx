import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'
import { Link } from 'react-router-dom'

const Preloader = () => {
  return (
    <div className='flex bg-[#04103A] h-screen'>
      <div className='m-auto'>
        <div className='flex'>
          <img className='m-auto' src={logo} alt="logo" />
        </div>
        <div className='flex flex-col mt-[-50px]'>
          <h3 className='text-white text-center'>Charge It</h3>
          <p className='text-white text-center'>Get charged with charge it</p>
          <div className='flex'>
            <Link to='/login' className='mt-10 text-white text-center bg-[#03A46D] px-10 rounded-[16px] py-2 m-auto'>Get started</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader