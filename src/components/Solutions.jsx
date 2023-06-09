import React from 'react'
import { h_siselahendused, h_valilahendused } from '../assets';
import { CTAButton2 } from '../components';

{/* Here comes the solutions section component for home page */}

const Solutions = () => (
  
  <section className='bg-blockhele px-24 py-12'>
  <div className='my-8'>
    <div className='flex justify-around justify-items-center items-center'>
      <div className='w-1/3'>
        <h1 className="font-poppins text-2xl text-primary font-bold uppercase mb-[-15px] pt-12">Meie lahendused</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold lg:w-1/3 ">_____</span>
        <p className="py-5 text-primary text-lg">Auruproff teeb eripuhastustöid nii sise- kui välitingimustes. Siit leiad laia valiku teenuseid puhtama keskkonna loomiseks. Töötame iga päev selle nimel, et olla meie klientide soovide ja vajaduste kõrgusel ning muuta puhastus ettevõtete jaoks võimalikult stressivabaks!</p>
      </div>
      <div className='w-1/3 relative flex flex-col justify-items-center items-center'>
        <div>
          <img src={h_siselahendused} alt="" className='' /> 
        </div>
        <div>
          <h1 className='text-center text-primary font-poppins font-bold text-2xl uppercase py-5'>Siselahendused</h1>
        </div>
        <div>
          <CTAButton2 />
        </div>
      </div>
      <div className='w-1/3 relative flex flex-col justify-items-center items-center'>
        <div>
          <img src={h_valilahendused} alt="" className='object-contain' />
        </div>
        <div>
        <h1 className='text-center text-primary font-poppins font-bold text-2xl uppercase py-5'>Välilahendused</h1>
        </div>
        <div>
          <CTAButton2/>
        </div>  
      </div>
    </div>
  </div>
</section>

);

export default Solutions