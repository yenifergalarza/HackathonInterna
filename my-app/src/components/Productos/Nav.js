import React from "react";
import { Link } from "react-router-dom";


const Nav = ({ logo }) => (
  <div className="headerProducts">
    <header>
      <Link to="/">
      {/* <img
        src="https://i.postimg.cc/dVpV87CJ/home.png"
        className="pb-1 pt-4"
      ></img> */}
      <img
        className="center"
        src={logo}
        alt="logo"
      ></img>
      </Link>
    </header>
  </div>
);
export default Nav;
