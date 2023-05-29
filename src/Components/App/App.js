import {useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MainPage from '../MainPage/MainPage';
import Cart from '../Cart/Cart';
import Signin from '../Signup/Signin';
import MyCart from '../../MyCart/MyCart';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  const [show, setShow] = useState(true);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setShowNav(true);
    }
    else{
      setShow(false);
    }
  }, []);
  

  return (
    <>
      
        <Navbar />
      
        <Routes>
          <Route path='/' element={<MainPage show = {show} />} />
          <Route path='/login' element = {<Signin/>} />
          <Route path='/cart' element = {<Cart />}/> 
          <Route path='/mycart' element = {<MyCart />}/> 
        </Routes>
      
      
    </>
  );
};

export default App;
