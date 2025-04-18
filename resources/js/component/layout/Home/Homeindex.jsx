
import React from 'react';

import HeroSection from './Herosection';
import Price from './Price';
import Profil from './Profil';
import Keunggulan from './keunggulan';
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