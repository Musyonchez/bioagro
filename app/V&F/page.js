import Navbar from '@/Components/Navbar';
import '../../app/globals.css';
import React from 'react';
import Link from 'next/link'

const Page = () => {

  const backgroundStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backgroundImage: "url('/images/V&Fbg.jpg')",
    float: 'right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-auto text-black flex items-center">
        <div className="text-center mx-auto p-4 space-y-5 mt-5">
          <h1 className="text-4xl font-bold">Welcome to Our Vegetable and Fruit Haven</h1>
          <p className="text-2xl">Explore the Freshness of Nature</p>
          <p className="w-3/5 text-center mx-auto">
            Discover a world of vibrant, farm-fresh goodness at Bioagro Solutions. Our "V&F" (Vegetables & Fruits) page is a testament to the bountiful harvest of nature, showcasing a variety of fresh and flavorful vegetables and fruits. Dive into the heart of our garden and savor the essence of sustainability, health, and deliciousness. Our "V&F" collection is a celebration of the wholesome flavors that only nature can provide.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center my-10">
        <div className="flex-1 p-4 sm:p-14 space-y-5 sm:space-y-10 border-black border-4 mx-5">
          <h1 className="text-3xl">Our Diverse Range of Fresh Vegetables and Fruits</h1>
          <p>
            At Bioagro Solutions, our commitment to delivering the freshest and highest quality plant-based farm produce is unwavering. Our extensive range of fresh produce includes a variety of vegetables, fruits, and more. For a detailed list of our products, click the "Products" page.
          </p>
          <h1 className="text-3xl">Sustainability at the Core</h1>
          <p>
            Our farming practices prioritize sustainability and environmental stewardship. We're committed to providing you with products that are not only delicious but also grown with the planet in mind. When you choose our farm-fresh vegetables and fruits, you're not only making a choice for your well-being but also supporting a greener and healthier future.
          </p>
          <h1 className="text-3xl">Visit Us and Experience the Difference</h1>
          <p>
            We invite you to visit Bioagro Solutions and experience the difference that our farm-fresh vegetables and fruits can make. Come rain or shine, we're here to provide you with the best of what local agriculture has to offer. Discover the taste of freshness, sustainability, and goodness with our diverse range of plant-based farm produce.
          </p>
          <div className="justify-between items-center mx-auto space-x-5">
              <Link href = "/products">
              <button className="bg-green-500 h-20 w-60 rounded-3xl text-2xl mb-14">
                Products <span>&rarr;</span>
              </button>
              </Link>
              <Link href = "/contact">
                <button className=" border-4 border-green-500 bg-white h-20 w-52 rounded-3xl text-2xl">Contact Us</button>
              </Link>
            </div>
        </div>
        <div className=' h-screen w-screen flex-1 max-lg:hidden' style={backgroundStyles}></div>
      </div>
    </div>
  );
};

export default Page;
