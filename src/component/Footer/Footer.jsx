import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' id='footer' >
    <div className='footer-content' >
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>A food app is a digital platform that allows users to browse restaurants, order food, and get it delivered to their doorstep with ease. It can also help users discover new eateries based on location, cuisine, or ratings. Many food apps offer table reservations, grocery delivery, or meal kits for home cooking.  </p>
        
        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>delivery</li>
                <li>privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right' >
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-233-2323-322</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer