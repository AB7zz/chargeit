import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from 'react-router-dom'
import car1 from '../../assets/car1big.png'
import './style.css'

const VehicleDetails = () => {
  return (
    <div className='px-7 py-20 bg-[#04103A] h-screen py-20'>
        <div className='flex'>
            <Link to='/selectev'><ArrowBackIosNewIcon className='text-white'/></Link>
        </div>
        <div className='mt-5'>
            <img src={car1} alt="car1" className='m-auto' />
            <h3 className='carTitle text-center text-white text-md'>Tata Nexo EV</h3>
        </div>
        <div className='bg-[#13244A] w-[100%] h-[50%] mt-5 rounded-[22px] px-5 py-5'>
            <div className='grid grid-cols-3 pl-5'>
                <div className='flex'>
                    <div>
                        <p className='text-white text-center'>30.2 kWh</p>
                        <p className='text-center text-[#999] text-[13px]'>Battery</p>
                    </div>
                    <div class="vl ml-5"></div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='text-white text-center'>30.2 kWh</p>
                        <p className='text-center text-[#999] text-[13px]'>Battery</p>
                    </div>
                    <div class="vl ml-5"></div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='text-white text-center'>30.2 kWh</p>
                        <p className='text-center text-[#999] text-[13px]'>Battery</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col '>
                <hr style={{height: '1.5px', color: '#293A74', backgroundColor: '#293A74'}} className='  mt-3'></hr>

                <div className='mt-4 flex justify-between'>
                    <p className='text-[#999] text-[13px]'>Range</p>
                    <p className='text-white text-[14px]'>312km/full charge</p>
                </div>
                <hr style={{height: '1.5px', color: '#293A74', backgroundColor: '#293A74'}} className='  mt-3'></hr>

                <div className='mt-4 flex justify-between'>
                    <p className='text-[#999] text-[13px]'>Connector type</p>
                    <p className='text-white text-[14px]'>Type 2 plus CCS</p>
                </div>
                <hr style={{height: '1.5px', color: '#293A74', backgroundColor: '#293A74'}} className='  mt-3'></hr>

                <div className='mt-4 flex justify-between'>
                    <p className='text-[#999] text-[13px]'>15 A plug point charging time</p>
                    <p className='text-white text-[14px]'>8.5 hours</p>
                </div>
                <hr style={{height: '1.5px', color: '#293A74', backgroundColor: '#293A74'}} className='  mt-3'></hr>

                <div className='mt-4 flex justify-between'>
                    <p className='text-[#999] text-[13px]'>Fast charging time</p>

                    <p className='text-white text-[14px]'>60 mins</p>
                </div>
                <hr style={{height: '1.5px', color: '#293A74', backgroundColor: '#293A74'}} className='  mt-3'></hr>

            </div>
        </div>
        <div className='flex'>
            <Link to='/home' className='mt-10 text-white text-center bg-[#03A46D] px-20 rounded-[16px] py-4 m-auto'>Confirm</Link>
        </div>
    </div>
  )
}

export default VehicleDetails