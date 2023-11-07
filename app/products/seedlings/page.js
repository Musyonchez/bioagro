import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {seedlings1} from "@/public/images/cards/seedlings"
import {seedlings2} from "@/public/images/cards/seedlings"
import {seedlings3} from "@/public/images/cards/seedlings"
import {seedlings4} from "@/public/images/cards/seedlings"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: seedlings1,
      float: 'right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };


return (
  <div>
    <Navbar />
    <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 '>
                                  <Link href= "/">
                                      <Image src = {seedlings1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {seedlings2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {seedlings3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {seedlings4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10  w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">A Taste of Avocado Perfection</h1>
            <p>
            Discover the luscious and nutritious world of avocados at Bioagro Solutions. Our avocados represent the epitome of taste and health, offering you a creamy delight that's perfect for a variety of culinary creations. From guacamole to salads, avocados are a versatile and delicious addition to your meals.
            </p>
            <h1 className="text-3xl">Nourishing Your Body and the Planet</h1>
            <p>
            At Bioagro Solutions, we believe in the power of sustainable agriculture. Our avocados are not only a treat for your taste buds but also a choice for a greener and healthier planet. When you choose our avocados, you're supporting eco-friendly farming practices that prioritize the well-being of both you and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Avocado Experience</h1>
            <p>
            We invite you to visit Bioagro Solutions and immerse yourself in the world of avocados. Whether you're an avocado enthusiast or trying them for the first time, our selection has something for everyone. Experience the creamy goodness of avocados and be a part of the sustainable food movement with our exceptional produce. Join us in celebrating the taste of freshness, sustainability, and deliciousness with avocados from Bioagro Solutions.
            </p>

          <div className="justify-between items-center mx-auto">
              <Link href = "/contact">
                <button className=" border-4 border-green-500 bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
        </div>
      </div>

      <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
            <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 '>
                                <Link href= "/">
                                    <Image src = {seedlings1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {seedlings2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {seedlings3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {seedlings4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>


    </div>
  );
};

export default Page;
