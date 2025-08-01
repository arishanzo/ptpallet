import { FaCode } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Misi = () => {

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

    return(

          <animated.div style={{ ...styles }}   ref={ref}>
       
    <section class="  mb-16  p-8 " id="profil">
    <div class="md:max-w-[80%]  max-w-md mx-auto px-4 sm:px-6 lg:px-8 bg-red-50 rounded-2xl shadow-lg shadow-red-500/50">
        <div className='p-16 px-4 sm:px-6 lg:px-8'>
        <h2 class="text-3xl font-extrabold text-gray-900">Misi Kami</h2>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                   <svg viewBox="0 0 1024 1024" class="icon w-7 h-7" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M670.5 471.7c-7.1-3.1-14.2-5.9-21.4-8.5 49.8-40.3 81.6-101.8 81.6-170.6 0-121-98.4-219.4-219.4-219.4s-219.4 98.4-219.4 219.4c0 68.9 31.9 130.5 81.7 170.7C219.4 519.6 109 667.8 109 841.3h73.1c0-181.5 147.7-329.1 329.1-329.1 45.3 0 89.1 9 130.2 26.7l29.1-67.2zM511.3 146.3c80.7 0 146.3 65.6 146.3 146.3S592 438.9 511.3 438.9 365 373.2 365 292.6s65.6-146.3 146.3-146.3zM612.5 636.5c0 10.2 5.6 19.5 14.6 24.2l128 67.6c4 2.1 8.4 3.2 12.8 3.2s8.8-1.1 12.8-3.2l128-67.6c9-4.8 14.6-14.1 14.6-24.2s-5.6-19.5-14.6-24.2l-128-67.7c-8-4.2-17.6-4.2-25.6 0l-128 67.7c-9 4.7-14.6 14-14.6 24.2z m155.4-36.6l69.3 36.6-69.3 36.6-69.3-36.6 69.3-36.6z" fill="#ffffff"></path><path d="M767.9 763.4l-147-77.7-25.6 48.5 172.6 91.2 171.9-90.8-25.6-48.5z" fill="#ffffff"></path><path d="M767.9 851.4l-147-77.6-25.6 48.4 172.6 91.3 171.3-90.6-25.6-48.5z" fill="#ffffff"></path></g></svg>

                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Memahami Kebutuhan Pelanggan</h3>
                    <p class="mt-2 text-base text-gray-500">Kami berkomitmen untuk selalu mendengarkan dan memahami setiap masalah serta kebutuhan pelanggan secara menyeluruh, 
                        guna memberikan solusi terbaik yang sesuai dengan tantangan dan harapan mereka."</p>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                   <svg viewBox="0 0 24 24" className='icon w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z"></path> </g> </g></svg>

                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Menawarkan produk, jasa dengan solusi yang tepat</h3>
                    <p class="mt-2 text-base text-gray-500">
                        Kami berkomitmen untuk menawarkan produk dan jasa terbaik yang dirancang sebagai solusi tepat guna, efisien, dan sesuai dengan kebutuhan pelanggan di berbagai sektor industri.
                    </p>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                 <svg viewBox="0 0 1024 1024" fill="#ffffff" class="icon w-6 -h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M678.584675 765.172506v157.995691l75.697852 31.505938V723.768586a429.379161 429.379161 0 0 1-75.697852 41.40392zM269.717473 723.768586V953.098138l75.697852-31.505938v-156.419694a429.309162 429.309162 0 0 1-75.697852-41.40392zM511.999 798.78444a428.955162 428.955162 0 0 1-105.993793-13.241974v238.457534L511.999 979.886086 617.992793 1023.998V785.542466A429.025162 429.025162 0 0 1 511.999 798.78444zM511.999 0C308.479398 0 142.903721 165.575677 142.903721 369.097279S308.479398 738.192558 511.999 738.192558s369.097279-165.575677 369.097279-369.097279S715.520602 0 511.999 0z m0 660.198711c-161.345685 0-292.611428-131.265744-292.611428-292.611429 0-161.347685 131.265744-292.613428 292.611428-292.613428s292.611428 131.265744 292.611428 292.613428c0 161.347685-131.263744 292.611428-292.611428 292.611429zM511.999 135.563735c-127.93575 0-232.021547 104.083797-232.021547 232.023547S384.06325 599.606829 511.999 599.606829s232.021547-104.083797 232.021547-232.021547c0-127.93775-104.083797-232.021547-232.021547-232.021547zM607.360814 502.999018L511.999 452.865115 416.639186 502.999018l18.211965-106.183793-77.14785-75.199853 106.617792-15.49397L511.999 209.509591l47.679907 96.611811 106.617792 15.49397-77.14785 75.199853 18.211965 106.183793z"></path></g></svg>
                </div>
                <div class="mt-5">
                    <h3 class="text-lg font-medium text-gray-900">Memberikan produk dan jasa dengan kwalitas terbaik</h3>
                    <p class="mt-2 text-base text-gray-500">Kami menyediakan produk dan jasa berkualitas tinggi yang dirancang untuk memenuhi kebutuhan pelanggan secara optimal, dengan standar layanan profesional, terpercaya, dan fokus pada kepuasan pelanggan. </p>                </div>
            </div>
        </div>
</div>
    </div>
</section>
   </animated.div>
    )

};

export default Misi;