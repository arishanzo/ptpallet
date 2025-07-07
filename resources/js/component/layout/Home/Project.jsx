import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Story from './Story';


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Project = () => {

  
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


  const posts = [
    {
      id: 1,
      category: '01',
      imageUrl:
        './img/project/p1.jpg',
      title: "Aplikasi Manajemen Daftar Hadir Karyawan",
      link: '#',
    },
    {
      id: 2,
      category: '02',
      imageUrl:
        './img/project/p2.jpg',
      title: "Aplikasi Go Sewa Mobil",
      link: '#',
    },
    {
      id: 3,
      category: '03',
      imageUrl:
        './img/project/p3.jpg',
      title: 'Aplikasi Manajemen Siswa',
      link: '#',
    },
      {
      id: 4,
      category: '03',
      imageUrl:
        './img/project/p3.jpg',
      title: 'Aplikasi Manajemen Siswa',
      link: '#',
    },
      {
      id: 5,
      category: '03',
      imageUrl:
        './img/project/p3.jpg',
      title: 'Aplikasi Manajemen Siswa',
      link: '#',
    },
      {
      id: 6,
      category: '03',
      imageUrl:
        './img/project/p3.jpg',
      title: 'Aplikasi Manajemen Siswa',
      link: '#',
    },
  ];
   
    return (

        <>
         <animated.div style={{ ...styles }}   ref={ref}>
<div class="flex items-center justify-center py-4 md:py-8 flex-wrap  overflow-x-hidden">
    <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Web Apliaction</button>
   <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Theme</button>
 </div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">

  {posts.map((item, index)=> (

  
    <div key={index} className='transform md:hover:scale-50 transition-all duration-300'>
        <img class="h-auto max-w-full rounded-lg " src={item.imageUrl} alt=""/>
    </div>
   
   ))}
</div>
              
   </animated.div>
      
    </>
    );
}

export default Project;