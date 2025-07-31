
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Carousel from './Carousel';

const HeroSection = () => {


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
 <section class="relative bg-red-600  py-12  sm:py-16 lg:pt-20    lg:pb-36" id='home'>
  
            <animated.div style={{ ...styles }}   ref={ref}>
        <div class="mx-auto sm:px-6 md:py-12 py-4 lg:px-8 md:max-w-[1580px] ">
            <div class="grid grid-cols-1 gap-y-8  lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-4">
                <div class="text-center xl:col-span-2 lg:text-left lg:px-0 md:max-w-[600px]" >
                    <div class="max-w-full p-8 md:p-0 mx-auto sm:max-w-md md:max-w-full">
                    
    <a href="/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-100 border-red-100 border-2 border-dotted rounded-full " role="alert">
        <span className="text-sm text-center px-4 py-1.5 mr-3 font-medium">Produsen Pallet Kayu Berkualitas</span> 
              </a>
               <img class="block md:h-60 h-46 p-8 md:pl-0 w-auto" src="./img/logo/logoipl.png" alt="Logo" />
 
     <h1 class="text-5xl  justify-start font-bold  leading-tight text-gray-100 md:pt-8 pb-2 md:pb-8 sm:text-6xl lg:text-6xl lg:leading-tight font-pj">PT. Indonesia Pallet Logistik</h1>
                 
 
                        <h1 class="text-2xl justify-start font-semibold  leading-tight text-red-100  pb-2 md:pb-8 sm:text-4xl lg:text-4xl lg:leading-tight font-pj">The Best Solution Business Partner Support</h1>
                    <p className=" px-4 font-sans sm:p-0  text-red-200 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">
                     Kami membangun kepercayaan dengan menyediakan pallet kayu berkualitas, tahan lama, dan sesuai standar ekspor, serta menghadirkan solusi logistik yang tepat guna untuk mendukung efisiensi operasional dan kebutuhan pengemasan perusahaan Anda di berbagai sektor industri..         </p>
                      
                    </div>

                    <div class=" sm:flex sm:items-center sm:justify-start lg:justify-start sm:space-x-5 lg:mt-12">
                        <a
                            href="https://wa.me/081297343101"
                            title=""
                            class="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-blue-800"
                            role="button"
                        >
                            Hubungi
                        </a>
                        
                        <button
                            class="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 shadow shadow-xl text-white sm:mt-0 font-pj justify-center rounded-xl focus:outline-none  hover:bg-red-700 focus:bg-red-700"
                            onClick={() => {
                            const section = document.getElementById('services');
                            if (section) section.scrollIntoView({ behavior: 'smooth' });
                          }}
                          >
                         
                            Our Service
                        </button>
                    </div>
                </div>

                <div class="xl:col-span-2 p-8 ">

                  
                  <div class="grid grid-cols-2 top-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
  <div class=" overflow-hidden rounded-xl text-center sshadow-lg">
    <img
      class="w-full h-64  object-cover transform hover:scale-105 transition duration-300"
      src="https://lh3.googleusercontent.com/p/AF1QipP45XgIuVtAFMX8xN70MEqEBlG7JvsXNG8Gf0mX=s1360-w1360-h1020-rw"
      alt="Gambar 1"
    />
  </div>

  <div class="overflow-hidden  rounded-xl shadow-lg">
    <img
      class="w-full h-64 object-cover transform hover:scale-105 transition duration-300 opacity-40"
      src="https://lh3.googleusercontent.com/p/AF1QipMMwxSRN3yQ2LQgAVIHaA8eYlwssoBRyfcZhdnu=s1360-w1360-h1020-rw"
      alt="Gambar 2"
    />
  </div>

  <div class="overflow-hidden rounded-xl shadow-lg opacity-40">
    <img
      class="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
      src="https://lh3.googleusercontent.com/p/AF1QipMe_vTw1n3bf7UvIEmE6nDVXuehfwuUP4AOma_d=s1360-w1360-h1020-rw"
      alt="Gambar 3"
    />
  </div>

   <div class=" overflow-hidden rounded-xl shadow-lg">
    <img
      class="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
      src="https://lh3.googleusercontent.com/p/AF1QipMBF_889qlOL5ioS7NxQFqI9WpPAPcYQtmf0CPs=s1360-w1360-h1020-rw"
      alt="Gambar 1"
    />
  </div>

  
</div>
                
                
                </div>
                
            </div>
            
 
        </div>



</animated.div>
    </section>
<Carousel />
     
    </>
    );
}



export default HeroSection;