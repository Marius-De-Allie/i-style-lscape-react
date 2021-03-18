import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = ({ location, history }) => {

  // Logo click handler.
  const handleLogoClick = () => {
    // check if not already on the homepage.
    if(location.pathname !== '/') {
      // redirect to homepage.
      history.push('/');
    }
  };

  return (
    <div className="nav-con">
      <div 
        className="logo"
        onClick={handleLogoClick}
      >
        LOGO
      </div>
      <nav>
        <NavLink to="/" activeClassName="selected" exact>Home</NavLink>
        <NavLink to="/services" activeClassName="selected">Services</NavLink>
        <NavLink to="/gallery" activeClassName="selected">Gallery</NavLink>
        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
      </nav>
    </div>
  );
};

export default withRouter(Nav);