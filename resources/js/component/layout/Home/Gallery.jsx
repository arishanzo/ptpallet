
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect} from "react"

import { getDataGallery } from '../../../data/datagallery';

const Gallery = () => {

  
       const [ref, inView] = useInView({
          triggerOnce: true, 
          threshold: 0.1,    
        });
      
        
      
      const styles = useSpring({
        opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0px)' : 'translateX(50px)', // ⬆️ Geser dari bawah
          delay: inView ? 300 : 0,
          config: { tension: 170, friction: 20 },
      });



  const [gallery, setGallery] = useState(getDataGallery());
  const [selectedCategory, setSelectedCategory] = useState('All');
   
  const categories = ['All', 'Training', 'Produk', 'Workshop'];


    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredGallery = selectedCategory === 'All' ? gallery : gallery.filter(item => item.category === selectedCategory);
    
    
  const [itemPerPage, setItemPerPage] = useState(9);
    const [pageIndex, setPageIndex] = useState(0);
     const totalPages = Math.ceil(filteredGallery.length / itemPerPage);


     useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemPerPage(2); // Mobile
    } else if (width < 1024) {
      setItemPerPage(2); // Tablet
    } else {
      setItemPerPage(9); // Desktop
    }
  };

  // Panggil saat pertama kali
  handleResize();

  // Tambahkan event listener
  window.addEventListener('resize', handleResize);

  // Bersihkan event listener saat unmount
  return () => window.removeEventListener('resize', handleResize);
}, []);

     const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  
  const start = pageIndex * itemPerPage;
  const datagallery  = filteredGallery.slice(start, start + itemPerPage);
   
    return (

        <>


<div class="bg-white h-full py-6 md:py-32 sm:py-8 lg:py-12 pt-8  overflow-x-hidden" id='gallery'>
  
         <animated.div style={{ ...styles }}   ref={ref}>
    <div class="mx-auto md:max-w-[80%] px-8 md:px-8"  >
        <div class="mb-4 flex items-center justify-between gap-8 ">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl ">Our Gallery</h2>

              
            </div>



       
        </div>


   <div class="flex flex-wrap justify-start md:justify-center gap-3 mb- py-8">
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full transition 
              ${selectedCategory === category 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
              }`}
          >
            {category}
          </button>
        ))}
        
        
             </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 ">

             {datagallery.map((gallery, i) => (
       
            <div key={i}>
           <img
                class="w-full h-64 object-cover  rounded-lg"
                src={gallery.img}
                alt="Gallery image"
              />           
              
              </div>
       ))}
       
      </div>

</div>


<div class="bg-white py-8">
  <div class="md:max-w-[80%] mx-auto px-6 lg:px-8">
    <nav class="flex border-t border-gray-200 pt-4 md:pt-5" aria-label="Pagination">
      <div class="flex flex-1 items-center">
        <button
         onClick={prevPage}
         disabled={pageIndex === 0}
        class="disabled:opacity-50 flex items-center gap-x-1.5 text-sm font-semibold text-gray-500 hover:text-gray-700">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          Previous
        </button>
      </div>
      <div class="hidden md:flex md:items-center md:gap-x-2">
         {Array.from({ length: totalPages }).map((_, i) => (
  <button
    aria-current="page"
    key={i}
    onClick={() => setPageIndex(i)}
    className={`p-2 rounded-full ${
      i === pageIndex
        ? 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
        : 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
    }`}
  >
    {i + 1}
  </button>
))}

       
          </div>
      <div class="flex flex-1 items-center  justify-end">
        <button  
        onClick={nextPage}
         disabled={pageIndex === totalPages - 1}
         className="disabled:opacity-50 flex items-center gap-x-1.5 text-sm font-semibold text-gray-500 hover:text-gray-700">
          Next
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</div>

</animated.div>
</div>
              
      
    </>
    );
}

export default Gallery;