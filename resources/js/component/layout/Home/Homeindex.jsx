
import React from 'react';
import HeroSection from './herosection';
import Price from './Price';
import Profil from './Profil';
import Keunggulan from './Keunggulan';
import Faq from './Faq';
import Layanan from './layanan';




function Homeindex() {

    return (
      <div>
     <HeroSection />
   <Layanan/>
     <Profil />
   
     <Price />
 <Keunggulan />
 <Faq />

      </div>
    );
  }

export default Homeindex;