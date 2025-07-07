import React from 'react';



const Footer = () => {
  

   
    return (

        <>
  <footer className="bg-[#1A1D2B]">
    
    <div className="container mx-auto p-0 md:p-8 xl:px-0">
        
        <div className="mx-auto max-w-8xl px-6 pb-10 pt-16">

        <div className="grid grid-cols-12 pb-12 border-b-2 border-gray-700 max-lg:gap-7">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="font-manrope font-bold text-xl md:text-3xl leading-tight text-white mb-2 ">Temukan Info dan Promo Terbaru</h2>
          <p className="text-base text-gray-400 max-w-xl font-normal ">Bergabung dengan komunitas kami. Kami akan memastikan Anda menjadi yang pertama mengetahui berita menarik dan eksklusif dari kami.</p>
       
       
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 items-center">
          <div
            className="flex items-center justify-between bg-gray-800 w-full max-w-full mx-auto lg:mr-0 rounded-full p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400">
            <input type="text"
              className="bg-transparent text-base font-normal text-white placeholder:text-gray-500 focus-within:outline-0"
              placeholder="Your email here..."/>
            <button
              className="py-3 px-7 rounded-full bg-violet-500 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-violet-700 focus-within:bg-violet-700 ">Subscribe</button>
          </div>
                </div>
      </div>
            <div className="xl:grid xl:grid-cols-3 mt-16 xl:gap-8">
                <div className="space-y-4">
                    <div>
                        <a href="/">
                            <div className="flex items-center space-x-3 text-4xl mb-8 font-medium">
                              
                                <h1 className='font-bold dark:text-blue-500 text-blue-500 '>Dev<span className='text-purple-500 '>Klit</span></h1>
                                </div>

                        </a>
                    </div>
                    <div className="max-w-md pr-16 text-lg text-gray-200 font-bold"> Alamat Kantor:
                    </div>
                    <div className="max-w-md pr-16 text-md text-gray-200"> Jl. Basuki Rahmad Rangge, Sukomulyo, Kec. Lamongan, Lamongan - Jawa Timur
                    </div>
                    <div className="flex space-x-2 ">
                        <a href="https://www.linkedin.com/company/devklit-technologhy/" target="_blank" className="text-gray-200 hover:text-gray-200 mt-8">
                            <span className="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                className="h-6 w-6" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="" target="_blank" className="text-gray-200 hover:text-gray-200 mt-8">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
</svg>

                        </a>


                        <a href="" target="_blank" className="text-gray-200 hover:text-gray-200 mt-8">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
</svg>


                        </a>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-md font-semibold leading-6 text-white">Layanan Kami</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/layanan"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Web Sekolah
                                    </a>
                                </li>
                                <li>
                                    <a href="/layanan"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Web E-Commerce
                                    </a>
                                </li>
                                <li>
                                    <a href="/layanan"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Web Landing-Page
                                    </a>
                                </li>
                                <li>
                                    <a href="/layanan"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Web Desa / Pemerintah
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-md font-semibold leading-6 text-white">Paket Website</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/#pembayaran"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Paket Web Basic
                                   
                                    </a>
                                </li>
                                <li>
                                    <a href="/#pembayaran"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Paket Web Profesional
                                    </a>
                                </li>
                                <li>
                                    <a href="/#pembayaran"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Paket Web Custom
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-md font-semibold leading-6 text-white">Menu</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/layanan" className="text-md leading-6 text-gray-300 hover:text-gray-50">Layanan / Promo
                                    </a>
                                </li>
                                <li>
                                    <a href="/template"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Template Website
                                    </a>
                                </li>
                                <li>
                                    <a href="/team"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Join Us Team
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-md font-semibold leading-6 text-white">Perusahan</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/#about"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/team"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                <div className="text-md text-center text-white">
                    Copyright © 2022 - 2025 .
                    <a rel="noopener" href="/">DevKlit
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
    );
}

export default Footer;