"use client"
import Navbar from '@/Components/Navbar';
import '../../app/globals.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_egqpylm', 'template_n0p2raj', form.current, 'yOUbsktS4SUx-Q6pB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  const backgroundStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backgroundImage: "url('/images/contactbg.jpeg')",
    float: 'right',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const absoluteCenter = {
    position: 'absolute',
    top: '70%',
    left: '30%',
    transform: 'translateX(-50%) translateY(-20%)',
  };
  

  return (
    <div className='h-screen w-screen'>
      <Navbar className="z-10 mb-5" />
      <div className='text-lg bg-gray-50 items-center z-10 justify-center max-sm:h-full h-full lg:w-1/2 md:w-2/3 sm:w-2/3 max-sm:w-screen space-y-2.5 text-center max-sm:mx-auto' style={absoluteCenter}>
        <div className='h-1 w-32 bg-green-700 justify-center mx-auto'></div>
        <h1 className='text-yellow-500 font-extrabold text-xl'>Contact US</h1>
    <form className='space-y-10' onSubmit={sendEmail} ref={form}>
      <div className='flex justify-evenly flex-row max-sm:flex-col'>
        <div className='flex flex-col space-y-2.5 text-center'>
          <label htmlFor="form-firstName">First name</label>
          <input
            className='max-sm:w-3/4 mx-auto'
            type="text"
            id="form-firstName"
            name="first_name"
            placeholder='Enter firstname'
            required
          />
        </div>
        <div className='flex flex-col space-y-2.5 max-sm:mt-5'>
          <label htmlFor="form-lastName">Last name</label>
          <input
            className='max-sm:w-3/4 mx-auto'
            type="text"
            id="form-lastName"
            name="last_name"
            placeholder='Enter lastname'
            required
          />
        </div>
      </div>
      <div className='flex justify-evenly flex-row max-sm:flex-col'>
        <div className='flex flex-col space-y-2.5'>
          <label htmlFor="form-phoneNumber">Phone Number</label>
          <input
            className='max-sm:w-3/4 mx-auto'
            type="number"
            id="form-phoneNumber"
            name="phone_number"
            placeholder='Enter number'
            required
          />
        </div>
        <div className='flex flex-col space-y-2.5'>
          <label htmlFor="form-email">Email</label>
          <input
            className='max-sm:w-3/4 mx-auto'
            type="email"
            id="form-email"
            name="email"
            placeholder='Enter email'
            required
          />
        </div>
      </div>
      <div className='flex justify-evenly flex-col'>
        <label htmlFor="form-message">Message</label>
        <textarea
          className='w-3/4 mx-auto'
          type="text"
          id="form-message"
          name="message"
          rows="6"
          placeholder='Enter message'
          required
        />
      </div>
      <button className='bg-green-700 p-3 rounded-full items-center mb-10' type='submit'>
        Send Message&rarr;
      </button>
    </form>
    </div>
      <div className=' my-auto h-screen w-3/5 max-sm:hidden items-center' style={backgroundStyles}></div>
    </div>
  );
};

export default ContactUs;
