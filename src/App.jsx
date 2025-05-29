import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Footer from './component/Footer/Footer';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/PlaceOrder/Placeorder';
import LoginPopup from './component/Login/LoginPopup';

const App = () => {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <>
      {showlogin && <LoginPopup setShowlogin={setShowlogin} />}
      <div className='App'>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
