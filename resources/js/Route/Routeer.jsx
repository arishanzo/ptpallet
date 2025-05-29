import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layananmenu from '../component/menu/Layananmenu';
import Template from '../component/menu/Template';
import Homeindex from '../component/layout/Home/Homeindex';
import Team from '../component/menu/Team';
import AsistenAi from '../component/menu/AsistenAi';
import ChatAi from '../component/menu/Layout/AsistenAi/ChatAi';



const Routeer = () => {
 
    

    return(

<Routes>
        <Route path="/" element={<Homeindex />}/>
        <Route path="/layanan" element={<Layananmenu/>} />
        <Route path="/template" element={<Template />} />
         <Route path="/asistenai" element={<AsistenAi/>} />
         <Route path="/asistenai/chatai" element={<ChatAi/>} />
        <Route path="/team" element={<Team/>} />
      
      </Routes>

        
    );


}

export default Routeer;