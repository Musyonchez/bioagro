"use client"





import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);



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
      <div style={menuStyles} className='px-10'>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
        </Link>
        <div className="lg:flex flex-row hidden">
          <Link href="/" style={linkStyles}>
            Home
          </Link>
          <Link href="/aboutus" style={linkStyles} className=" text-green-400">
            About
          </Link>
          <Link href="/vandf" style={linkStyles} className="hover:text-green-400">
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
            Productsgit checkout -b new-branch-name

          </Link>
          <Link href="/contact" style={linkStyles} className="hover:text-green-400">
            Contact
          </Link>
        </div>





        <div className=" ">
          <div
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
            className=' bg-stone-300 justify-end text-end w-1/4 float-right'
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
