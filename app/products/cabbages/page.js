import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {cabbages1} from "@/public/images/cards/cabbages"
import {cabbages2} from "@/public/images/cards/cabbages"
import {cabbages3} from "@/public/images/cards/cabbages"
import {cabbages4} from "@/public/images/cards/cabbages"



const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: cabbages2,
      float: 'right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };


return (
  <div>
    <Navbar />
    <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap'>
                                  <Link href= "/">
                                      <Image src = {cabbages1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {cabbages2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {cabbages3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {cabbages4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">Cabbage: A Versatile Veggie for Your Kitchen</h1>
          <p>
          Dive into the world of cabbage at Bioagro Solutions. Cabbage is a versatile and nutritious vegetable that can be a star in various culinary creations. From coleslaw to stir-fries, cabbage offers a crisp texture and a mild, satisfying flavor that complements a wide range of dishes.
          </p>
          <h1 className="text-3xl">Sustainability at the Core of Our Cabbage Cultivation</h1>
          <p>
          At Bioagro Solutions, we're committed to sustainable farming practices. Our cabbage is grown with care and respect for the environment. When you choose our cabbage, you're not only enjoying a delicious vegetable but also supporting eco-friendly agriculture that benefits both you and the planet.
          </p>
          <h1 className="text-3xl">Visit Us and Savor the Crunch of Cabbage</h1>
          <p>
          We invite you to visit Bioagro Solutions and explore the world of cabbage. Whether you're a seasoned cook or a novice in the kitchen, our cabbage selection has something for everyone. Experience the crisp and refreshing taste of cabbage and be a part of the sustainable food movement with our top-quality produce. Join us in celebrating freshness, sustainability, and culinary delight with cabbage from Bioagro Solutions.
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
                                    <Image src = {cabbages1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {cabbages2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {cabbages3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {cabbages4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
