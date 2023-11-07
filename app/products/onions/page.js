import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';



import {onions1} from "@/public/images/cards/onions"
import {onions2} from "@/public/images/cards/onions"
import {onions3} from "@/public/images/cards/onions"
import {onions4} from "@/public/images/cards/onions"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: onions1,
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
                                      <Image src = {onions1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {onions2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {onions3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {onions4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10  w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Onions: The Flavorful Foundation</h1>
          <p>
          Explore the world of onions at Bioagro Solutions. Onions are the flavorful foundation of many dishes, adding a unique taste and aroma to your culinary creations. Whether you enjoy them raw in salads or cooked in savory recipes, onions offer an essential element to your meals.
          </p>
          <h1 className="text-3xl">Sustainable Farming for Exceptional Onions</h1>
          <p>
          At Bioagro Solutions, we are committed to sustainable farming practices. Our onions are grown with meticulous care, ensuring they are not only delicious but also produced in an eco-friendly manner. When you choose our onions, you're supporting agriculture that values both your well-being and the environment.
          </p>
          <h1 className="text-3xl">Visit Us and Savor the Flavor of Onions</h1>
          <p>
          We invite you to visit Bioagro Solutions and explore the world of onions. Whether you're a seasoned cook or a novice in the kitchen, our onion selection has something for everyone. Enjoy the distinctive taste and aromatic quality of onions and join us in promoting sustainability and culinary creativity with our high-quality produce. Celebrate freshness, sustainability, and the flavorful essence of onions with Bioagro Solutions.
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
                                    <Image src = {onions1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {onions2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {onions3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {onions4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
