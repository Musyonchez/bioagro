import Navbar from '@/Components/Navbar'
import '../../app/globals.css';
import React from 'react'

const page = () => {

    const backgroundStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundImage: "url('/images/farmbg.jpg')",
        float: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };


  return (
    <div>
        <Navbar />
        <div className=' flex flex-col lg:flex-row items-center'>
        <div className=' flex-1 p-14 space-y-10 border-black border-4 mx-5 max-lg:my-10'>
            <p>
            At Bioagro Solutions, we're committed to sustainable farming methods that prioritize the health of our crops and the environment. Our experienced team takes great care in nurturing our vegetables, ensuring they are not only free from harmful pesticides but also cultivated using eco-friendly practices. We believe in promoting a greener, healthier planet, and we're proud to play our part in this mission.
            </p>
            <p>
            In addition to our extensive selection of fresh vegetables, we are delighted to offer a range of dairy milk and seedlings. Our dairy milk is produced with the same dedication to quality and sustainability as our vegetables. It's a perfect addition to your daily nutrition, providing you with wholesome, locally sourced dairy products. Our seedlings, on the other hand, allow you to embark on your gardening journey, bringing home the potential to grow your fruits and vegetables, just like we do at Bioagro Solutions.
            </p>
            <p>
            When you visit Bioagro Solutions, you're not just choosing a source of exceptional farm-fresh produce; you're supporting a sustainable approach to agriculture. We invite you to join us in celebrating the joy of food, from our fields to your table, and to explore the possibilities of dairy milk and starting your garden with our quality seedlings. Come rain or shine, we're here to provide you with the best of what local agriculture has to offer.
            </p>
        </div>
      <div className=' h-screen w-screen flex-1 max-lg:hidden' style={backgroundStyles}></div>
      </div>
    </div>
  )
}

export default page


