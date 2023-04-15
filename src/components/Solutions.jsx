import React from 'react'
import { siselahendused_pic, valilahendused_pic } from '../assets';
import { CTAButton2 } from '../components';

const Solutions = () => (
  
  <div className='my-8'>
    <div className='flex justify-around'>
      <div className=''>
        <h1>Meie lahendused</h1>
        <span class="h-1 w-full bg-primary lg:w-1/3"></span>
        <p>Auruproff teeb eripuhastustöid nii sise- kui välitingimustes. Siit leiad laia valiku teenuseid puhtama keskkonna loomiseks. Töötame iga päev selle nimel, et olla meie klientide soovide ja vajaduste kõrgusel ning muuta puhastus ettevõtete jaoks võimalikult stressivabaks!</p>
      </div>
      <div>
        <img src={siselahendused_pic} alt="" />
        <h1>Siselahendused</h1>
        <CTAButton2 />
      </div>
      <div>
        <img src={valilahendused_pic} alt="" />
        <h1>Välilahendused</h1>
        <CTAButton2 />
      </div>
    </div>
  </div>


);

export default Solutions