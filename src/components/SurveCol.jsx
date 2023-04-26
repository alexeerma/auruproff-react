import React from 'react'
import {slide1, slide2, slide3} from '../assets';


{/* Here come the column layout component for survepesu */}
const SurveCol = () => (
  <section className=''>
    <div className='flex bg-colblue py-12 '> 
      <div className=''>
        <img src={slide1} alt="" />
      </div>
      <div className=''>
        <h1>Katuste ja vihmaveerennide puhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p>Hoone katuse hooldamine ja regulaarne puhastus pikendavad selle eluiga ning lisaks garanteerivad esteetilise väljanägemise. 
          Katusele kogunenud mustuse ja sambla eemaldamiseks piisab enamasti kõrgsurvepesuriga puhastamisest, raskema mustuse korral kasutame ökoloogilisi puhastusaineid. Tööde teostamisel kasutame tõstukeid ja julgestusvarustust ning meie töötajad omavad Eesti Ehitusinseneride Liidu kutsekomisjoni standarditele vastavat kõrgtööde teostamise väljaõpet.
        </p>
      </div>
    </div>
    <div className='flex  py-12'>
      <div>
        <h1>Fassaadipuhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p>Keerulised ilmastikuolud mõjutavad fassaadi väljanägemist arvestatavalt – koguneb sammal, hallitus, tolm, tekib üldine määrdumine, võimalik et ka niiskuskahjustus. Puhas fassaad on visiitkaardiks nii eramaja kui büroo- ja laohoonete puhul.
            Vastavalt pinnakattematerjalile valime sobiva puhastusmeetodi, enamasti ei ole kemikaalide kasutamine fassaadi puhastuse puhul vajalik ehk fassaad saab puhtaks professionaalse tööstusliku kuumaveesurvepesuri abil. Kuumavee-kõrgsurvepesur seadistatakse vastavalt pinnakattetüübile (määratakse sobiv temperatuur ja survetugevus).
        </p>
      </div>
      <div>
        <img src={slide2} alt="" />
      </div>
    </div>
    <div className='flex bg-colblue py-12'>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <h1>Tänavakivide puhastus</h1>
        <span className="h-1 w-full p-0.5 text-primary text-xl font-bold">______________</span>
        <p>Kõnni- või sissesõidutee sammaldumine ja vuugivahedes tülikate taimede kasvamine on meie ilmastikuoludes paratamatu. Tänavakivi ja vuugivahede puhastamiseks efektiivseim meetod on kuumavee-kõrgsurvepesuriga pindade töötlemine. Kuum vesi (kuni 140 ℃) võimaldab hävitada  kivipindadele ja vuugivahedesse kogunenud sambla, hallituse ja umbrohu. Esmalt peseme kuumaveesurvepesuriga kivipinnad ning seejärel kogume ja utiliseerime mustuse, viimases etapis täidame puhastatud vuugivahed värske liivaga ja vajadusel teostame kiviparandustööd.
        </p>
      </div>
    </div>



  </section>
    
  
  
);


export default SurveCol