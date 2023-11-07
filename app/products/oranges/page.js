import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';



import {oranges1} from "@/public/images/cards/oranges"
import {oranges2} from "@/public/images/cards/oranges"
import {oranges3} from "@/public/images/cards/oranges"
import {oranges4} from "@/public/images/cards/oranges"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: oranges1,
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
                                      <Image src = {oranges1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {oranges2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {oranges3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {oranges4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Oranges: Citrus Bliss in Every Bite</h1>
            <p>
            Indulge in the citrus bliss of oranges at Bioagro Solutions. Oranges are a refreshing and vitamin-packed fruit that brightens your taste buds with their sweet and tangy flavor. Whether you enjoy them fresh or as part of your morning juice, oranges offer a burst of sunshine in every bite.
            </p>
            <h1 className="text-3xl">Sustainable Farming for Exceptional Oranges</h1>
            <p>
            At Bioagro Solutions, we are committed to sustainable farming practices. Our oranges are grown with care and precision, ensuring they are not only delicious but also produced in an eco-friendly manner. When you choose our oranges, you're supporting agriculture that values both your well-being and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Citrus Delight of Oranges</h1>
            <p>
            We invite you to visit Bioagro Solutions and immerse yourself in the world of oranges. Whether you're a citrus enthusiast or starting your day with a glass of fresh orange juice, our orange selection has something for everyone. Taste the natural sweetness and vitamin-packed goodness of oranges and join us in promoting sustainability and deliciousness with our high-quality produce. Celebrate freshness, sustainability, and the sunshine of oranges with Bioagro Solutions.
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
                                    <Image src = {oranges1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {oranges2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {oranges3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {oranges4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
