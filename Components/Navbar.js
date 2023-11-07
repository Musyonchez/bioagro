import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className='w-screen flex flex-row items-center justify-between px-10 max-sm:px-1'>
      <Link href="/" >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width= '250'
          height= '100'
          className="relative mb-2"
        />
      </Link>
      <Link href="/" >
        <button className=' bg-emerald-800 text-3xl text-white px-10 py-7 w-full rounded-3xl max-sm:hidden'>
          Contact Us
        </button>
      </Link>
      </div>
      <div className=' w-screen bg-white'>
      <ul className="w-full h-full flex flex-wrap gap-x-6 text-center justify-center items-center text-3xl py-5 text-black max-sm:justify-between max-sm:px-3">
            <li>
              <Link href="/aboutus"  className="hover:text-green-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/V&F"  className="hover:text-green-400">
                V&F
              </Link>
            </li>
            <li>
              <Link href="/dairy"  className="hover:text-green-400">
                Dairy
              </Link>
            </li>
            <li>
              <Link href="/seedlings"  className="hover:text-green-400">
                Seedlings
              </Link>
            </li>
            <li>
              <Link href="/projects"  className="hover:text-green-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/products"  className="hover:text-green-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact"  className="hover:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
      </div>
      <div className=' bg-yellow-500 h-2 w-full'></div>
    </div>
  )
}

export default Navbar