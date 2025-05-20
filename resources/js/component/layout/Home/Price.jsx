import React from 'react';
import CardPrice from './CardPrice';
import axios from 'axios';

import { useState, useEffect } from 'react';

const Price = () => {
  
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
    

  
  </section>

                          
   
<div className="w-full px-4 p-8 pt-16 pb-16 shadow-2xl md:pt-32 md:pb-32 bg-gray-100 dark:shadow-2xl dark:bg-gray-800 " >
    
    <h2 className="text-xl md:text-4xl font-bold text-center dark:text-gray-300">Metode Pembayaran</h2>
    <p className="pt-6 pb-8 text-base max-w-md pb-16 md:max-w-2xl text-center m-auto dark:text-gray-500 text-justify p-8">
       Kami Mendukung metode pembayaran untuk memudahkan transaksi bersama kami    </p>
    <div
        className="mx-auto w-full max-w-4xl md:space-x-10  justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((item, index) => ( 
       <a key={index} target="_blank" href="">
            <img alt="" className="mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  w-20 md:w-32 md:w-full  mx-auto dark:text-gray-500" src={item.url} />
        </a>

))};
       
    </div>

    
</div>
    </>
    );
}

export default Price;