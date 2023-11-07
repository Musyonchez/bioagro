import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {cow_peas1} from "@/public/images/cards/cow_peas"
import {cow_peas2} from "@/public/images/cards/cow_peas"
import {cow_peas3} from "@/public/images/cards/cow_peas"
import {cow_peas4} from "@/public/images/cards/cow_peas"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: cow_peas1,
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
                                      <Image src = {cow_peas1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {cow_peas2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {cow_peas3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {cow_peas4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Cow Peas: Nutritious and Versatile Legumes</h1>
            <p>
            Explore the world of cow peas at Bioagro Solutions. Cow peas, also known as black-eyed peas, are a nutritious and versatile legume that can enhance your meals. Whether you enjoy them in soups, stews, or as a side dish, cow peas offer a wholesome taste and a rich source of plant-based protein.
            </p>
            <h1 className="text-3xl">Sustainable Farming Practices for Premium Cow Peas</h1>
            <p>
            At Bioagro Solutions, we prioritize sustainable farming methods. Our cow peas are grown with attention to detail, ensuring they are not only delicious but also produced in an environmentally friendly way. When you choose our cow peas, you're supporting agriculture that values both your health and the planet.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Goodness of Cow Peas</h1>
            <p>
            We invite you to visit Bioagro Solutions and explore the world of cow peas. Whether you're a fan of legumes or want to try something new, our cow pea selection has something for everyone. Enjoy the nutritious benefits and versatility of cow peas and join us in promoting sustainability and deliciousness with our premium produce. Celebrate freshness, sustainability, and culinary creativity with cow peas from Bioagro Solutions.
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
                                    <Image src = {cow_peas1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {cow_peas2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {cow_peas3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {cow_peas4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
