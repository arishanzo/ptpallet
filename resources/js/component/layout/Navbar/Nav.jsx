import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Routeer from '../../../Route/Routeer';



const Nav = () => {
 // State to manage the navbar's visibility
   const [nav, setNav] = useState(false);

   // Toggle function to handle the navbar's display
   const handleNav = () => {
     setNav(!nav);
   };
 
   const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Layanan', link: '/layanan' },
    { id: 3, text: 'Template Website', link: '/template' }, 
    { id: 4, text: 'AI Asisten', link: '/asistenai' },
    { id: 5, text: 'Join Our Team', link: '/team' },
    
   
  ];
  const [dark, setDark] = React.useState(false);
  
      const darkModeHandler = () => {
          setDark(!dark);
          document.body.classList.toggle("dark");
      }

      const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return(
<Router>
<nav className='p-2 md:p-10 bg-white  dark:bg-gray-900  show sticky top-0 z-50 w-full '>
    <div className={scroll ?'mx-auto md:max-w-[1700px] transition-all duration-300 bg-white dark:bg-gray-900 dark:text-white flex items-center justify-between px-6 py-4' : 'transition-all duration-300 mx-auto md:max-w-[1700px] bg-white dark:bg-gray-900 dark:text-white  shadow-purple-300 md:shadow-purple-300 dark:bg-dark-500  shadow-md mt-8  dark:text-white  justify-between items-center dark:shadow-xl md:shadow-2xl flex items-center rounded-full  p-4 md:p-8  text-black'}>
  
   <a href="/" class="md:pl-12 flex items-center space-x-3 rtl:space-x-reverse"> 
       <h1 className='font-bold md:text-4xl dark:text-blue-500 text-blue-500 '>Dev<span className='text-purple-500 '>Klit</span></h1>
   </a>
  
  <div class="flex flex-wrap md:order-2 space-x-3 md:pe-12 hidden w-full md:flex md:w-auto md:order-1">
      <button onClick={()=> darkModeHandler()} class="relative flex h-11 w-full items-center justify-center p-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                    {
                        
                        dark && <IoSunny />
                    }
                    {
                        !dark && <IoMoon />
                    }
                </button>
 
     <a href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20buat%20Website' type="button" class=" text-black bg-gray-100 hover:bg-gray-200 focus:ring-4  p-24 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-4 text-center dark:bg-gray-100 dark:hover:bg-gray-200 dark:focus:ring-gray-800">Kontak</a>
    
    
    
  
  </div>

  <div class=" hidden h-full left-0 w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
     {navItems.map(item => (
          <li key={item.id}
          >
          <NavLink to={item.link} aria-current="page" className={({ isActive }) => (isActive ?  "sm:p-2 sm:mt-4 md:p-4 md:m-2 bg-purple-600 text-white hover:font-semibold rounded-full m-2 cursor-pointer justify-between items-center" : "sm:p-2 sm:mt-4 md:p-4 md:m-2 hover:bg-purple-600 hover:text-white hover:font-semibold rounded-full m-2 cursor-pointer justify-between items-center")}>
          {item.text} </NavLink>
          </li>
        ))}
    </ul>
  </div>

  <button   onClick={()=> darkModeHandler()} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                   {
                        
                        dark && <IoSunny />
                    }
                    {
                        !dark && <IoMoon />
                    }
             
    </button>
  </div>

{/* sticky menu popup */}
  <div class="items-center fixed left-2 pt-2 right-2 shadow-xl  justify-between  md:flex md:hidden md:order-1" id="navbar-sticky">
    <ul class={ nav
            ? 'font-medium flex flex-col p-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'
            :  'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
          } 
   >  
     {navItems.map(item => (
          <li
            key={item.id}
            className=' py-2 pr-4 p-4 text-gray-900 rounded hover:bg-purple-800 md:hover:bg-transparent hover:text-white dark:text-white dark:hover:bg-purple-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          >   <a href={item.link} aria-current="page" className={`${window.location.pathname === item.link  ?  'block py-2 px-3 text-white rounded bg-purple-800 md:hover:bg-transparent hover:text-white dark:text-white dark:hover:bg-purple-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' : `block py-2 px-3 text-gray-900 rounded hover:bg-purple-800 md:hover:bg-transparent hover:text-white dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}`}>
          {item.text} </a>
          </li>
        ))}

<li  className='block py-2 px-3 space-x-4 pb-8 pt-8 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
        >
       
 <a href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20buat%20Website' type="button" class=" text-black bg-gray-100 hover:bg-gray-200 focus:ring-4  p-24 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-4 text-center dark:bg-gray-100 dark:hover:bg-gray-200 dark:focus:ring-gray-800">Kontak</a>
    
        </li>

        <li  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
        >
      
        </li>

        
    </ul>
  </div>
  


  

<div class=" md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
    <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
      
        <a href='/' type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Home</span>
        </a>
        <a type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      
        <button  onClick={handleNav} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 group-hover:text-purple-600 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
       
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </button>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Menu</span>
        </a>
        <a href='https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website' type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clipRule="evenodd"/>
</svg>

            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-500">Chat</span>
        </a>
       
    </div>
</div>



</nav>

<Routeer />
</Router>
        
    );


}

export default Nav;