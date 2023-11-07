import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {spinach1} from "@/public/images/cards/spinach"
import {spinach2} from "@/public/images/cards/spinach"
import {spinach3} from "@/public/images/cards/spinach"
import {spinach4} from "@/public/images/cards/spinach"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: spinach1,
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
                                      <Image src = {spinach1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {spinach2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {spinach3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {spinach4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10  w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Spinach: Nutrient-Rich Greens for Your Kitchen</h1>
            <p>
            Explore the world of nutrient-rich spinach at Bioagro Solutions. Spinach is a versatile leafy green that's packed with vitamins and minerals, making it a healthy addition to your meals. Whether you enjoy it in salads, smoothies, or as a side dish, spinach offers a fresh and wholesome element for your culinary creations.
            </p>
            <h1 className="text-3xl">Sustainable Farming for Premium Spinach</h1>
            <p>
            At Bioagro Solutions, we are dedicated to sustainable farming practices. Our spinach is grown with meticulous care, ensuring it's not only nutritious but also produced in an environmentally friendly manner. When you choose our spinach, you're supporting agriculture that values both your well-being and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Goodness of Spinach</h1>
            <p>
            We invite you to visit Bioagro Solutions and immerse yourself in the world of spinach. Whether you're a health-conscious consumer or a culinary enthusiast, our spinach selection has something for everyone. Enjoy the nutrient-rich benefits and versatility of spinach and join us in promoting sustainability and culinary creativity with our high-quality produce. Celebrate freshness, sustainability, and the power of spinach with Bioagro Solutions.
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
                                    <Image src = {spinach1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {spinach2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {spinach3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {spinach4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>


    </div>
  );
};

export default Page;
