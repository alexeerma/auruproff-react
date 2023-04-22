import React from 'react'
import { aur_white } from '../assets';
import { Contactform } from '../components';
import { FaFacebookSquare, FaEnvelope } from "react-icons/fa";

const Footer = () => (

  <section className='flex md:flex justify-around bg-fblue bg-tgraafika bg-cover pt-12 pb-12'>
    <div className='flex flex-col w-1/3'>
      <img src={aur_white} alt="auruproff" className='w-96' />
      <p className='text-secondary font-poppins pb-12 w-[450px]'>Pakume Sulle enda teadmistele ja oskustele tuginedes parima lahenduse. Anna oma küsimustest või soovidest märku!</p>
      <h5 className='text-secondary font-poppins'>Auruproff OÜ</h5>
      <h5 className='text-secondary font-poppins'>Reg-nr: 14561512</h5>
      <h5 className='text-secondary font-poppins'>KMKR:EE102097461</h5>
      <div className='pt-16 flex'>
      <span><a href="https://www.facebook.com"><FaFacebookSquare className='text-secondary text-2xl mr-3 hover:text-conferehele hover:cursor-pointer'/></a> </span>
      <span><a href="mailto:info@auruproff.ee"><FaEnvelope className='text-secondary text-2xl hover:text-conferehele hover:cursor-pointer'  /> </a></span>
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