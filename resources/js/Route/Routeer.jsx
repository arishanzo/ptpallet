import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Homeindex from '../component/layout/Home/Homeindex';



const Routeer = () => {
 
    

    return(

<Routes>
        <Route path="/" element={<Homeindex />}/>
      
      </Routes>

        
    );


}

export default Routeer;