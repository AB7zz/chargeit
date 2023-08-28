import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/Login'
import Preloader from './components/Preloader/Preloader'
import Register from './components/Register/Register'
import ForgotPass from './components/ForgotPass/ForgotPass'
import VerifyPass from './components/VerifyPass/VerifyPass'
import SelectEV from './components/SelectEV/SelectEV'
import VehicleDetails from './components/VehicleDetails/VehicleDetails'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Preloader/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpass' element={<ForgotPass/>} />
        <Route path='/verifypass' element={<VerifyPass/>} />
        <Route path='/selectev' element={<SelectEV/>} />
        <Route path='/vehicledetails' element={<VehicleDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
