// Navbar.jsx
import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import NavItem from '../ui/NavItem';

const Navbar = () => {
  return (
    <div className='relative flex'>
    <nav className="bg-sky-500 text-white p-2 px-4 fixed top-2 left-2 right-2 rounded-lg z-20">
      <div className="flex items-center justify-between text-white">
      <div className='flex items-center gap-1'>
        <img 
          src="/path/to/logo.png" // Replace with actual path
          alt="Logo" 
          className="w-8 h-8 rounded-full mr-2 bg-white"
        />
        <p className='font-semibold text-lg text-white'>AdmissionHub</p>
      </div>
        <div className='flex items-center gap-8'>
        <NavItem link="/"  label="Home" />
        <NavItem link="/explore"  label="Explore" />
        <NavItem link="/dashboard/applications"  label="Dashboard" />
        <NavItem link="/login"  label="Login" />
        <ProfileDropdown />
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;