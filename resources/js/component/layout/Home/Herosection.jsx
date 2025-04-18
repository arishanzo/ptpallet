import React from 'react';


const HeroSection = () => {

    
   
    return (

        <>

<section className="mx-auto   text-gray-600 body-font  dark:bg-gray-900 md:pt-12 md:pb-20 ">
  
  
    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
      
        <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <a href="/template" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New Template</span> <span className="text-sm font-medium">Pilih Template</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-8 text-4xl md:text-5xl  text-gray-900 font-bold tracking-tight dark:text-white md:max-w-xl sm:text-2xl xl:text-6xl">Jasa Pembuatan Website  <span className='text-purple-800 font-extrabold  dark:text-purple-500 '> Profesional dan SEO-Friendly</span></h1>
        <p className="mb-4 px-4 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl">
            Bangun website impian Anda dengan desain modern, responsif, dan sesuai kebutuhan bisnis Anda. Tingkatkan kehadiran online Anda bersama kami!
            Kami siap membantu Anda memiliki website yang profesional, cepat, dan SEO-friendly untuk meningkatkan brand dan penjualan Anda.
            </p>
       
        <div className="flex p-4 justify-center md:justify-start">
        <a  href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" target="_blank" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Konsultasi</a>
        <button onClick={() => {
    const section = document.getElementById('pembayaran');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
        
        className="flex  max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] dark:bg-white">
            <p className="text-black">Cek Harga Website</p>
        </button>
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/2 w-5/6">    
         
        <img className="object-cover object-center rounded" alt="hero" src="./img/vektor.png" />
        
        </div>
    </div>
                                       </section>



                                       
  <div className="flex flex-col w-full h-full">
    <div x-data x-init="
            $nextTick(() => {
                $refs.content.appendChild($refs.item.cloneNode(true));
            });
        " 
        className="w-full overflow-hidden text-lg italic tracking-wide text-white uppercase sm:text-xs md:text-2xl lg:text-base xl:text-xl"
        >
        <div className="relative w-full  overflow-hidden ">
            <div className="absolute left-0 z-20 w-40 dark:w-full h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div className="absolute right-0 z-20 w-40 dark:w-full h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div x-ref="content" className="flex animate-marquee">
                <div x-ref="item" className="flex items-center justify-center flex-shrink-0 w-full py-2 space-x-2 container-block-02">
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web1.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web2.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web3.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web4.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web5.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web6.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web7.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web8.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web9.jpg" alt=""/>
              
                </div>


               
            </div>
        </div>
    </div>
    <div x-data x-init="
            $nextTick(() => {
                $refs.content.appendChild($refs.item.cloneNode(true));
            });
        " 
        className="w-full mx-auuto overflow-hidden text-lg italic tracking-wide text-white  sm:text-xs md:text-2xl lg:text-base xl:text-xl"
        >
        <div className="relative w-full  overflow-hidden">
            <div className="absolute left-0 z-20 w-full  h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div className="absolute right-0 z-20 w-full h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div x-ref="content" className="flex animate-marquee-reverse">
            <div x-ref="item" className="flex items-center justify-center flex-shrink-0 w-full py-2 space-x-2 container-block-02">
            <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web1.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web2.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web3.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web4.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web5.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web6.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web7.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web8.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web9.jpg" alt=""/>
              
                </div>


    
               
            </div>
        </div>
    </div>
</div>
    </>
    );
}

export default HeroSection;