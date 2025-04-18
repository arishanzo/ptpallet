import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Profil = () => {

  const posts = [
    {
      id: 1,
      category: '01',
      date: { day: '25', month: 'May' },
      imageUrl:
        './img/project/p1.jpg',
      title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
      link: '#',
    },
    {
      id: 2,
      category: '02',
      date: { day: '10', month: 'Mar' },
      imageUrl:
        './img/project/p2.jpg',
      title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
      link: '#',
    },
    {
      id: 3,
      category: '03',
      date: { day: '20', month: 'Jan' },
      imageUrl:
        './img/project/p3.jpg',
      title: 'Middle East Participants Gather In Warsaw',
      link: '#',
    },
  ];
   
    return (

        <>
        
    <section className=" dark:bg-gray-900 md:pt-32 pt-16 pb-16 md:pb-32    " id='about'>
   
      
    <div className="mx-auto grid max-auto  md:max-w-[1700px]  md:px-16  sm:grid-cols-12  md:grid-cols-12 ">

      

    <div className="block sm:col-span-7 justify-center md:col-span-6   justify-self-between  md:flex">
    <DotLottieReact
      src="https://lottie.host/9142a6fb-4291-4849-a784-239b24a400a7/51GA6rwnfd.lottie"
      loop
      autoplay
      color='white'
    />

           </div>

           

      <div className="content-center text-center sm:pl-16 p-8 md:justify-self-start sm:text-sm sm:text-start sm:col-span-4 md:col-span-6 md:text-start">
      <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Profil</span> <span className="text-sm font-medium">Lebih Dekat Dengan Kami</span> 
            </a>
        <h5 className="mb-4 md:mb-8 text-2xl md:text-5xl font-bold leading-normal tracking-tight dark:text-white md:max-w-2xl sm:text-2xl xl:text-6xl">Profil <span className='text-purple-800 font-extrabold  dark:text-purple-500 '>Perusahaan Kami</span> </h5>
        <p className="p-4 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl">DevKlit adalah penyedia layanan pembuatan website profesional yang berkomitmen untuk membantu bisnis dan individu mengembangkan kehadiran digital yang kuat dan efektif. Dengan tim ahli yang berpengalaman dalam desain, pengembangan, dan teknologi terkini, kami menawarkan solusi website yang tidak hanya menarik secara visual tetapi juga fungsional dan sesuai kebutuhan pelanggan.</p>
      
   <span class="p-4 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-sm  lg:mb-5 lg:text-sm">Perusahaan Kami Telah Membantu Sebanyak:</span>
        <div class="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-2 xl:grid-cols-3">
   <div class="flex items-center shadow justify-between p-4 bg-white rounded-md">

 
       <div>
           <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
           Perusahaan
           </span>
           <h5 class="text-2xl font-semibold">100+</h5>
         
       </div>
       <div>
           <span>
               

                               <svg  class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path></g></svg>

           </span>
       </div>
   </div>

   <div class="flex items-center shadow justify-between p-4 bg-white rounded-md">
       <div>
       <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
           Kepuasaan
           </span>
           <h5 class="text-2xl font-semibold">99+</h5>
         
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

   <div class="flex items-center shadow justify-between p-4 bg-white rounded-md">
       <div>
       <span class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
          SEO Search
           </span>
           <h5 class="text-2xl font-semibold">98%</h5>
         
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
   

    <div className="max-w-screen-xl md:max-w-[1700px] pt-4  mx-auto p-5 sm:p-10   ">

    <div class="border-b mb-5 flex justify-between text-sm ">
        <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            
            <a href="#" class="font-semibold inline-block">Project</a>
        </div>
        <a href="#">See All</a>
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:pt-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          >
            {/* gradient overlay */}
            <div className="absolute inset-0 mt-32 bg-gradient-to-b from-transparent to-purple-500" />

            {/* badge + date */}
            <div className="absolute top-0 left-0 right-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href={post.link}
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                {post.category}
              </a>
              <div className="text-white flex flex-col items-end">
                <span className="text-3xl font-semibold leading-none">
                  {post.date.day}
                </span>
                <span className="-mt-3">{post.date.month}</span>
              </div>
            </div>

            {/* title */}
            <main className="p-5 z-10">
              <a
                href={post.link}
                className="text-md tracking-tight font-medium leading-7 text-white hover:underline"
              >
                {post.title}
              </a>
            </main>
          </div>
        ))}
      </div>
    </div>
                        
   
   
  </section>
    </>
    );
}

export default Profil;