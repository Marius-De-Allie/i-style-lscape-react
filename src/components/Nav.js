import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {

  return (
    <div className="nav-con">
      <div className="logo">LOGO</div>
      <nav>
        <NavLink to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/services" activeClassName="selected">Services</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Nav;