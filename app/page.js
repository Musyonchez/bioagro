import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css';
import Link from 'next/link';

const Page = () => {
  const backgroundStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backgroundImage: "url('/images/landingbg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="h-screen overflow-x-hidden" style={backgroundStyles}>
      <Navbar />
      <div></div>
      <div className="items-center justify-center my-50 flex flex-col">
        <div className="h-1 w-44 bg-yellow-500 items-center justify-center mt-44 flex"></div>
        <div className="w-1/2 mx-auto backdrop-blur-md space-y-10 text-center">
          <h1 className="font-extrabold text-3xl">Organic food from the ground to your table</h1>
          <p style={{ width: "40vw" }} className="font-bold text-2xl mx-auto">
            Welcome to BioAgro, where we bring you the freshest and healthiest organic food straight from the farm to your table. Our commitment to quality and sustainability ensures that you enjoy the best nature has to offer.

            Explore our wide range of products, from farm-fresh vegetables to dairy products and seedlings. We take pride in delivering the highest quality, ethically grown produce to your doorstep.

            Join us in promoting a healthier lifestyle and supporting local farmers. Choose BioAgro for your organic food needs today.

            Have questions or want to learn more? Feel free to contact us, and we'll be happy to assist you on your journey to healthier living.
          </p>
          <div className="justify-between items-center mx-auto space-x-5">
            <Link href="/contact">
              <a className="bg-green-500 h-20 w-60 rounded-3xl text-2xl mb-14">
                Learn More <span>&rarr;</span>
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
