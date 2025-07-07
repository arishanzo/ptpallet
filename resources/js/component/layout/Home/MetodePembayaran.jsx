
import axios from 'axios';

import { useState, useEffect } from 'react';


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const MetodePembayaran = () => {

       const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
      });
    
      
    
    const styles = useSpring({
      opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(50px)', // ⬆️ Geser dari bawah
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
        
                     
   
<div className="w-full px-4 p-8 pt-16 pb-16 shadow-2xl   md:p-16  bg-gray-100 dark:shadow-2xl dark:bg-purple-900 dark:shadow-purple-900 overflow-x-hidden" >
       <animated.div style={{ ...styles }}   ref={ref}>       
   
    <h2 className="text-xl md:text-4xl font-bold text-center dark:text-gray-100">Metode Pembayaran</h2>
    <p className="pt-6 pb-8 text-base max-w-md pb-16 md:max-w-2xl text-center m-auto dark:text-gray-400 text-justify p-8">
       Kami Mendukung metode pembayaran untuk memudahkan transaksi bersama kami    </p>
    <div
        className="mx-auto w-full max-w-4xl md:space-x-10  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((item, index) => ( 
       <a key={index} target="_blank" href="">
            <img alt="" className="mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  w-20 md:w-32 md:w-full dark:bg-gray-200 dark:p-2 dark:shadow-xl  mx-auto dark:text-gray-500" src={item.url} />
        </a>

))};
       
    </div>

</animated.div>
    
</div>
    </>
    
    );
}

export default MetodePembayaran;