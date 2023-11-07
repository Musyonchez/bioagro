import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {maize1} from "@/public/images/cards/maize"
import {maize2} from "@/public/images/cards/maize"
import {maize3} from "@/public/images/cards/maize"
import {maize4} from "@/public/images/cards/maize"


const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: maize1,
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
                                      <Image src = {maize1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {maize2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {maize3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {maize4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Maize: A Staple for Your Kitchen</h1>
            <p>
            Explore the world of maize at Bioagro Solutions. Maize, commonly known as corn, is a versatile staple that can be a foundation for a wide range of dishes. Whether you enjoy it as fresh sweet corn on the cob or use it in various recipes, maize provides a hearty and satisfying addition to your meals.
            </p>
            <h1 className="text-3xl">Sustainability at the Core of Our Maize Farming</h1>
            <p>
            At Bioagro Solutions, we are committed to sustainable farming practices. Our maize is grown with attention to detail, ensuring it's not only delicious but also produced in an environmentally friendly manner. When you choose our maize, you're supporting agriculture that values both your well-being and the environment.
            </p>
            <h1 className="text-3xl">Visit Us and Savor the Versatility of Maize</h1>
            <p>
            We invite you to visit Bioagro Solutions and explore the world of maize. Whether you're a fan of corn on the cob or enjoy using maize in your cooking, our maize selection has something for everyone. Experience the versatility and hearty nature of maize and join us in promoting sustainability and deliciousness with our high-quality produce. Celebrate freshness, sustainability, and culinary creativity with maize from Bioagro Solutions.
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
                                    <Image src = {maize1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {maize2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {maize3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {maize4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
