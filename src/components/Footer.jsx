import React from 'react'
import { aur_white } from '../assets';
import { Contactform } from '../components';

const Footer = () => (

  <section className='flex md:flex justify-around bg-fblue bg-tgraafika bg-cover pt-12 pb-12'>
    <div className='flex flex-col w-1/3'>
      <img src={aur_white} alt="auruproff" className='w-96' />
      <p className='text-secondary font-poppins pb-12'>Pakume Sulle enda teadmistele ja oskustele tuginedes parima lahenduse. Anna oma küsimustest või soovidest märku!</p>
      <h5 className='text-secondary font-poppins'>Auruproff OÜ</h5>
      <h5 className='text-secondary font-poppins'>Reg-nr: 14561512</h5>
      <h5 className='text-secondary font-poppins'>KMKR:EE102097461</h5>
      <div className='pt-16'>
      <span>asda</span>
      <span>asda</span>
      </div>
      
    </div>
    <div className=''>
      <Contactform />
    </div>
    <div className='pt-[500px] text-sm text-secondary'>
      <p>All Rights Reserved Auruproff © 2023</p>
    </div>
  </section>
    
 
 
 
);


export default Footer