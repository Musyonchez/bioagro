import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {pawpaws1} from "@/public/images/cards/pawpaws"
import {pawpaws2} from "@/public/images/cards/pawpaws"
import {pawpaws3} from "@/public/images/cards/pawpaws"
import {pawpaws4} from "@/public/images/cards/pawpaws"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: pawpaws1,
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
                                      <Image src = {pawpaws1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {pawpaws2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {pawpaws3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {pawpaws4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10  w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Pawpaws: Tropical Sweetness on Your Plate</h1>
            <p>
            Indulge in the tropical sweetness of pawpaws at Bioagro Solutions. Pawpaws, also known as papayas, are a delicious fruit that delights your taste buds with their vibrant flavor and vibrant color. Whether you enjoy them fresh or as part of fruit salads and smoothies, pawpaws offer a taste of the tropics on your plate.
            </p>
            <h1 className="text-3xl">Sustainable Farming for Exceptional Pawpaws</h1>
            <p>
            At Bioagro Solutions, we are committed to sustainable farming practices. Our pawpaws are grown with care and precision, ensuring they are not only delicious but also produced in an eco-friendly manner. When you choose our pawpaws, you're supporting agriculture that values both your well-being and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Tropical Delight of Pawpaws</h1>
            <p>
            We invite you to visit Bioagro Solutions and immerse yourself in the world of pawpaws. Whether you're a fan of tropical fruits or looking to add a touch of exotic sweetness to your meals, our pawpaw selection has something for everyone. Taste the vibrant flavors and tropical goodness of pawpaws and join us in promoting sustainability and deliciousness with our high-quality produce. Celebrate freshness, sustainability, and the tropical paradise of pawpaws with Bioagro Solutions.
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
                                    <Image src = {pawpaws1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {pawpaws2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {pawpaws3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {pawpaws4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
