// src/components/NavItem.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ link, label }) => {
  return (
    <NavLink to={link} className="navbar">
     <p className='font-semibold text-white'>{label}</p>
    </NavLink>
  );
};

export default NavItem;