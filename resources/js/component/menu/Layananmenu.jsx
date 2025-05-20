import React from 'react';
import Layananperbaikan from './Layout/layanan/Layananperbaikan';
import Calltoaction from './Layout/layanan/Calltoaction';


const Layananmenu = () => {

    const layananItems = [
        { id: 1, 
          judul: 'Landing Page Website', 
          text: 'Tingkatkan daya tarik dan performa online bisnis Anda dengan desain landing page profesional. Dirancang khusus untuk konversi, responsif di semua perangkat, dan cepat memikat audiens. Jadikan kesan pertama Anda luar biasa dengan layanan terbaik kami!' 
        },
    
    
        { id: 2, 
          judul: 'Company Profile', 
          text: 'Bangun citra profesional bisnis Anda dengan layanan pembuatan Company Profile kami. Desain menarik, isi informatif, dan sesuai kebutuhan Anda. Cocok untuk memperkenalkan perusahaan kepada klien dan mitra. Tingkatkan kredibilitas dan daya tarik bisnis Anda sekarang!' 
        },
    
        { id: 3, 
          judul: 'E-Commerce', 
          text: 'Tingkatkan bisnis Anda dengan layanan e-commerce kami! Kami menyediakan solusi lengkap untuk toko online, termasuk desain menarik, fitur pembayaran aman, dan integrasi pengiriman. Raih lebih banyak pelanggan dan kelola bisnis Anda dengan mudah. Mulai sekarang, wujudkan impian bisnis online Anda bersama kami!' 
        },
    
        { id: 4, 
          judul: 'Website Desa / Pemerintah', 
          text: 'Solusi digital untuk desa dan pemerintah! Kami menyediakan layanan pembuatan website profesional untuk mempermudah pelayanan publik, informasi, dan transparansi. Bangun komunikasi yang efektif dengan masyarakat melalui platform modern, responsif, dan sesuai kebutuhan Anda. Dukung kemajuan desa Anda sekarang!'
         },
    
         { id: 5, 
          judul: 'Website Invitation', 
          text: 'Layanan Website Invitation kami hadir untuk menciptakan undangan digital yang elegan, interaktif, dan personal. Cocok untuk pernikahan, ulang tahun, atau acara spesial lainnya. Desain menarik, mudah diakses, dan berbagi praktis. Wujudkan momen istimewa Anda dengan sentuhan teknologi terkini!'
         },
    
         { id: 6, 
          judul: 'Website Sekolah', 
          text: 'Layanan Website Sekolah kami membantu sekolah Anda tampil profesional dengan fitur lengkap seperti profil sekolah, e-learning, jadwal, dan pengumuman online. Desain responsif, mudah diakses, dan terintegrasi dengan kebutuhan pendidikan modern. Tingkatkan citra dan efisiensi sekolah Anda sekarang!'
         },
    
         { id: 7, 
          judul: 'Website Custom', 
          text: 'Bangun website impian Anda dengan layanan custom profesional kami! Desain unik, fitur sesuai kebutuhan, dan performa optimal untuk mendukung bisnis Anda. Solusi kreatif dan terintegrasi untuk meningkatkan kehadiran online Anda. Mulai sekarang, wujudkan visi digital Anda bersama kami!'
         },
       
         {id: 8,
          judul: 'Website Aplikasi',
          text: 'Jasa pembuatan website dan aplikasi untuk tugas kuliah! Solusi praktis, cepat, dan terpercaya untuk memenuhi kebutuhan akademik Anda. Dikerjakan oleh profesional dengan hasil berkualitas. Sempurnakan tugas kuliah Anda sekarang! . Dapatkan solusi terbaik dengan harga terjangkau, mendukung hasil belajar Anda lebih optimal! '
         }
       
      ];
 
        return (
            <section className="feature__section  dark:bg-gray-900 dark:text-white ">
            <div className="md:max-w-[1600px] px-7 lg:px-10 py-14 mx-auto ">
     
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:relative text-center">
            <div class="absolute top-5 -left-10  w-[100px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-20 rounded-full blur-3xl"></div>
   <div class="absolute top-10 right-0 w-[200px] h-[100px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-20 rounded-full blur-3xl"></div>


       <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
           <span className="font-inter text-md font-medium  ml-3"
           >Tingkatkan bisnis Anda </span>
           <a  href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" target="_blank" class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600">
               <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path
                       d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                       stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
           </a>
       </div>
       <h1
           className="max-w-2xl mx-auto text-center font-manrope font-bold text-2xl  mb-5 md:text-4xl ">
           Percayakan Website Modern, Responsif, dan SEO-Friendly untuk
           <span className="text-purple-800 pb-8"> Bisnis Anda</span>
       </h1>
       <p className="max-w-2xl md:max-w-4xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-8">
       Butuh website profesional yang menarik pelanggan dan meningkatkan penjualan? Kami menyediakan layanan pembuatan website modern, responsif, dan SEO-friendly untuk membantu bisnis Anda tampil lebih profesional di dunia digital. Dengan desain yang menarik dan teknologi terkini, website Anda akan lebih cepat, aman, dan mudah ditemukan di Google.     </p>
   </div>
              <div className="w-full  lg:w-full shadow-purple-300  isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {layananItems.map(item => (   
                <div key={item.id}
                  className="grid grid-rows-1 p-8 dark:bg-gray-800  bg-white dark:bg-gray-800 shadow shadow-xl dark:border-none rounded-xl gap-y-2 w-full border  hover:inset-shadow-indigo-500  transition-shadow duration-150 ease-linear cursor-pointer  transform md:hover:scale-75">
                  <div className="flex flex-col gap-y-2.5">
                    <h3 className="text-xl dark:text-gray-300 font-bold">Layanan {item.judul}</h3>
                    <p className="text-xl font-semibold"></p>
                  </div>
                  <p className="text-slate-500 dark:text-gray-500 text-base">{item.text}</p>
                  <div className="flex items-center justify-end pt-5 w-full">
                  <a href="javascript:;" className="w-8 h-8 rounded-full flex justify-center items-center bg-purple-600">
               <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path
                       d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                       stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
           </a>        </div>
                </div>
                   ))}
              </div>
         
            </div>


            <Layananperbaikan />
            <Calltoaction />

          </section>


          
        );
   
  
    
};


export default Layananmenu;


