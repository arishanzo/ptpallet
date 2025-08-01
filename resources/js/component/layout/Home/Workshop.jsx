
import { getDataWorkshop } from "../../../data/dataworkshop";

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


      const settings = {
    dots: true, // Menampilkan titik-titik navigasi
  
    speed: 500, // Kecepatan transisi
    slidesToShow: 3, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digulirkan sekaligus
    autoplay: true, // Memutar otomatis
    autoplaySpeed: 1000, // Kecepatan autoplay dalam milidetik

    responsive: [
      {
        breakpoint: 800, // Untuk layar dengan lebar maksimum 768px
        settings: {
          slidesToShow: 1, // Menampilkan 1 slide
          arrows: false, // Sembunyikan panah navigasi di tampilan mobile
          dots: false, // Tetap tampilkan titik navigasi
        },
      },
      {
        breakpoint: 1104, // Untuk layar dengan lebar maksimum 480px
        settings: {
          slidesToShow: 2, // Tetap tampilkan 1 slide
          arrows: false, // Sembunyikan panah navigasi
          dots: false, // Tampilkan titik navigasi
        },
      },
    ],
   
  };

  return (


    
    
<animated.div style={{ ...styles }}   ref={ref}>
<section class="md:py-20 py-12 p-8 overflow-x-xhidden bg-red-600" id="workshop">
  <div class="container px-4 mx-auto">
    <div class="md:max-w-[80%] mx-auto">
      <div class="flex flex-wrap items-center -mx-5">
        <div class="w-full lg:w-1/2 px-5 mb-20 lg:mb-8">
          <div class="max-w-md">
            <span class="text-lg font-bold text-white">Produsen Pallet Kayu Berkualitas</span>
            <h2 class="mt-12 mb-10 text-5xl font-extrabold  text-gray-200">Our Workshop</h2>
            <p class="mb-8 text-lg text-white">Lokasi Workshop kami teserbar di Daerah Indonesia diantaranya Jawa Barat, Jawa Timur, Jawa Tengah, Bali dan Lampung</p>
            <a class="inline-block px-12 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-200"  href="https://wa.me/081297343101">Hubungi Sekarang</a>
          </div>

       
        </div>

        <div class="w-full lg:w-1/2 ">
        
                  <div class="grid grid-cols-2 top-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 <div class="overflow-hidden rounded-xl shadow-lg ">
 <img
      class="w-full h-64 shadow-md object-cover transform hover:scale-105 transition duration-300"
      src="./img/gallery/workshop.jpg"
      alt="Gambar 1"
     
    />
    </div>

     <div class="overflow-hidden rounded-xl shadow-lg">
 <img
      class="w-full h-full shadow-md object-cover transform hover:scale-105 transition duration-300"
      src="./img/gallery/Picture1.jpg"
      alt="Gambar 1"
     
    />
    </div>
     <div class="overflow-hidden rounded-xl shadow-lg">
 <img
      class="w-full h-64 shadow-md object-cover transform hover:scale-105 transition duration-300"
      src="./img/gallery/Picture6.jpg"
      alt="Gambar 1"
     
    />
    </div>
     <div class="overflow-hidden rounded-xl shadow-lg">
 <img
      class="w-full h-full shadow-md object-cover transform hover:scale-105 transition duration-300"
      src="./img/gallery/Picture3.jpg"
      alt="Gambar 1"
     
    />
    </div>

      </div>  
          {/* <ul>
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
          
           
          </ul> */}
        </div>


   <div class=" py-8 max-w-full ">
   
  
<Slider {...settings} className="flex pt-8 justify-center items-center">
         
        
      {dataworkshop.map(item => (   
   <div key={item.id} className="px-2"> {/* wrapper item */}
      <div className="max-w-md p-8 bg-blue-800 rounded-lg shadow-lg">
   
    <a href={item.link} target="_blank" rel="noopener noreferrer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">{item.judul}</h5>
    </a>
    <p className="mb-3 flex flex-wrap font-normal text-gray-100">{item.alamat}</p>
   </div>
</div>

))}

       
      </Slider>

   
</div>
</div>
    </div>
  </div>
</section>

   </animated.div>
    
  );
};



export default Workshop;
