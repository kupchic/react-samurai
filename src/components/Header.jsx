import React from 'react';
import logo from './../logo.svg';

const Header = () => {
  return (
    <header className="app-header">
      <img width='50px' src={logo} alt=''></img>
      <h1>MyChat</h1>
    </header>
  );
};

export default Header;