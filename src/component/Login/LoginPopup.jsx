import React, { useState } from 'react';
import './LoginPopup.css';
import { SignIn, SignUp } from '@clerk/clerk-react';

const LoginPopup = ({ setShowlogin }) => {
  const [mode, setMode] = useState("sign-in");

  const toggleMode = () => {
    setMode(prev => (prev === "sign-in" ? "sign-up" : "sign-in"));
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <button onClick={() => setShowlogin(false)} className="close-button">X</button>

        {mode === "sign-in" ? (
          <SignIn
            appearance={{ elements: { card: 'custom-card' } }}
            routing="virtual"
          />
        ) : (
          <SignUp
            appearance={{ elements: { card: 'custom-card' } }}
            routing="virtual"
          />
        )}

        <p style={{ marginTop: '10px' }}>
          {mode === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode} style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}>
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
