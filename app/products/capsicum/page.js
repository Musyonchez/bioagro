import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {capsicum1} from "@/public/images/cards/capsicum"
import {capsicum2} from "@/public/images/cards/capsicum"
import {capsicum3} from "@/public/images/cards/capsicum"
import {capsicum4} from "@/public/images/cards/capsicum"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: capsicum1,
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
                                      <Image src = {capsicum1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {capsicum2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {capsicum3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {capsicum4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Capsicum: Colorful and Crunchy Delights</h1>
          <p>
          Discover the vibrant world of capsicum at Bioagro Solutions. Capsicum, often referred to as bell peppers, brings a burst of color and flavor to your dishes. From salads to stir-fries, capsicum adds a crisp and sweet dimension to your culinary creations.
          </p>
          <h1 className="text-3xl">Sustainable Farming for Exceptional Capsicum</h1>
          <p>
          At Bioagro Solutions, we take pride in our commitment to sustainable farming practices. Our capsicum is grown with meticulous care, ensuring it's not only delicious but also produced in an eco-friendly manner. When you choose our capsicum, you're supporting agriculture that values both your well-being and the environment.
          </p>
          <h1 className="text-3xl">Visit Us and Savor the Vibrance of Capsicum</h1>
          <p>
          We invite you to visit Bioagro Solutions and explore the world of capsicum. Whether you're a seasoned chef or a cooking enthusiast, our capsicum selection has something for everyone. Experience the vibrant colors and delightful flavors of capsicum and join us in promoting sustainability and deliciousness with our high-quality produce. Celebrate freshness, sustainability, and culinary creativity with capsicum from Bioagro Solutions.
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
                                    <Image src = {capsicum1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {capsicum2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {capsicum3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {capsicum4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
