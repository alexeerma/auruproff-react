import React from 'react'
import { NavBar, Accordion } from '../components';
import { useState } from 'react';

function FAQpage() {
  const [list, setList] = useState([
    {
      question: "What's your name ?",
      answer: "My name is Lun Dev",
      active: 1
    },
    {
      question: "What do you do ?",
      answer: "I'm FullStack Deveoper",
    }
  ]);
  return (
    <section className='bg-graafika bg-no-repeat bg-cover'>
    <div className='mt-36'>
      <NavBar /> 
      <h1 className='text-primary text-4xl font-poppins font-semibold text-center'>KKK</h1>
      <div className='bg-[#f2f2f2] h-screen flex justify-center items-center'>
         <div className='list'> 
         
         {
         list.map((item, key) => (
          <Accordion key={key} datas={item} />
          ))
         }
    </div>
      
   </div>
      
    </div>
    </section>
   
  );
}

export default FAQpage