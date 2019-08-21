import React from 'react';
// eslint-disable-next-line
import auth from '../controller/routes/auth'
import header from '../img/header.png'
const Header = ({ logoutprop }) => {
  return (
    <header data-testid="header" className="width-100 d-flex">
        <img src={header} alt="img" className="w-100" />
    </header>
  )
};

export default Header;