"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
     <div className=" flex mx-10 my-10">
      <div className='flex items-center lg:justify-evenly justify-between'>
        <Link href="/">
            <Image src = '/images/logo.png' alt="Logo" width={100} height={50} />
        </Link> 
        <div className="space-x-5 lg:flex flex-row font-semibold hidden">
          <Link href="/" className= "text-2xl text-green-500"> Home</Link>
          <Link href="/aboutus" className= "text-2xl hover:text-green-400"> About</Link>
          <Link href="/V&F" className= "text-2xl hover:text-green-400"> V&F</Link>
          <Link href="/dairy" className= "text-2xl hover:text-green-400"> Dairy</Link>
          <Link href="/seedlings" className= "text-2xl hover:text-green-400"> Seedlings</Link>                    
          <Link href="/projects" className= "text-2xl hover:text-green-400"> Projects</Link>
          <Link href="/contact" className= "text-2xl hover:text-green-400 hidden"> Reviews</Link>
          <Link href="/products" className= "text-2xl hover:text-green-400"> Products</Link>
        </div>

        <Link href = "/contact">
        <button className="h-16 w-52 text-2xl hidden xl:block bg-green-500 text-green-900 py-2 px-4 py-3 rounded-full hover:bg-green-700 hover:text-green-100 mr-4">
          Contact Us
        </button>
        </Link>
        <div className='relative flex lg:hidden'>
          {toggleMenu ?
              <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />
              :
              <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
        <div className="space-y-5 flex flex-col absolute right-0 my-20 px-5 bg-stone-200 shadow-2xl font-semibold z-30">
          <Link href="/" className= "text-2xl text-green-500"> Home</Link>
          <Link href="/aboutus" className= "text-2xl hover:text-green-400"> About</Link>
          <Link href="/V&F" className= "text-2xl hover:text-green-400"> V&F</Link>
          <Link href="/dairy" className= "text-2xl hover:text-green-400"> Dairy</Link>
          <Link href="/seedlings" className= "text-2xl hover:text-green-400"> Seedlings</Link>                    
          <Link href="/projects" className= "text-2xl hover:text-green-400"> Projects</Link>
          <Link href="/contact" className= "text-2xl hover:text-green-400 hidden"> Reviews</Link>
          <Link href="/products" className= "text-2xl hover:text-green-400"> Products</Link>
        </div>
        )}
        </div>
        </div>
        <div className='h-1 w-5/6 mb-1 mx-auto bg-yellow-500 items-center justify-center flex' ></div>

      </div>
    
  )
}

export default Navbar
