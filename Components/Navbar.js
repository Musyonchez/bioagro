import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css'; 
const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width='250'
            height='100'
            className="logo-image"
          />
        </Link>
        <Link href="/">
          <button className='contact-button'>
            Contact Us
          </button>
        </Link>
      </div>
      <div className='menu-container'>
        <ul className="menu">
          <li>
            <Link href="/aboutus" className="menu-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/V&F" className="menu-link">
              V&F
            </Link>
          </li>
          <li>
            <Link href="/dairy" className="menu-link">
              Dairy
            </Link>
          </li>
          <li>
            <Link href="/seedlings" className="menu-link">
              Seedlings
            </Link>
          </li>
          <li>
            <Link href="/projects" className="menu-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/products" className="menu-link">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="menu-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-bar'></div>
    </div>
  );
};

export default Navbar;
