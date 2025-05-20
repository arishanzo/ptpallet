import React from 'react';

const CardPrice = () => {


  return (
  
    <div className="mx-auto grid max-auto justify-center  md:space-y-0 space-y-2  md:max-w-[1700px]  sm:grid-cols-12  md:grid-cols-9 " >
    
     <div className="rounded-3xl col-span-3 dark:bg-gray-900 dark:shadow-2xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none transform md:hover:scale-110 transition-all duration-300">
        <h3 id="tier-hobby" className="pb-4 text-xl text-base/7 font-semibold text-indigo-600">Paket Basic</h3>
        <span className="text-base text-gray-400">Start From</span>
        <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-gray-500 font-semibold line-through text-xl">Rp 999.000</span> 
        </p>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold dark:text-white tracking-tight text-gray-900">Rp.699.000</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-600">Kami akan install template di Website Anda untuk bisa langsung dipakai secara cepat. Paket ini dirancang untuk individu atau bisnis kecil yang membutuhkan kehadiran online sederhana dan profesional. Cocok untuk portofolio pribadi, profil usaha kecil, atau blog.  Pengerjaan: 3 hari kerja.

</p>
        <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10 ">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Desain Website:
            Menggunakan template standar yang sudah tersedia.
            Disesuaikan dengan logo dan warna bisnis Anda.

          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Jumlah Halaman:
            Maksimal 5 halaman (contoh: Home, About, Services, Contact, Blog/Portfolio).
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Fitur Dasar & Responsif Website:
            Formulir kontak sederhana.
            Galeri gambar.
            Slider untuk menampilkan gambar atau informasi.

          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Hosting & Domain:
            Hosting 1GB (cukup untuk website kecil).
            Domain gratis untuk tahun pertama (contoh: namaanda.com).
          </li>

          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            SEO Basic:
            Optimasi untuk membuat website lebih mudah ditemukan di mesin pencari (meta tag, deskripsi).
          </li>

          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Support:
            Maintenance gratis selama 1 bulan, termasuk perbaikan kecil.

          </li>
        </ul>
        <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Pilih Paket</a>
      </div>


      
      <div className="col-span-3 rounded-3xl bg-gray-800 p-8  shadow-3xl ring-1 ring-gray-900/10 sm:p-10  transform md:hover:scale-110 transition-all duration-300">
        <h3 id="tier-enterprise" className="pb-4 text-base/7 font-semibold text-xl text-indigo-400">Paket Profesional</h3>
        <span className="text-base text-gray-400">Start From</span>
        <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-gray-500 font-semibold line-through text-xl">Rp 2.999.000</span> 
        </p>
        <p className="mt-2 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-white">Rp.1.599.000</span>
        </p>

        <p className="mt-6 text-base/7 text-gray-400">Kami akan install template di Website Anda untuk bisa langsung dipakai secara cepat. Paket ini dirancang untuk bisnis skala menengah atau mereka yang membutuhkan fitur lebih kompleks, termasuk toko online kecil dan desain yang lebih personal. Pengerjaan 3 - 7 hari dan bisa lebih sesuai dengan permintaan client.</p>
        <p className="mt-6 text-base/7 text-gray-300"></p>
        <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Desain Website:
            Desain sepenuhnya disesuaikan template website yang tersedia untuk mencerminkan branding bisnis Anda.
            Tampilan lebih menarik dan interaktif.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Jumlah Halaman:
            Hingga 10 halaman (contoh: Home, About, Services, Contact, Blog, Gallery, Shop).
          </li>
       
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Responsif:
            Desain yang optimal untuk kecepatan dan kompatibilitas di semua perangkat.
          </li>

          
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Hosting & Domain:
            Hosting hingga 5GB (lebih cepat dan mendukung lebih banyak pengunjung).
            Domain gratis 1 tahun, termasuk ekstensi pilihan (contoh: .com, .co.id).

          </li>
     

          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            SEO Advance:
            Optimasi lanjutan untuk meningkatkan visibilitas website di mesin pencari.
          </li>


          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Support:
            Maintenance gratis selama 3 bulan, termasuk pembaruan kecil dan panduan penggunaan.
          </li>
        </ul>
        <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Pilih Paket</a>
      </div>

      <div className="rounded-3xl dark:bg-gray-900  dark:shadow-2xl col-span-3 rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none transform md:hover:scale-110 transition-all duration-300">
        <h3 id="tier-hobby" className="pb-4 text-base/7 text-xl font-semibold text-indigo-600">Paket Custom</h3>
        <span className="text-base text-gray-400">Start From</span>
        <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-gray-500 font-semibold line-through text-xl">Rp 3.999.000</span> 
        </p>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight dark:text-white text-gray-900">Rp.2.599.000</span>
         
        </p>
        <p className="mt-6 text-base/7 text-gray-600">Paket bisa custom sesuai dengan keinginan client. Paket ini dibuat khusus untuk perusahaan besar, portal berita, atau bisnis yang memerlukan fitur kompleks dan performa tinggi. Paket ini memberikan solusi web skala besar dengan desain premium dan fitur canggih. Pengekerjaan 30-60 hari sesuai keinginan client.</p>
        <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Desain Website:
            Desain sepenuhnya custom dengan pendekatan eksklusif.
            Termasuk animasi interaktif dan elemen desain premium.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Jumlah Halaman:
            Tidak ada batasan jumlah halaman.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Hosting & Domain:
            Hosting dengan kapasitas besar (unlimited storage menggunakan VPS atau dedicated server).
            Gratis domain 1 tahun dengan SSL premium untuk keamanan data.
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Responsif:
            Desain yang optimal untuk kecepatan dan kompatibilitas di semua perangkat.
          </li>

          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            SEO Pro:
            Audit SEO menyeluruh dan pengaturan tools seperti Google Analytics & Search Console.
          </li>

          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
            </svg>
            Support:
Maintenance gratis selama 6 bulan, termasuk fitur tambahan dan pengembangan kecil.
          </li>
        </ul>
        <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Pilih Paket</a>
      </div>

    

    </div>

  
    
  );
};



export default CardPrice;
