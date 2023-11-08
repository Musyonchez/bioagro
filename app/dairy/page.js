import Navbar from '@/Components/Navbar';
import '../../app/globals.css';
import React from 'react';
import Link from 'next/link'

import Image from 'next/image';


import {milk1} from "@/public/images/cards/milk"
import {milk2} from "@/public/images/cards/milk"
import {milk3} from "@/public/images/cards/milk"
import {milk4} from "@/public/images/cards/milk"



const Page = () => {

    const backgroundStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundImage: "url('/images/dairybg.jpg')",
        float: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };


  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-auto text-black flex items-center">
        <div className="text-center mx-auto p-4 space-y-5 mt-5">
          <h1 className="text-4xl font-bold">Indulge in Dairy Goodness</h1>
          <p className="text-2xl">Experience the Creaminess of Farm-Fresh Dairy</p>
          <p className="w-3/5 text-center mx-auto">
          At Bioagro Solutions, our commitment to delivering the freshest and highest quality dairy products is unwavering. Our dairy collection includes a range of farm-fresh delights, carefully crafted to bring you the creaminess of nature.          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center my-10">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
          <h1 className="text-3xl">Milk from Our Pastures</h1>
          <p>
          Sourced from local pastures, our milk is a testament to the purity and richness of nature. Whether you prefer it in your morning coffee or as a key ingredient in your recipes, our milk is a versatile addition to your daily routine.          </p>
          <h1 className="text-3xl">Sustainability at the Core</h1>
          <p>
          Our commitment to sustainability extends to our dairy practices. We prioritize the well-being of our cows and the environmental impact of our dairy production. When you choose Bioagro Solutions dairy, you're not only choosing deliciousness but also supporting a greener and healthier future.          </p>
          <h1 className="text-3xl">Visit Us and Savor the Difference</h1>
          <p>
          We invite you to visit Bioagro Solutions and savor the difference that our farm-fresh dairy can make. Come rain or shine, we're here to provide you with the best of dairy delights. Discover the taste of creaminess, sustainability, and wholesome goodness with our dairy collection.          </p>
          <div className="justify-between items-center mx-auto space-x-5">
              <Link href = "/contact">
                <button className=" border-4 border-green-500 bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
        </div>
        <div className=' h-screen w-screen flex-1 max-lg:hidden' style={backgroundStyles}></div>
      </div>

      <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap '>
                                  <Link href= "/">
                                      <Image src = {milk1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {milk2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {milk3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {milk4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>

    
    </div>
  );
};

export default Page;
