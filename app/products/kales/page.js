import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {kales1} from "@/public/images/cards/kales"
import {kales2} from "@/public/images/cards/kales"
import {kales3} from "@/public/images/cards/kales"
import {kales4} from "@/public/images/cards/kales"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: kales1,
      float: 'right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };


return (
  <div>
    <Navbar />
    <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap '>
                                  <Link href= "/">
                                      <Image src = {kales1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {kales2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {kales3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {kales4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Kale: The Powerhouse of Greens</h1>
          <p>
          Discover the nutritional powerhouse of kale at Bioagro Solutions. Kale is a leafy green vegetable that's known for its incredible health benefits. Whether you enjoy it in salads, smoothies, or cooked dishes, kale offers a dense source of vitamins and minerals that can elevate your well-being.
          </p>
          <h1 className="text-3xl">Sustainable Farming for Exceptional Kale</h1>
          <p>
          At Bioagro Solutions, we are dedicated to sustainable farming practices. Our kale is grown with precision and care, ensuring it's not only nutritious but also cultivated in an eco-friendly way. When you choose our kale, you're supporting agriculture that values both your health and the environment.
          </p>
          <h1 className="text-3xl">Visit Us and Savor the Goodness of Kale</h1>
          <p>
          We invite you to visit Bioagro Solutions and explore the world of kale. Whether you're a health-conscious consumer or a culinary enthusiast, our kale selection has something for everyone. Taste the nutritional benefits and versatility of kale and join us in promoting sustainability and well-being with our high-quality produce. Celebrate freshness, sustainability, and the power of kale with Bioagro Solutions.
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
                                    <Image src = {kales1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {kales2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {kales3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {kales4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
