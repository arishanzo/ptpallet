
import { useState, useEffect,} from "react"
import { getDataService } from "../../../data/dataservices";

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Service = () => {

  
  
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


  
  
    const service = getDataService();
    const [itemPerPage, setItemPerPage] = useState(3);
    const [pageIndex, setPageIndex] = useState(0);
     const totalPages = Math.ceil(service.length / itemPerPage);


     useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemPerPage(1); // Mobile
    } else if (width < 1024) {
      setItemPerPage(2); // Tablet
    } else {
      setItemPerPage(3); // Desktop
    }
  };

  // Panggil saat pertama kali
  handleResize();

  // Tambahkan event listener
  window.addEventListener('resize', handleResize);

  // Bersihkan event listener saat unmount
  return () => window.removeEventListener('resize', handleResize);
}, []);

     const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  
  const start = pageIndex * itemPerPage;
  const dataservice = service.slice(start, start + itemPerPage);

  return (


    
<animated.div style={{ ...styles }}   ref={ref}>
   <div class="md:py-12 text-gray-800 bg-gray-100 dark:text-white md:py-32" id="services">
    <div class="container mx-auto px-4 py-8">
   <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 p-8 text-center">
        <h2 class="font-heading text-4xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Our Services</h2>
        <p class="max-w-[95%] leading-normal text-gray-500 text-muted-foreground sm:text-lg sm:leading-7 md:text-center text-justify">Kami menyediakan layanan pembuatan pallet kayu dan pallet plastik dengan berbagai ukuran, model, dan spesifikasi sesuai kebutuhan Anda. Melayani pembuatan pallet custom, standar ekspor (ISPM 15), maupun lokal, baik dalam jumlah kecil maupun besar.</p>
    </div>

<div className="relative   p-12">
  
  <button
    onClick={prevPage}
    disabled={pageIndex === 0}
    className="disabled:opacity-50 text-white disabled:cursor-not-allowed absolute md:-left-0 left-1 md:-left-10 top-48 md:top-1/2 -translate-y-300 z-10 bg-red-600 shadow-lg rounded-full p-3 hover:bg-red-300 transition-colors"
  >
    ❮
  </button>


        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                 {dataservice.map((service, i) => (
            <div key={i} class="bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300 overflow-hidden cursor-pointer">
                <img src={service.img}
                    alt="Headless UI" class="w-full h-64 object-cover" />
                <div class="p-8 md:p-6">
                    <h2 class="text-2xl font-bold text-blue-600   mb-2">{service.judul}</h2>
                    <p class="text-gray-400  mb-8 two-lines">
                       {service.text}
                    </p>
                    <a href="https://wa.me/081297343101"
                        class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Hubungi</a>
                </div>
            </div>

          
 ))}


        </div>

        <button
            onClick={nextPage}
            disabled={pageIndex === totalPages - 1}
            className="disabled:opacity-50 text-white disabled:cursor-not-allowed absolute md:-right-1 -right-1 top-48 md:top-1/2 -translate-y-300 z-10 bg-red-600 shadow-lg rounded-full p-3 hover:bg-red-300 transition-colors"
        >
            ❯
        </button>


        </div>

          <div className="flex justify-center mt-4 p-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === pageIndex ? 'bg-red-600' : 'bg-red-100'
            }`}
          />
        ))}
      </div>



    </div>
</div>
</animated.div>
   
    
  );
};



export default Service;
