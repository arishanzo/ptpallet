import React from 'react';


const Faq = () => {


    
  const faqdata = [
    { id: 1, 
      judul: 'Apa saja jenis website yang bisa dibuat?', 
      text: '  Kami dapat membuat berbagai jenis website, termasuk: Website perusahaan (corporate website), E-commerce (toko online), Landing page untuk promosi produk, Blog atau website pribadi, Website edukasi atau kursus online' 
    },


    { id: 2, 
      judul: 'Berapa lama proses pembuatan website?', 
      text: 'Durasi pembuatan website tergantung pada kompleksitas dan kebutuhan proyek. Untuk website sederhana menggunakan template, biasanya memakan waktu sekitar 3-5 hari. Sedangkan untuk website kompleks, seperti e-commerce atau website dengan fitur khusus, bisa memakan waktu 3–6 minggu atau lebih.' 
    },

    { id: 3, 
      judul: 'Apakah harga termasuk domain dan hosting?', 
      text: 'Kami menawarkan paket yang mencakup domain dan hosting tahun pertama. Setelah itu, biaya perpanjangan domain dan hosting akan ditanggung oleh klien sesuai kebutuhan kecuali ada promo terentu kami memberikan perpanjangan gratis.'
    },

    { id: 4, 
      judul: 'Apakah saya bisa mengelola website sendiri setelah selesai dibuat?', 
      text: 'Tentu saja! Kami menyediakan pelatihan singkat atau panduan untuk mengelola website, seperti mengunggah konten, memperbarui informasi, atau mengelola produk di toko online Anda.'
     },

     { id: 5, 
      judul: 'Apakah website yang dibuat sudah mobile-friendly?', 
      text: 'Ya, semua website yang kami buat dirancang untuk responsif, sehingga tampilannya optimal di perangkat desktop, tablet, maupun ponsel.'
     },

     { id: 6, 
      judul: 'Apakah ada garansi setelah website selesai dibuat?', 
      text: 'Kami memberikan garansi selama 1 bulan setelah website selesai untuk perbaikan bug atau error. Setelah itu, kami juga menawarkan paket pemeliharaan bulanan jika Anda membutuhkan bantuan lebih lanjut.'
     },

     { id: 7, 
      judul: 'Apakah kalian juga menyediakan jasa redesign website lama?', 
      text: 'Ya, kami bisa membantu memperbarui atau mendesain ulang website lama Anda agar tampil lebih modern, cepat, dan sesuai kebutuhan bisnis Anda saat ini.'
     },
   
     {id: 8,
      judul: 'Bagaimana cara memulai proyek pembuatan website?',
      text: 'Anda bisa menghubungi kami melalui email, WhatsApp, atau formulir kontak di website kami. Kami akan menjadwalkan konsultasi awal untuk memahami kebutuhan Anda dan memberikan penawaran terbaik.'
     }
   
  ];
  
   
    return (

        <div className="py-4 shadow-2xl bg-purple-900  bg-center bg-cover dark:bg-gray-800">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
    
            <div className="text-center md:mt-32">
                <p className="mt-4 text-lg leading-7 text-gray-100 font-regular">
                    F.A.Q
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-purple-200">
                    Frequently Asked <span className="text-purple-400">Questions</span>
                </h3>
   
            </div>
    
            <div className="">
       
            <div className="md:mb-32 bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 divide-y  dark:divide-gray-700 divide-gray-200 rounded-xl m-12">
            {faqdata.map(item => (   
                 <div key={item.id}>
    <details className="p-6 group" name='fag'>
        <summary className="flex items-center justify-between cursor-pointer">
       
            <h5 className="text-lg font-medium text-gray-900 dark:text-gray-400">
            {item.judul}
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 dark:text-white group-open:opacity-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 dark:text-white group-open:opacity-100" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </summary>

        <p className="mt-4 leading-relaxed  text-gray-700 dark:text-gray-600">
        {item.text}        </p>
    </details>
    </div>
))}

</div>


            </div>
    
        </div>

        
    </div>
     
    );
}

export default Faq;