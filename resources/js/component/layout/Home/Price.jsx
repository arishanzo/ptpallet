import React from 'react';
import CardPrice from './CardPrice';
import axios from 'axios';

import { useState, useEffect } from 'react';


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import MetodePembayaran from './MetodePembayaran';

const Price = () => {

       const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
      });
    
      
    
    const styles = useSpring({
      opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)', // ⬆️ Geser dari bawah
        delay: inView ? 300 : 0,
        config: { tension: 170, friction: 20 },
    });
    
  
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch data gambar dari API backend
        axios.get('http://127.0.0.1:8000/api/img')
            .then(response => {
                setImages(response.data); // Simpan data gambar di state
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }, []);
    
    return (

        <>
        
    <section className=" dark:bg-gray-900 bg-gray-100 p-4 pt-16 md:pt-32  md:pb-32 " id='pembayaran'>
      
                       <animated.div style={{ ...styles }}   ref={ref}>
    <div className="mx-auto grid max-auto  md:max-w-[1700px]  md:px-16  sm:grid-cols-12  md:grid-cols-12 ">
      
      <div className="content-center text-center sm:pl-16 p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-12 md:col-span-6 md:text-start">
      <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Price</span> <span className="text-sm font-medium">Mengenal Harga Kami</span> 
            </a>
        <h5 className=" text-2xl md:text-5xl font-bold leading-normal tracking-tight dark:text-white md:max-w-2xl sm:text-2xl xl:text-5xl">Harga <span className='text-purple-800 font-extrabold  dark:text-purple-500 '>Website Kami</span></h5>
      </div>
      <div className="content-center text-center sm:pl-16 md:p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-4 md:col-span-6 md:text-start">
     
        <h3 className=" p-8 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">Kami menyediakan solusi lengkap untuk kebutuhan digital Anda melalui Harga pembuatan website yang profesional, inovatif, dan terfokus pada hasil. Berikut adalah deskripsi Price yang kami tawarkan:</h3>
      </div>
    
      
    </div>
    
    <div className="mx-auto max-auto  md:max-w-[1600px] p-8  ">
    <CardPrice/>


    

</div>
    

  </animated.div>
  </section>

             
  <MetodePembayaran />             
   
    </>
    
    );
}

export default Price;