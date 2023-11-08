import Navbar from '@/Components/Navbar';
import '../../app/globals.css';
import React from 'react';
import Link from 'next/link'


import Image from 'next/image';


import {seedlings1} from "@/public/images/cards/seedlings"
import {seedlings2} from "@/public/images/cards/seedlings"
import {seedlings3} from "@/public/images/cards/seedlings"
import {seedlings4} from "@/public/images/cards/seedlings"


const Page = () => {

    const backgroundStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundImage: "url('/images/seedlingbg.jpg')",
        float: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };


  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-auto text-black flex items-center">
        <div className="text-center mx-auto p-4 space-y-5 mt-5">
          <h1 className="text-4xl font-bold">Nurture Your Farm with Quality Seedlings</h1>
          <p className="text-2xl">Plant the Seeds of Your Farming Dreams</p>
          <p className="w-3/5 text-center mx-auto">
          At Bioagro Solutions, we're not just about full-grown produce; we're also your partner in planting the seeds of your gardening dreams. Our "Seedlings" page is where your journey to lush, green gardens begins
          </p>        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center my-10">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
          <h1 className="text-3xl">A Selection of Promising Beginnings</h1>
          <p>
          Explore a variety of seedlings carefully nurtured to ensure a strong start for your gardening adventures. From vibrant flowers to robust vegetables, our seedlings represent the promise of a thriving garden.          </p>
          <h1 className="text-3xl">Greening the Future</h1>
          <p>
          We believe that every garden has the potential to make our world greener. By choosing our seedlings, you're embracing the future of sustainability and helping the environment flourish, one garden at a time.          </p>
          <h1 className="text-3xl">Visit Us and Watch Your Garden Grow</h1>
          <p>
          We invite you to visit Bioagro Solutions and discover the magic of our seedlings. Whether you're an experienced gardener or just starting, our selection has something for everyone. We're here to provide you with the best beginnings for your garden. Watch your garden flourish and be a part of the green future with our seedlings.          </p>
          <div className="justify-between items-center mx-auto space-x-5">
              <Link href = "/contact">
                <button className=" border-4 border-green-500 bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
        </div>
        <div className=' h-screen w-screen flex-1 max-lg:hidden' style={backgroundStyles}></div>
      </div>
      <div className="bg-cover bg-center h-auto text-black flex items-center border-black border-4 mx-1 mt-10 mb-1">
            
              <ul className=' flex justify-evenly items-center mx-auto flex-row w-screen my-10 flex-wrap '>
                                  <Link href= "/">
                                      <Image src = {seedlings1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {seedlings2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {seedlings3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {seedlings4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>

    </div>
  );
};

export default Page;
