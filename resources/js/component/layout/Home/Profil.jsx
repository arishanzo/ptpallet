import React from 'react';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Misi from './Misi';

const Profil = () => {

  
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


   
    return (

        <>

        
          <animated.div style={{ ...styles }}   ref={ref}>
      <section class="relative   lg:pt-20   overflow-y-hidden md:py-32" id='profil'>
        <div class="mx-auto sm:px-6 md:py-12 lg:px-8 md:max-w-[1580px] p-8">

            
            <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-4">


                      <div class="xl:col-span-2 relative hover:scale-105 transition duration-300 py-4 mb-8">
  
  <img
    class="object-cover w-full h-auto transform  rounded-r-2xl"
    src="https://lh3.googleusercontent.com/p/AF1QipP45XgIuVtAFMX8xN70MEqEBlG7JvsXNG8Gf0mX=s1360-w1360-h1020-rw"
    alt="Gambar 1"
  />

  <div class="absolute bottom-0 top-32 md:top-56 left-0 w-[500px] bg-white ">
    <h4 class="text-black mt-4 pl-2 md:text-lg font-semibold">Visi Kami: </h4>
    <p className="mb-4 md:mt-4 pl-2 text-xs font-sans sm:p-0 text-gray-500 dark:text-gray-400 md:max-w-[450px] max-w-xs md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">
                    Menjadi perusahaan penyedia palet yang mengutamakan solusi, kwalitas dan kepuasan pelanggan                                    </p>
  </div>
</div>



                <div class="text-center xl:col-span-2 md:ml-24 lg:text-left lg:px-0 md:max-w-full" >
                    <div class="max-w-lg mx-auto sm:max-w-md md:max-w-full">
                           <a href="/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 border-red-100 border-2 border-dotted rounded-full " role="alert">
        <span className="text-sm text-center px-4 py-1.5 mr-3 font-medium">Produsen Pallet Kayu Berkualitas</span> 
              </a>
                        <h1 class="text-3xl justify-start font-bold  leading-tight text-gray-900  pb-2 md:pb-8 sm:text-6xl lg:text-6xl lg:leading-tight font-pj">Tentang Kami PT. Indonesia Pallet Logistik</h1>
                    <p className="mb-4 px-4 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">
                    PT. Indonesia Pallet System adalah perusahaan terkemuka di Indonesia yang berfokus pada penjualan dan penyewaan pallet kayu serta pallet plastik berkualitas tinggi untuk berbagai kebutuhan industri. Kami melayani permintaan dari sektor logistik, manufaktur, pergudangan, ekspor-impor, hingga distribusi retail. Dengan pengalaman bertahun-tahun dan komitmen terhadap kualitas, PT. Indonesia Pallet System menyediakan solusi pallet yang kuat, tahan lama, dan sesuai standar internasional untuk menunjang efisiensi operasional bisnis Anda. Jika Anda mencari 
                    jasa sewa pallet plastik atau tempat jual pallet kayu terpercaya di Indonesia, PT. Indonesia Pallet System adalah pilihan terbaik.   
                   </p>
                    </div>

                    <div class="mt-8 sm:flex sm:items-center sm:justify-start lg:justify-start sm:space-x-5 lg:mt-12">
                    
                    </div>
                </div>

       
                
            </div>
            
        </div>


    </section>
        </animated.div>
     
      <Misi />
    </>
    );
}

export default Profil;