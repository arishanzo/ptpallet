import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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

  

  const layananItems = [
    { id: 1, 
      judul: 'Landing Page Website', 
      text: 'Kami menawarkan jasa pembuatan Landing Page untuk kebutuhan perusahaan anda, yang bisa digunakan untuk promosi' 
    },


    { id: 2, 
      judul: 'Company Profile', 
      text: 'Kami menawarkan website profil anda dengan tujuan branding perusahaan anda untuk mencapai target pasar yang diinginkan,' 
    },

    { id: 3, 
      judul: 'E-Commerce', 
      text: 'Kami menawarkan pembuatan e-commerce atau toko online untuk bisnis anda supaya bisa menjangkau pasar lebih luas lagi.' 
    },

    { id: 4, 
      judul: 'Website Desa / Pemerintah', 
      text: 'Kami menawarkan pembuatan aplikasi pendukung di instansi seperti BUMN / BUMDES / PERANGKAT DESA / PEMERINTAH supaya pekerjaan lebih mudah.'
     },

     { id: 4, 
      judul: 'Website Invitation', 
      text: 'Kami menawarkan website undangan seperti undangan pernikahan, undangan ulang tahun, undangan peresmian dll.'
     },

     { id: 5, 
      judul: 'Website Sekolah', 
      text: 'Kami menawarkan website sekolah seperti PPDB, Manajamen guru, Manajemen penilaian atau Sistem rapot untuk sekolah.'
     },

     { id: 6, 
      judul: 'Website Custom', 
      text: 'Kami menawarkan website custom sesuai keinginan anda dan anda bisa membuat aplikasi sendiri untuk kebutuhan bisnis anda.'
     },
   
     {id: 7,
      judul: 'Website Aplikasi',
      text: 'Kami menawarkan website custom aplikasi untuk kebutuhan tugas sekolah / tugas akhir setiap. Tugas Akhir, tugas pratikum, tugas lainnya'
     }
   
  ];
  
  return (
  
<Slider {...settings} className="flex pt-4 pb-4">
         
        
      {layananItems.map(item => (   
   <div key={item.id} className="px-2"> {/* wrapper item */}
      <div className="max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
  <svg className="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"/>
    </svg>
    <a href="/layanan">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.judul}</h5>
    </a>
    <p className="mb-3 flex flex-wrap font-normal text-gray-500 dark:text-gray-400">{item.text}</p>
   </div>
</div>

))}

       
      </Slider>

   
    
  );
};



export default Carousel;
