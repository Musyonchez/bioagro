"use client"
import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const Page = () => {
  const backgroundStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 50% opacity white background
    backgroundImage: "url('/images/landingbg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Router> {/* Wrap your component with Router */}
      <div className="h-screen overflow-x-hidden" style={backgroundStyles}>
        <Navbar />
        <div></div>
        <div className="items-center justify-center my-50 flex flex-col">
          <div className="h-1 w-44 bg-yellow-500 items-center justify-center mt-44 flex"></div>
          <div className="w-1/2 mx-auto backdrop-blur-md space-y-10 text-center">
            {/* Add mx-auto to center the container */}
            <h1 className="font-extrabold text-3xl">Organic food from the ground to your table</h1>
            <p style={{ width: "40vw" }} className="font-bold text-2xl mx-auto">
              Lorem ipsum dolor sit amet. Sit repellendus fugit ea neque quaerat aut nesciunt nobis vel aperiam voluptatem non blanditiis omnis. Est officiis provident et cupiditate excepturi ut fuga officia. Ad placeat perspiciatis eum molestiae nihil aut autem sapiente ut voluptatibus numquam qui quam delectus.
            </p>
            <div className="justify-between items-center mx-auto space-x-5">
              <Link href = "/contact">
              <button className="bg-green-500 h-20 w-60 rounded-3xl text-2xl mb-14">
                Learn More <span>&rarr;</span>
              </button>
              </Link>
              <Link href = "/contact">
                <button className="bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Page;
