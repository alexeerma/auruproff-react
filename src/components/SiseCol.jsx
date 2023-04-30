import React from 'react'
import {slide1, slide2, slide3} from '../assets';

{/* Here come the column layout component for siselahendused */}

const SiseCol = () => (
  
    <section className=''>
    <div className='flex justify-around bg-colblue py-16 px-20'> 
      <div className='w-[450px] h-[300px] '>
        <img src={slide1} alt="" className='w-[450px] h-[300px] object-cover'/>
      </div>
      <div className='pl-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>Põrandate süvapesu ja vahatamine</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Puhastame erinevaid põrandakatteid (nt betoon, PVC, linoleum, LVT, laminaat, epopõrand, polüuretaankatted, kivi, keraamiline plaat jpm) innovaatiliste puhastusseadmetega, mis võimaldavad samaaegselt pindasid nii süvapuhastada kui desinfitseerida.</p>
      </div>
    </div>
    <div className='flex py-16 px-20'>
      <div className='pr-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>TÖÖSTUSSEADMETE JA -PINDADE PUHASTUS</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Regulaarselt teostatud ja tööstusseadmete eripärasid arvestav puhastus vähendab märkimisväärselt tootmisseisakute riski realiseerumise tõenäosust. Sõltuvalt teenindatavast sektorist pakume tööstusseadmetelt ning -pindadelt nii rasva, õli, värvi ja muu igapäevatööd takistava mustuse eemaldamist.</p>
      </div>
      <div className='w-[450px] h-[300px]'>
        <img src={slide2} alt="" className='w-[450px] h-[300px] object-cover'/>
      </div>
    </div>
    <div className='flex bg-colblue py-16 px-20'>
      <div className='w-[450px] h-[300px] '>
        <img src={slide3} alt="" className='w-[450px] h-[300px] object-cover' />
      </div>
      <div className='pl-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>SUURKÖÖKIDE JA KÖÖGIKUBUDE PUHASTUS</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Toitlustusasutustele kehtivad paljud seadusandlusest tulenevad nõuded ning nendele vastamine on oluline nii ettevõtte kui kliendi seisukohast. Kasutame suurköögiseadmete ja -pindade puhastamisel Veterinaar- ja Toiduameti poolt aktsepteeritud puhastusaineid ja -meetodeid.
        </p>
      </div>
    </div>
    <div className='flex py-16 px-20'>
      <div className='pr-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>VAIPKATETE SÜVAPESU</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Vaipade ja vaipkatete süvapesu eemaldab vaipkattelt sügavale vaibakiududesse kogunenud mustuse (tihti silmale nähtamatu!), plekid ning bakterid. Regulaarne vaipade puhastus aitab vältida raskestieemaldatavate plekkide ning käiguradade tekkimist. Vaipkatteid puhastame ainulaadse harjava aurumasinaga, mis võimaldab võrdluses teiste kasutatavate masinatega pakkuda kliendile väga kiiret kuivamisaega – vaid 15 minutit.
        </p>
      </div>
      <div className='w-[450px] h-[300px]'>
        <img src={slide2} alt="" className='w-[450px] h-[300px] object-cover'/>
      </div>
    </div>
  </section>
  );


export default SiseCol