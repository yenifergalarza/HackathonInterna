import React from 'react';
// eslint-disable-next-line
import auth from '../controller/routes/auth'
import header from '../img/header.jpeg'
const Header = ({ logoutprop, cart }) => {
  return (
    <header data-testid="header" className="width-100 d-flex">
        <img src={header} alt="img" className="w-100" />

        <ul className="width-100 nav nav-tabs justify-content-center">
        <li className="nav-item dropdown bars m-2">
        <a data-testid='close' onClick={() => {
              auth.logout(() => { logoutprop.history.push("/") });
              }} ><i class="fas fa-sign-out-alt text-white"></i></a>
        </li>
        <li className="nav-item dropdown bars mt-5 m-2">
          {cart}
        </li>
      </ul>
    </header>
  )
};

export default Header;