import React from 'react';
import CTAButton1 from './CTAButton1';



const Hero = () => (
  <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen'>
    <div className=''>
      <div className='pl-[100px] pt-[300px]'>
        <h1 className='font-poppins text-6xl text-white w-[700px]' >Sinu professionaalne eripuhastustööde partner</h1>
          <ul className='list-disc pl-5 pt-5 text-white pb-5' >
            <li className='py-2'>Tööstusseadmete ja -pindade süvapuhastus</li>
            <li className='py-2'>Tänavakivi, katuse ja fassaadi puhastus</li>
            <li className='py-2'>Lao-, kaubandus- ja äripindade ning spordiklubide ja ujulate puhastus</li>
            <li className='py-2'>Eritööd (sh põranda ja vaipkatete süvapesu, vahatamine, pindade kaitsetöötlus jpm)</li>
          </ul>
          <CTAButton1 />
      </div>
    </div>
  </section>
);
    
  
  

export default Hero