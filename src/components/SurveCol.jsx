import React from 'react'
import {slide1, slide2, slide3} from '../assets';


{/* Here come the column layout component for survepesu */}
const SurveCol = () => (
  <section className=''>
    <div className='flex justify-around bg-colblue py-16 px-20'> 
      <div className='w-[450px] h-[300px] '>
        <img src={slide1} alt="" className='w-[450px] h-[300px] object-cover'/>
      </div>
      <div className='pl-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>Katuste ja vihmaveerennide puhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Hoone katuse hooldamine ja regulaarne puhastus pikendavad selle eluiga ning lisaks garanteerivad esteetilise väljanägemise. 
          Katusele kogunenud mustuse ja sambla eemaldamiseks piisab enamasti kõrgsurvepesuriga puhastamisest, raskema mustuse korral kasutame ökoloogilisi puhastusaineid. Tööde teostamisel kasutame tõstukeid ja julgestusvarustust ning meie töötajad omavad Eesti Ehitusinseneride Liidu kutsekomisjoni standarditele vastavat kõrgtööde teostamise väljaõpet.
        </p>
      </div>
    </div>
    <div className='flex py-16 px-20'>
      <div className='pr-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>Fassaadipuhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Keerulised ilmastikuolud mõjutavad fassaadi väljanägemist arvestatavalt – koguneb sammal, hallitus, tolm, tekib üldine määrdumine, võimalik et ka niiskuskahjustus. Puhas fassaad on visiitkaardiks nii eramaja kui büroo- ja laohoonete puhul.
            Vastavalt pinnakattematerjalile valime sobiva puhastusmeetodi, enamasti ei ole kemikaalide kasutamine fassaadi puhastuse puhul vajalik ehk fassaad saab puhtaks professionaalse tööstusliku kuumaveesurvepesuri abil. Kuumavee-kõrgsurvepesur seadistatakse vastavalt pinnakattetüübile (määratakse sobiv temperatuur ja survetugevus).
        </p>
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
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>Tänavakivide puhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Kõnni- või sissesõidutee sammaldumine ja vuugivahedes tülikate taimede kasvamine on meie ilmastikuoludes paratamatu. Tänavakivi ja vuugivahede puhastamiseks efektiivseim meetod on kuumavee-kõrgsurvepesuriga pindade töötlemine. Kuum vesi (kuni 140 ℃) võimaldab hävitada  kivipindadele ja vuugivahedesse kogunenud sambla, hallituse ja umbrohu. Esmalt peseme kuumaveesurvepesuriga kivipinnad ning seejärel kogume ja utiliseerime mustuse, viimases etapis täidame puhastatud vuugivahed värske liivaga ja vajadusel teostame kiviparandustööd.
        </p>
      </div>
    </div>
    <div className='flex py-16 px-20'>
      <div className='pr-20 text-primary w-[850px]'>
        <h1 className='font-poppins text-2xl font-semibold uppercase mb-[-10px]'>Betoonpindade puhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p className='mt-[10px] text-lg leading-9 xl:text-xl'>Betoonpindade poorne olemus on soodsaks pinnaseks erinevate samblike, vetikate, seente ja hallituse tekkeks – lisaks mõjutavad betooni määrdumist ka tolm ja igapäevamustus.
Pindade puhastamiseks ja hooldamiseks kasutame kuumavee-kõrgsurvepesureid ning erinevaid pesu- ja kaitsetöötlusaineid. Esmalt peseme kõrgsurvepesuriga betoonpinnad ning seejärel impregneerime ehk immutame pinna vastava pinnatöötlusainega, mis sulgeb poorid ja mikropraod ning muudab betoonpinna tihedaks ning vett ja mustust hülgavaks.
        </p>
      </div>
      <div className='w-[450px] h-[300px]'>
        <img src={slide2} alt="" className='w-[450px] h-[300px] object-cover'/>
      </div>
    </div>



  </section>
    
  
  
);


export default SurveCol