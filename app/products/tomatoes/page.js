import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {tomatoes1} from "@/public/images/cards/tomatoes"
import {tomatoes2} from "@/public/images/cards/tomatoes"
import {tomatoes3} from "@/public/images/cards/tomatoes"
import {tomatoes4} from "@/public/images/cards/tomatoes"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: tomatoes1,
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
                                      <Image src = {tomatoes1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {tomatoes2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {tomatoes3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {tomatoes4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5 ">
        <h1 className="text-3xl">Tomatoes: Juicy and Versatile Gems</h1>
            <p>
            Dive into the world of juicy and versatile tomatoes at Bioagro Solutions. Tomatoes are a culinary gem known for their vibrant color, succulent flavor, and incredible versatility. Whether you enjoy them in salads, sauces, or as a snack, tomatoes are an essential ingredient in a wide range of dishes.
            </p>
            <h1 className="text-3xl">Sustainable Farming for Exceptional Tomatoes</h1>
            <p>
            At Bioagro Solutions, we are committed to sustainable farming practices. Our tomatoes are grown with meticulous care, ensuring they are not only delicious but also produced in an environmentally friendly manner. When you choose our tomatoes, you're supporting agriculture that values both your well-being and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Versatility of Tomatoes</h1>
            <p>
            We invite you to visit Bioagro Solutions and explore the world of tomatoes. Whether you're a seasoned cook or just starting your culinary journey, our tomato selection has something for everyone. Enjoy the vibrant colors and delicious flavors of tomatoes and join us in promoting sustainability and culinary creativity with our top-quality produce. Celebrate freshness, sustainability, and the culinary magic of tomatoes with Bioagro Solutions.
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
                                      <Image src = {tomatoes1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {tomatoes2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {tomatoes3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {tomatoes4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>

    </div>
  );
};

export default Page;
