import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const Navbar = ({setShowlogin}) => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      
      <ul className='navbar-menu'>
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} to="/">home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>

        {
          user ? <UserButton afterSignOutUrl='/' /> :
            <button onClick={() => setShowlogin(true)} style={{ borderRadius: "90%", padding: "10px" }}>sign in</button>
            
        }
      </div>
    </div>
  );
};

export default Navbar;
