import React from 'react'
import Navbar from '@/Components/Navbar';
import '../../app/globals.css';
import { seedlings, vegetables, milk, fruits } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';



const page = () => {
  return (
    <div className=' flex flex-col'>
        <Navbar />
        <div className=' flex flex-col lg:flex-row'>
            <div className=' flex flex-1 flex-col text-center justify-center items-center'>
                <div className=' bg-stone-200 w-3/4 h-1/2 my-14'>
                <h1 className=' text-4xl'>Rich and Creamy Milk</h1>
                <h4 className=' text-2xl'>Milked to Perfection</h4>
                </div>

                <div className=' flex justify-center items-center'>
                    <ul className=''>
                            {milk.map((mil) => (
                                <li 
                                    key={mil.id}
                                    className=' list-none'
                                >
                                    <Link href="/products">
                                        <Image src = {mil.img} alt="Logo" className=' h-full w-3/5  mx-auto' />
                                    </Link> 
                                    <Link href = "/contact">
                                        <button className="bg-green-500 h-14 w-48 rounded-3xl text-2xl my-3">
                                            Learn More <span>&rarr;</span>
                                        </button>
                                        </Link>
                                    <h1 className='text-2xl'>{mil.id}</h1>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
            <div className=' flex flex-1 flex-col text-center justify-center items-center'>
                <div className=' bg-stone-200 w-3/4 h-1/2 my-14'>
                <h1 className=' text-4xl'>Seedlings: The Garden's Genesis</h1>
                <h4 className=' text-2xl'>Where Green Dreams Take Roo</h4>
                </div>

                <div className='flex justify-center items-center'>
                    <ul className=''>
                            {seedlings.map((seed) => (
                                <li 
                                    key={seed.id}
                                    className=' list-none'
                                >
                                    <Link href="/products">
                                        <Image src = {seed.img} alt="Logo" className=' h-full w-3/5 mx-auto' />
                                    </Link> 
                                    <Link href = "/contact">
                                        <button className="bg-green-500 h-14 w-48 rounded-3xl text-2xl my-3">
                                            Learn More <span>&rarr;</span>
                                        </button>
                                        </Link>
                                    <h1 className='text-2xl'>{seed.id}</h1>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
        <div className=' flex flex-1 flex-col text-center justify-center items-center'>
                <div className=' bg-stone-200 w-3/4 h-1/2 my-14'>
            <h1 className=' text-4xl'>Deliciouscious Fruits</h1>
            <h4 className=' text-2xl'>Nature's Sweet Bounty</h4>
            </div>

            <div className='flex justify-center items-center'>
                <ul className='grid xl:grid-cols-4 lg:grid-cols-3 max-md:grid-cols-1 text-center mb-0 justify-center items-center mx-auto'>
                            {fruits.map((fruit) => (
                                <li 
                                    key={fruit.id}
                                    className=' list-none mx-auto mr-14 max-md:mr-0'
                                >
                                    <Link href="/products">
                                        <Image src = {fruit.img} alt="Logo"  className=' h-80 w-60 max-auto' />
                                    </Link> 
                                    <Link href = "/contact">
                                        <button className="bg-green-500 h-14 w-48 rounded-3xl text-2xl my-3">
                                            Learn More <span>&rarr;</span>
                                        </button>
                                        </Link>
                                    <h1 className='text-2xl mb-10'>{fruit.id}</h1>
                                </li>
                            ))}
                        </ul>
            </div>
        </div>
        <div className=' flex flex-1 flex-col text-center justify-center items-center'>
                <div className=' bg-stone-200 w-3/4 h-1/2 my-14'>
            <h1 className=' text-4xl'>Fresh and Flavorful Vegetables</h1>
            <h4 className=' text-2xl'>Discover Flavorful Harvests</h4>
            </div>

            <div className='flex justify-center items-center'>
                <ul className='grid xl:grid-cols-4 lg:grid-cols-3 max-md:grid-cols-1 text-center mb-0 justify-center items-center mx-auto'>
                            {vegetables.map((veg) => (
                                <li 
                                    key={veg.id}
                                    className=' list-none mx-auto mr-14 max-md:mr-0'
                                >
                                    <Link href="/products">
                                        <Image src = {veg.img} alt="Logo" className=' h-80 w-60 mx-auto' />
                                    </Link> 
                                    <Link href = "/contact">
                                        <button className="bg-green-500 h-14 w-48 rounded-3xl text-2xl my-3">
                                            Learn More <span>&rarr;</span>
                                        </button>
                                        </Link>
                                    <h1 className='text-2xl  mb-10'>{veg.id}</h1>
                                </li>
                            ))}
                        </ul>
            </div>
        </div>
    </div>
  )
}

export default page