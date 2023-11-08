import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {bananas1} from "@/public/images/cards/bananas"
import {bananas2} from "@/public/images/cards/bananas"
import {bananas3} from "@/public/images/cards/bananas"
import {bananas4} from "@/public/images/cards/bananas"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: bananas3,
      float: 'right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };


return (
  <div>
    <Navbar />
    <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap'>
                                  <Link href= "/">
                                      <Image src = {bananas1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {bananas2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {bananas3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {bananas4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Bananas: Nature's Perfect Snack</h1>
          <p>
          Embark on a journey into the world of bananas at Bioagro Solutions. Bananas are not just a fruit; they're a convenient and nutritious snack that's loved by people of all ages. Whether you enjoy them on their own or use them in smoothies and desserts, bananas offer a delightful taste and a burst of energy.
          </p>
          <h1 className="text-3xl">Sustainability at the Heart of Our Banana Farming</h1>
          <p>
          At Bioagro Solutions, we take pride in our commitment to sustainable farming. Our bananas are grown with care and consideration for the environment. When you choose our bananas, you're not only treating your taste buds but also supporting eco-friendly agriculture that values the well-being of the planet.
          </p>
          <h1 className="text-3xl">Visit Us and Experience Banana Bliss</h1>
          <p>
          We invite you to visit Bioagro Solutions and savor the goodness of bananas. Whether you're looking for a quick and healthy snack or ingredients for your favorite recipes, our banana selection has you covered. Taste the natural sweetness of bananas and join us in promoting sustainability and deliciousness with our high-quality produce.
          </p>

          <div className="justify-between items-center mx-auto">
              <Link href = "/contact">
                <button className=" border-4 border-green-500 bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
        </div>
      </div>
      <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
            <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap '>
                                <Link href= "/">
                                    <Image src = {bananas1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {bananas2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {bananas3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {bananas4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
