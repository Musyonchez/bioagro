"use client"





import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <div>
      <div style={menuStyles} className=' justify-evenly px-10'>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </Link>


        <div
            style={{ position: 'relative' }}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/services" style={linkStyles} className="hover:text-green-400">
              Services
            </a>
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
