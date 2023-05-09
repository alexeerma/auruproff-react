import React from 'react'
import { NavBar, People } from '../components';

const Peoplepage = () => (
  
  <div className='mt-36'>
    <NavBar />
    <div className='container mx-auto'>
    <h1 className='text-primary text-4xl font-bold font-poppins'>auruproff tiim</h1>
    <People />
    </div>
  </div>
  
);

export default Peoplepage