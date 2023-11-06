"use client"


import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const menuStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px',
  };

  const linkStyles = {
    fontSize: '1.5rem',
    color: '#000',
    textDecoration: 'none',
    marginRight: '20px',
  };

  const menuIconStyles = {
    fontSize: '2rem',
    color: '#000',
    cursor: 'pointer',
  };

  return (
    <div>
      <div style={menuStyles} className='justify-between px-10'>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </Link>

        {/* Hamburger Menu Icon */}
        <FaBars style={menuIconStyles} onClick={toggleDropdown} />

        <div
          style={{ position: 'relative' }}
          onMouseLeave={closeDropdown} // Close the dropdown when leaving the icon
        >
          {/* If the dropdown is open, render the links */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                flexDirection: 'column',
              }}
            >
              <Link href="/" style={linkStyles}>
                Home
              </Link>
              <Link href="/aboutus" style={linkStyles} className="hover:text-green-400">
                About
              </Link>
              <Link href="/V&F" style={linkStyles} className="hover:text-green-400">
                V&F
              </Link>
              <Link href="/dairy" style={linkStyles} className="hover:text-green-400">
                Dairy
              </Link>
              <Link href="/seedlings" style={linkStyles} className="hover:text-green-400">
                Seedlings
              </Link>
              <Link href="/projects" style={linkStyles} className="hover:text-green-400">
                Projects
              </Link>
              <Link href="/products" style={linkStyles} className="hover:text-green-400">
                Products
              </Link>
              <Link href="/contact" style={linkStyles} className="hover:text-green-400">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

