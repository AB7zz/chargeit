import profile from '../../assets/profile.png'
import logo2 from '../../assets/logo2.png'
import './style.css'
import {Link} from 'react-router-dom'
import BottomNav from '../BottomNav/BottomNav';
import SimpleSlider from './SimpleSlider';

function Home(){
  return (
    <div className='bg-[#04103A] h-screen py-20 px-5'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={profile} alt="profile" />
          <div className='ml-3'>

          <p className='text-white oxygen'><span className='font-bold'>Hello</span> Michel👋</p>
          <p className='text-white oxygen'>It's time to <span className='text-[#03A46D]'>Charge IT</span></p>
          </div>
        </div>
        <img src={logo2} alt="" />
      </div>
      <div className='mt-10'>
        <input className='!rounded-[60px] !px-[40px]' type="text" placeholder='Search Charging Stations' />
        <h1 className='oxygen text-white text-lg'><span className='font-bold'>Nearby</span> Stations</h1>
        <SimpleSlider />
        <div className='flex mt-7'>
          <Link to='/register' className='mt-5 text-white text-center bg-[#03A46D] px-10 rounded-[16px] py-4 m-auto'>Book Slots</Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
export default Home