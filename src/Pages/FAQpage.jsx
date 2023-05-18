import React from 'react'
import { NavBar, FAQAccordion } from '../components';

function FAQpage() {
  return (
    <section className='bg-graafika bg-no-repeat bg-cover'>
    <div className='mt-36'>
      <NavBar /> 
      <h1 className='text-primary text-4xl font-poppins font-semibold text-center'>KKK</h1>
      <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
        <FAQAccordion />
      </div>
      
    </div>
    </section>
   
  );
}

export default FAQpage