import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import school_logo from '../assets/person1.jpg'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-200"
      >
        <img
          src={school_logo}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover bg-yellow-200"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-slate-600 border rounded shadow-lg">
          <ul>
            <li>
              {/* Profile link */}
              <NavLink
                to="/student/profile"
                className="flex items-center justify-between px-4 py-2 text-sky-500 text-left hover:bg-gray-200"
                onClick={() => setIsOpen(false)} 
              >
                <span>Profile</span>
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
            <li>
              {/* Logout button */}
              <NavLink
                to="/login"
                className="flex items-center justify-between px-4 py-2 text-red-500 text-left hover:bg-gray-200"
                onClick={() => setIsOpen(false)} 
              >
                <span>Logout</span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;