import React from 'react';
import Carousel from './Carousel';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';


const Layanan = () => {
  

     const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
      });
    
      
    
    const styles = useSpring({
      opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(100px)', // ⬆️ Geser dari bawah
        delay: inView ? 300 : 0,
        config: { tension: 170, friction: 20 },
    });
    

    return (

        <>
             
    <section className="relative dark:relative-none bg-gray-100 dark:bg-gray-900 md:p-16   pt-16 md:pt-32  overflow-x-hidden" >
    <div className="absolute inset-x-0 bottom-0 dark:hidden">
        <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>

      <animated.div style={{ ...styles }}   ref={ref}>

    <div className="mx-auto grid max-auto   md:max-w-[1700px]  md:px-16  sm:grid-cols-12  md:grid-cols-12 ">
  
      <div className="content-center text-center sm:pl-16 md:p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-12 md:col-span-6 md:text-start">
      <a href="/layanan" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Layanan</span> <span className="text-sm font-medium">Mengenal Layanan Kami</span> 
            </a>
            <h5 className="text-2xl md:text-5xl font-bold leading-normal tracking-tight dark:text-white md:max-w-2xl sm:text-2xl xl:text-5xl">Layanan <span className='text-purple-800 font-extrabold  dark:text-purple-500 '>Website Kami</span> </h5>
            </div>
      <div className="content-center text-center sm:pl-16 md:p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-4 md:col-span-6 md:text-start">
     
        <h3 className="mb-4 p-8 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">Kami menyediakan solusi lengkap untuk kebutuhan digital Anda melalui layanan pembuatan website yang profesional, inovatif, dan terfokus pada hasil. Berikut adalah deskripsi layanan yang kami tawarkan:</h3>
      </div>
    
      
    </div>
    
    <div className="mx-auto max-auto  md:max-w-[1600px] p-8">
    <Carousel />

</div>
    
    
  </animated.div>

                        
   
   
  </section>
    </>
    );
}

export default Layanan;

