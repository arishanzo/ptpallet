import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Story from './Story';


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Project from './Project';

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
           
    <section className=" dark:bg-gray-900  pt-16 pb-16    " id='about'>
   
            <animated.div style={{ ...styles }}   ref={ref}>
    <div className="mx-auto grid max-auto  md:max-w-[1700px]  md:px-16 md:p-16  sm:grid-cols-12 md:pb-20 md:grid-cols-12 ">

      

    <div className="block sm:col-span-7 justify-center md:col-span-6   justify-self-between  md:flex">
      <DotLottieReact
      src="https://lottie.host/af4bf1df-0b26-4cf4-88c3-7372ca4cfd73/OQDMXPCmSp.lottie"
      loop
      autoplay
    />

           </div>

           

      <div className="content-center text-center sm:pl-16 p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-4 md:col-span-6 md:text-start">
      <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Profil</span> <span className="text-sm font-medium">Lebih Dekat Dengan Kami</span> 
            </a>
        <h5 className="mb-4 md:mb-8 text-2xl md:text-5xl font-bold leading-normal tracking-tight dark:text-white md:max-w-2xl sm:text-2xl xl:text-5xl">Profil <span className='text-purple-800 font-extrabold  dark:text-purple-500 '>Perusahaan Kami</span> </h5>
        <p className="p-2 font-sans mb-8 sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">DevKlit adalah penyedia layanan pembuatan website profesional yang berkomitmen untuk membantu bisnis dan individu mengembangkan kehadiran digital yang kuat dan efektif. Dengan tim ahli yang berpengalaman dalam desain, pengembangan, dan teknologi terkini, kami menawarkan solusi website yang tidak hanya menarik secara visual tetapi juga fungsional dan sesuai kebutuhan pelanggan.</p>
      
   <span class="font-bold font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-sm  lg:mb-5 lg:text-sm">Perusahaan Kami Telah Membantu Sebanyak:</span>
        <div class="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-2 xl:grid-cols-3">
   <div class="flex items-center shadow justify-between p-4 bg-white dark:bg-gray-800 rounded-md">

 
       <div>
           <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
           Perusahaan
           </span>
           <h5 class="text-2xl font-semibold dark:text-gray-200">100+</h5>
         
       </div>
       <div>
           <span>
               

                               <svg  class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path></g></svg>

           </span>
       </div>
   </div>

   <div class="flex items-center shadow justify-between p-4 bg-white dark:bg-gray-800 rounded-md">
       <div>
       <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
           Kepuasaan
           </span>
           <h5 class="text-2xl font-semibold dark:text-gray-200">99+</h5>
         
       </div>
       <div>
           <span>
               <svg class="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                   </path>
               </svg>
           </span>
       </div>
   </div>

   <div class="flex items-center shadow justify-between p-4 bg-white dark:bg-gray-800 rounded-md">
       <div>
       <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
          SEO Search
           </span>
           <h5 class="text-2xl font-semibold dark:text-gray-200">98%</h5>
         
       </div>
       <div>
           <span>
               <svg class="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
               </svg>
           </span>
       </div>
   </div>


</div>

      </div>

   </div>
   
    <Story />           

    <div className="max-w-screen-xl md:max-w-[1700px] pt-4  mx-auto p-5 md:p-24 sm:p-10   ">

    <div class=" p-8 flex justify-between text-sm ">
        <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            
            <a href="#" class="font-semibold inline-block">Project</a>
        </div>
        <a href="#" className='dark:text-gray-600'>See All</a>
    </div>

<Project/>


    </div>
              
   </animated.div>
      
   
  </section>
    </>
    );
}

export default Profil;