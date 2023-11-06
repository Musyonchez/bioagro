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
        <div style={{ position: 'relative' }}>
          <FaBars style={menuIconStyles} onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className=' p-10 z-30'
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%', // Center the dropdown
                transform: 'translateX(-50%)', // Center the dropdown
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                flexDirection: 'column',
                display: 'flex',
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
