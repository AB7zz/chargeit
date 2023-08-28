import React from 'react'
import './style.css'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'
import car5 from '../../assets/car5.png'
// import car6 from '../../assets/car6.png'
import car7 from '../../assets/car7.png'
import car8 from '../../assets/car8.png'
import car9 from '../../assets/car9.png'
import { Link } from 'react-router-dom'

const SelectEV = () => {
  return (
    <div className='bg-[#04103A] h-screen py-20'>
        <h3 className='text-white selectHeader text-center'>Select your EV Model</h3>
        <p className='text-center text-[#999] mt-5'>Then we will be able to suggest charger for you</p>
        <div className='flex'>
            <input className='m-auto !rounded-[50px] !h-[40px] mt-16 !w-[90%]' type="text" placeholder='Search' />
        </div>
        <div className='grid grid-cols-3 mt-5 ml-5'>
            <div className='bg-[#fff] border-2 border-[#03A46D] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car1} alt="car1" className='m-auto' />
                <p className='text-xs mt-[-20px] mb-2 ml-5'>Nexon EV</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car2} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>MG Zs EV</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car3} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>MC SE</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car4} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>Tigor EV</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car5} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>BYD E6</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car5} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>Kona EV</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car7} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>E Verito</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car8} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>Rev I</p>
            </div>
            <div className='bg-[#13244A] rounded-[50%] w-[100px] flex flex-col mb-10'>
                <img src={car9} alt="car1" className='m-auto' />
                <p className='text-xs text-white mt-[-20px] mb-2 ml-6'>Nexon EV</p>
            </div>
        </div>
        <div className='flex'>
            <Link to='/vehicledetails' className='mt-10 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Next</Link>
        </div>
    </div>
  )
}

export default SelectEV