
import React from 'react';
import HeroSection from './Herosection';
import Profil from './Profil';
import Service from './Service';
import Workshop from './Workshop';
import Gallery from './Gallery';
import Faq from './Faq';
import Contact from './Contact';
import Chat from './Chat';




function Homeindex() {

    return (
      <div>
        <Chat/>
     <HeroSection />
        <Profil />
  <Service />
  <Workshop />
  <Gallery />
<Faq />
<Contact />
      </div>
    );
  }

export default Homeindex;