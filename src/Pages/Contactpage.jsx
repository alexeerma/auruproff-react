import React from 'react'
import { Contactform2, Contactinfo, Footer, Infow, NavBar } from '../components';

const Contactpage = () => (
  
  <div className='mt-64'>
    <NavBar /> 
    <Infow />
    <div className='flex justify-around mt-36 gap-20 pb-12'>
      <Contactinfo />
      <Contactform2 />
    </div>
    <Footer />
  </div>
  
);

export default Contactpage