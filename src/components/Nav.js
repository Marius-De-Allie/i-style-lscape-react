import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {

  return (
    <div className="nav-backg">
      <nav>
        <NavLink to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/services" activeClassName="selected">Services</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Nav;