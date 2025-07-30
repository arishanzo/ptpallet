import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Nav = () => {
  
   const navItems = [
    { id: 1, text: 'Home', link: '#home' },
    { id: 2, text: 'Profil', link: '#profil' },
    { id: 3, text: 'Our Services', link: '#services' }, 
    { id: 4, text: 'Our Gallery', link: '#gallery' },
      { id: 5, text: 'Our Contact', link: '#contact' },
   
  ];

 // State to manage the navbar's visibility
   const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);
   const [activeMenu, setActiveMenu] = useState('#home');

   // Toggle function to handle the navbar's display
   const handleNav = () => {
     setNav(!nav);
   };


   const handleActive = (link) => {
     return (e) => {
       e.preventDefault();
       setActiveMenu(link);
       if (link.startsWith('#')) {
         const section = document.getElementById(link.substring(1));
         if (section) section.scrollIntoView({ behavior: 'smooth' });
       } else {
         window.location.href = link;
       }
     };
   };
 
     

  useEffect(() => {
    // 
    const handleScroll = () => {
      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(navItems[i].link.substring(1));
           
        if (section) {
          const rect = section.getBoundingClientRect();
          if(rect.top <= 100 && rect.bottom >= 100){

          setActiveMenu(navItems[i].link);
            break;
          }
        }
      }

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


<nav className='bg-white mx-auto  show sticky top-0 z-50 w-full overflow-x-hidden'>
  
    <div
  className={`mx-auto px-4 py-2 md:py-10  sm:px-2  lg:px-8 transition-all duration-300 flex items-center ${
    scroll
      ? 'md:max-w-[1650px] dark:text-white justify-between '
      : 'bg-white text-black md:max-w-[1500px] dark:bg-dark-500 dark:text-white justify-between'
  }`}
>

  <div class="flex-shrink-0 flex items-center ">
            <img class="block h-16 pl-8 md:pl-0 w-auto" src="./img/logo/logoiplpolos.png" alt="Logo" />
            <span class="ml-6 md:text-xl font-bold text-red-500 hidden md:flex md:w-auto md:order-1">PT. Indonesia Pallet Logistik</span>
          </div>
 
  <div className="flex lg:hidden pr-8">
                       <button onClick={handleNav} type="button" className="md:hidden text-gray-900 cursor-pointer">
                       {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
              
</div>

  <div class=" hidden h-full left-0 w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
     {navItems.map(item => (
          <li key={item.id}
          >
            
       <a href={item.link} 
       onClick={handleActive(item.link)}  
       aria-current="page" 
       className={`${activeMenu === item.link ? `sm:p-2 sm:mt-4 md:p-4 md:m-2  text-white bg-red-600 rounded-xl hover:font-semibold  m-2 cursor-pointer justify-between items-center` : `sm:p-2 sm:mt-4 md:p-4 md:m-2 hover:bg-red-50 hover:text-black hover:font-semibold rounded-full m-2 cursor-pointer justify-between items-center text-red-900`}`}>
        
          {item.text} </a>
          </li>

          
        ))}

    </ul>


  </div>

 
  </div>

{/* sticky menu popup */}
  <div class="items-center fixed left-2 pt-2 right-2 shadow-xl  justify-between  md:flex md:hidden md:order-1" id="navbar-sticky">
    <ul  className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
   >  
     {navItems.map(item => (
          <li
            key={item.id}
            className=' py-2 pr-4 p-4 text-gray-900 rounded hover:bg-red-100 md:hover:bg-transparent '
          >   <a 
          onClick={handleActive(item.link)}  
       aria-current="page" 
          href={item.link} className={`${activeMenu === item.link  ?  'block py-2 px-3 text-white rounded bg-red-600 hover:bg-red-600 hover:text-white text-gray-900   ' : `block py-2 px-3 text-gray-900 rounded hover:bg-red-100 md:hover:bg-transparent hover:text-gray-900 `}`}>
          {item.text} </a>
          </li>
        ))}

      

        
    </ul>
  </div>
  


  



</nav>


        
    );


}

export default Nav;