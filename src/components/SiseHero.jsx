import React from 'react'

{/* Here comes the hero section component for survepesu */}

const SiseHero = () => (
  <section className="bg-sise-bg bg-cover bg-no-repeat bg-right sm:h-auto xl:h-screen ">
    <div className='flex justify-around mx-20 pt-40'>
      <div className='w-1/2 pb-16'>
        <h1 className="text-primary text-5xl font-bold font-poppins pb-9">siselahendused</h1>
        <p className='text-primary font-light pb-12 leading-9 text-lg xl:text-xl'>AURUPROFF pakub nii era- kui ärikliendile laiaulatuslikku valikut eripuhastustöid välitingimustes. Puhastame pindasid ja seadmeid alates eramaja katusest, tänavakivist ja kiviskulptuuridest kuni teraviljahoidlate ja väikelaevadeni välja. 
        <br></br>
        <br></br>
        Uuendame ja täiustame oma masinaparki ning teadmisi regulaarselt, seega võtame vastu ka kõige keerukamad puhastusväljakutsed!</p>
        <ul className='list-disc ml-5 text-primary leading-8 text-lg xl:text-lg'>
          <li>Põrandate süvapesu ja vahatamine</li>
          <li>Tööstusseadmete ja -pindade puhastus</li>
          <li>Suurköökide ja köögikubude puhastus</li>
          <li>Vaipkatete süvapesu</li>
          <li>Spordiklubide ja veekeskuste puhastus</li>
          <li>Torustike survepesu</li>
          <li>Torustike survepesu</li>
          <li>Tööstusalpinism ja kõrgtööd</li>
          <li>Eripuhastuslahendused pindadele ja seadmetele</li>
        </ul>
        <button type="button" className="py-3 px-5 bg-primary text-secondary font-poppins uppercase font-bold hover:bg-sky-800 hover:text-white mt-12">
          Soovin pakkumist küsida
        </button>
      </div>
      <div className='w-1/2 pb-16'></div>
    </div>
  </section>
  
);

export default SiseHero