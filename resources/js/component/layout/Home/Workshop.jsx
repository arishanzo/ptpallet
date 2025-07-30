
import { getDataWorkshop } from "../../../data/dataworkshop";

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Workshop = () => {
  
  
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


    const dataworkshop = getDataWorkshop();

  return (


    
    
<animated.div style={{ ...styles }}   ref={ref}>
<section class="py-20 p-8 overflow-x-xhidden bg-red-600" id="workshop">
  <div class="container px-4 mx-auto">
    <div class="md:max-w-[1580px] mx-auto">
      <div class="flex flex-wrap items-center -mx-5">
        <div class="w-full lg:w-1/3 px-5 mb-20 lg:mb-0">
          <div class="max-w-md">
            <span class="text-lg font-bold text-white">Produsen Pallet Kayu Berkualitas</span>
            <h2 class="mt-12 mb-10 text-5xl font-extrabold  text-gray-200">Our Workshop</h2>
            <p class="mb-16 text-lg text-white">Lokasi Workshop kami teserbar di Daerah Indonesia diantaranya Jawa Barat, Jawa Timur, Jawa Tengah, Bali dan Lampung</p>
            <a class="inline-block px-12 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-200"  href="https://wa.me/081297343101">Hubungi Sekarang</a>
          </div>
        </div>

        <div class="w-full lg:w-1/3 px-5">
          <ul>
            {dataworkshop.slice(0,3).map((item, index) => (
              <li key={index} class="flex md:h-40 h-auto py-8 md:mb-8 border-b border-red-100 justify-center items-center">
                <div class="mr-8">
                  <span class="flex justify-center items-center w-14 h-14 bg-red-500 text-lg font-bold rounded-full text-gray-100">{item.id}</span>
                </div>
                <div class="max-w-xs">
                  <h3 class="mb-2 text-lg font-bold text-gray-300">{item.judul}</h3>
                  <p class="text-lg text-gray-100">{item.alamat}</p>
                </div>
              </li>
            ))}
          
           
          </ul>
        </div>

 <div class="w-full lg:w-1/3 px-5">
          <ul>
            {dataworkshop.slice(3,6).map((item, index) => (
           <li key={index} class="flex md:h-40 h-auto py-8 md:mb-8 border-b border-red-100">
                <div class="mr-8">
                  <span class="flex justify-center items-center w-14 h-14 bg-red-500 text-lg font-bold rounded-full text-gray-300">{item.id}</span>
                </div>
                <div class="max-w-xs">
                  <h3 class="mb-2 text-lg font-bold text-gray-200">{item.judul}</h3>
                  <p class="text-lg text-gray-100">{item.alamat}</p>
                </div>
              </li>
            ))}
          
           
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>

   </animated.div>
    
  );
};



export default Workshop;
