import "./Header.css";
import React from 'react'
import { useNavigate } from "react-router-dom";





const Header = () => {
    const navigate = useNavigate();

  return (
    <div className='header' >
        <div className="header-contents">
            <h2>Order your most favourite food here!!</h2>
            <p>choose from a diverse menu featuring delectable array of dishes crafte with the finest ingredients an culinary</p>
            <button
            onClick={  () => navigate('/viewMenu')}
            >
              
            
            view menu </button>
        </div>

    </div>
  )
}

export default Header;