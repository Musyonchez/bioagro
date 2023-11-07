import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';



import {mangoes1} from "@/public/images/cards/mangoes"
import {mangoes2} from "@/public/images/cards/mangoes"
import {mangoes3} from "@/public/images/cards/mangoes"
import {mangoes4} from "@/public/images/cards/mangoes"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: mangoes1,
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
                                      <Image src = {mangoes1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {mangoes2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {mangoes3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {mangoes4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Mangoes: Nature's Sweet Delight</h1>
          <p>
          Indulge in the natural sweetness of mangoes at Bioagro Solutions. Mangoes are a tropical treat that captivates your taste buds with their succulent and juicy flavor. Whether you enjoy them fresh, in smoothies, or as part of your favorite desserts, mangoes offer a delightful and refreshing taste of paradise.
          </p>
          <h1 className="text-3xl">Sustainable Farming for Exceptional Mangoes</h1>
          <p>
          At Bioagro Solutions, we are dedicated to sustainable farming practices. Our mangoes are grown with care and precision, ensuring they are not only delicious but also produced in an eco-friendly manner. When you choose our mangoes, you're supporting agriculture that values both your well-being and the environment.
          </p>
          <h1 className="text-3xl">Visit Us and Savor the Juiciness of Mangoes</h1>
          <p>
          We invite you to visit Bioagro Solutions and immerse yourself in the world of mangoes. Whether you're a mango enthusiast or trying them for the first time, our mango selection has something for everyone. Taste the sweetness and tropical goodness of mangoes and join us in promoting sustainability and deliciousness with our high-quality produce. Celebrate freshness, sustainability, and the tropical paradise of mangoes with Bioagro Solutions.
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
                                    <Image src = {mangoes1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {mangoes2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {mangoes3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {mangoes4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
