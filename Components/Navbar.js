"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Define inline CSS styles
  const navbarStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px',
  };

  const linkStyles = {
    fontSize: '2rem',
    color: '#000', // Use your desired color
  };

  const buttonStyles = {
    height: '4rem',
    width: '13rem',
    fontSize: '2rem',
    backgroundColor: '#33851a', // Use your desired color
    color: '#000', // Use your desired color
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    marginRight: '1rem',
  };

  const closeMenuStyles = {
    color: '#000',
    fontSize: '1.5rem',
  };


  return (
    <div>
      <div style={navbarStyles}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
        </Link>
        <div style={linkStyles} className="space-x-5 lg:flex flex-row font-semibold hidden">
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
        </div>
        <Link href="/contact">
          <button className=' hidden lg:block' style={buttonStyles}>
            Contact Us
          </button>
        </Link>
        <div className="relative hidden max-lg:block z-30">
          {toggleMenu ? (
            <RiCloseLine style={closeMenuStyles} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line style={closeMenuStyles} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div style="right: 0;font-size: 2rem;color: rgb(0, 0, 0);" className="space-y-5 flex flex-col absolute right-0 my-20 p-10 bg-stone-200 shadow-2xl font-semibold z-30">
              <Link href="/">Home</Link>
              <Link href="/aboutus" className="hover:text-green-400">About</Link>
              <Link href="/V&F" className="hover:text-green-400">V&F</Link>
              <Link href="/dairy" className="hover:text-green-400">Dairy</Link>
              <Link href="/seedlings" className="hover:text-green-400">Seedlings</Link>
              <Link href="/projects" className="hover:text-green-400">Projects</Link>
              <Link href="/products" className="hover:text-green-400">Products</Link>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: '3px', width: '83.33%', marginBottom: '1rem', marginLeft: '8.33%', backgroundColor: '#FFC300' }}></div>
    </div>
  );
};

export default Navbar;
