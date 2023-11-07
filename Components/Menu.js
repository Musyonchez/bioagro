"use client"

import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const Menu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
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
    <div className="flex md:hidden ">
                {/* Hamburger Menu Icon */}
                <div style={{ position: 'relative' }}>
          <FaBars style={menuIconStyles} onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className=' z-50'
              style={{
                      position: 'absolute',
                      paddingRight: '100px',
                      paddingLeft: '20px',
                      marginTop: '30px',
                      marginRight: '30px',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(204, 204, 204)',
                      flexDirection: 'column',
                      display: 'flex',
                    }}
              >
              <Link href="/this" style={linkStyles}>
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
  )
}

export default Menu