import React from 'react'


{/* Here comes the hero section component for survepesu */}

const SurveHero = () => (
  <section className="bg-surv-bg bg-cover bg-no-repeat h-screen">
    <div className='flex justify-around mx-20 pt-40'>
      <div className='w-1/2'>
        <h1 className="text-primary text-5xl font-bold font-poppins pb-9">survepesu</h1>
        <p className='text-primary pb-12 leading-9 text-xl'>AURUPROFF pakub nii era- kui ärikliendile laiaulatuslikku valikut eripuhastustöid välitingimustes. Puhastame pindasid ja seadmeid alates eramaja katusest, tänavakivist ja kiviskulptuuridest kuni teraviljahoidlate ja väikelaevadeni välja. 
          Uuendame ja täiustame oma masinaparki ning teadmisi regulaarselt, seega võtame vastu ka kõige keerukamad puhastusväljakutsed!</p>
        <ul className='list-disc ml-5 text-primary leading-8 text-lg'>
          <li>Katuste pesu ja vihmaveerennide puhastus</li>
          <li>Fassadipuhastus</li>
          <li>Tänavakivide puhastus</li>
          <li>Betoonpindade puhastus</li>
          <li>Akende pesu</li>
          <li>Torustike survepesu</li>
          <li>Mahutite pesu ja puhastus</li>
          <li>Veesõidukite pesu ja puhastus</li>
          <li>Montaazi- ja paigaldustööd</li>
          <li>Alpinismitööd</li>
          <li>Eripuhastuslahendused pindadele ja seadmetele</li>
        </ul>
        <button type="button" className="py-3 px-5 bg-primary text-secondary font-poppins uppercase font-bold hover:bg-sky-800 hover:text-white mt-12">
          Soovin pakkumist küsida
        </button>
      </div>
      <div className='w-1/2'></div>
    </div>
  </section>
  
);

export default SurveHero