import React from 'react';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';


const Faq = () => {

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

      <section class="sm:py-10 bg-blue-900 overflow-hidden" id="faq">
        <div class="container mx-auto px-4">
            <div class="relative py-16 px-8 bg-yelloww overflow-hidden rounded-3xl">
                <div class="relative z-10 md:max-w-7xl mx-auto">
                    <div class="md:max-w-xl mb-10"><span class="inline-block mb-5 text-md text-mygray text-white font-bold uppercase tracking-widest">F.A.Q</span>
                        <h2 class="font-heading text-4xl    text-mygray text-4xl lg:text-5xl text-red-400 font-bold font-heading">
                            Frequently Asked Questions</h2>
                    </div>
                    <div class="flex flex-wrap -m-3">
                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">PALLET YANG BISA DI REPAIR ?
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 text-lg font-medium">Papan atas rusak/hilang/patah, Stringer samping rusak/hilang/patah
                                    ,Balok rusak/hilang/patah
                                    ,Papan bawah patah/rusak/hilang

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">Kemasan Product apa yang diletakkan di atas palet dalam bentuk apa? 
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 font-medium">Karung, drum besi, drum plastik, kotak kardus, wadah plastik, atau kemasan khusus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">Kegunaan palet dalam aplikasi penumpukan atau rak?
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 font-medium">Pallet digunakan untuk stacking maupun racking sesuai kebutuhan pelanggan dan jenis gudang penyimpanan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">Berapa suhu penyimpanannya ( kurang dari -10°C, -10 hingga 10°C, lebih dari 10°C ) ?
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 font-medium">Penyimpanan tersedia pada suhu:

                                        kurang dari -10°C (frozen storage)

                                        -10 to 10°C (chilled)

                                        lebih dari 10°C (ambient/normal temperature)
                                        Kami menyesuaikan penyimpanan sesuai kebutuhan produk.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">Berapa kuantitas dan waktu pengiriman (Pengiriman sebagian tersedia)?
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 font-medium">Kuantitas dan waktu pengiriman fleksibel. Pengiriman parsial (partial shipment) tersedia berdasarkan jadwal dan volume permintaan. Silakan konfirmasi jumlah pasti untuk estimasi waktu.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <div class="p-10 bg-blue-700 rounded-3xl">
                                <div class="flex flex-wrap -m-2">
                                    <div class="w-full md:w-1/2 p-2">
                                        <h3 class="font-heading text-xl text-gray-200 font-inter font-bold">
                                          Ke kota dan negara mana pengirimannya?
                                        </h3>
                                    </div>
                                    <div class="w-full md:w-1/2 p-2">
                                        <p class="text-blue-200 font-medium"> Di kirim dari Jl. Bantar Jati, Bantar Jati, Kec. Klapanunggal, Kabupaten Bogor, Jawa Barat 16710 Indonesia.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       



                    </div>
                </div>
            </div>

        </div>


    </section>
     
    );
}

export default Faq;