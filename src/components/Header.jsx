// import React from 'react';
import '../styles/Header.css';
import AppBar from './header/AppBar'

function Header () {
  return (
    // <div className="image">
      <>
        <header className="header">
          <h1 className="title">Tenable Dashboard App v1.0</h1>
          <div className="buttons">
            <button className="login-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </header>
        <AppBar/>
      </>

    // </div>
  );
}

export default Header;
