import Navbar from '@/Components/Navbar';
import '../../../app/globals.css';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


import {french_beans1} from "@/public/images/cards/french_beans"
import {french_beans2} from "@/public/images/cards/french_beans"
import {french_beans3} from "@/public/images/cards/french_beans"
import {french_beans4} from "@/public/images/cards/french_beans"

const Page = () => {

  const backgroundStyles = {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundImage: french_beans1,
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
                                      <Image src = {french_beans1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {french_beans2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link>
                                  <Link href= "/">
                                      <Image src = {french_beans3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                                  <Link href= "/">
                                      <Image src = {french_beans4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                  </Link> 
                      </ul>
    </div>
      <div className="flex flex-col lg:flex-row items-center my-10 w-1/2 mx-auto">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
        <h1 className="text-3xl">French Beans: Delicate and Delicious Greens</h1>
              <p>
              Explore the delicate world of French beans at Bioagro Solutions. French beans, also known as green beans, are a delightful addition to your meals. With their crisp texture and fresh flavor, they are perfect for steaming, sautéing, and adding a touch of green to your dishes.
              </p>
              <h1 className="text-3xl">Sustainable Farming for Premium French Beans</h1>
              <p>
              At Bioagro Solutions, we are committed to sustainable farming practices. Our French beans are grown with meticulous care, ensuring they are not only delicious but also produced in an eco-friendly manner. When you choose our French beans, you're supporting agriculture that values both your well-being and the environment.
              </p>
              <h1 className="text-3xl">Visit Us and Savor the Freshness of French Beans</h1>
              <p>
              We invite you to visit Bioagro Solutions and explore the world of French beans. Whether you're an experienced chef or an amateur cook, our French bean selection has something for everyone. Enjoy the delicate taste and vibrant green color of French beans and join us in promoting sustainability and culinary creativity with our top-quality produce. Celebrate freshness, sustainability, and deliciousness with French beans from Bioagro Solutions.
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
                                    <Image src = {french_beans1} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {french_beans2} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link>
                                <Link href= "/">
                                    <Image src = {french_beans3} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                                <Link href= "/">
                                    <Image src = {french_beans4} alt="Logo"  className=' h-80 w-60 max-auto' />
                                </Link> 
                    </ul>
  </div>
    </div>
  );
};

export default Page;
