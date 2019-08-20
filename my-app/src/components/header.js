import React from 'react';
// eslint-disable-next-line
import auth from '../controller/routes/auth'
import header from '../img/header.png'
const Header = ({ logoutprop }) => {
  return (
    <header data-testid="header" className="width-100  mb-4 d-flex">
      <ul className="width-100 nav nav-tabs justify-content-center">
        <li className="nav-item">
          {/* <button data-testid='burger' onClick={() => { auth.login(() => { logoutprop.history.push("/home") }) }} className="text-center align-self-start mb-4 border-none transparent cursor"> */}
            <img src={header} alt="img" />
          {/* </button> */}
        </li>
        {/* <li className="nav-item dropdown bars">
          <div className="nav-link dropdown-toggle dropdown-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fas fa-bars'></i></div>
          <div className="dropdown-menu dropdown-menu-right" >
            <a data-testid='close' onClick={() => {
              auth.logout(() => { logoutprop.history.push("/") });
              }} >Cerrar Sesión</a>
          </div>
        </li> */}
      </ul>

    </header>
  )
};

export default Header;