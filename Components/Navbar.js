// Navbar.js
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo component */}
            <Logo />
            {/* Navigation links */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            {/* Button component */}
            <Button />
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
