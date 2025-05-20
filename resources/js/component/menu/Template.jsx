import React, { useState, useEffect }  from 'react';
import { getDataTemplate } from '../../data/datatemplate';
import Calltoaction from './Layout/layanan/Calltoaction';




// class Template extends React.Component {
  
  const Template = () => {

  const [data, setData] = useState(getDataTemplate());
  const [option, setOption] = useState('Filter Category');
  const [visibleCount, setvisibleCount]= useState(8);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: getDataTemplate(),
  //     option: 'Filter Category',
  //     visibleCount: 8,
  //   }
  // }

   // Fungsi untuk menangani input pencarian
   const handleSearch = (e) => {
    const term = e.target.value;// Ambil input pengguna
    
    // Update searchTerm di state
    // Filter data berdasarkan kata kunci pencarian
    setOption(term);
  };

  const filterData = (term) => {

  const filteredData = getDataTemplate().filter((item) =>
    term == 'Filter Category' || term == ''  || item.title.includes(term) || item.category.includes(term) // Cari nama yang sesuai
   );
   setData(filteredData);
  };

  const showMore = (prevState) => {
      const tambah = prevState.visibleCount + 4
      setvisibleCount(); // Tambah jumlah yang terlihat
    };
  

    
  useEffect(() => {
    filterData(option);
  }, [option]);

   

    // const { search, category } = this.state;
    // const filteredProducts = this.getFilteredProducts();
return (
      <div>
           <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
  <div className="mx-auto md:max-w-screen-2xl px-4 2xl:px-0">
  
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        
      <select 
      id="countries" 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={option}
      onChange={handleSearch}
      >
   
    <option disabled >Filter Category</option>
    <option value=''>All</option>
    <option value="E-Commerce">E-Commerce</option>
    <option value="Landingpage">Landingpage</option>
    <option value="Education">Education</option>
  </select>
      </div>

      <div className="flex items-center space-x-4">

      <div
            className="flex items-center bg-gray-100 justify-between  w-full max-w-full mx-auto lg:mr-0 rounded-full p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-100 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400">
            <input type="text"
              className="bg-transparent text-base font-normal  placeholder:text-gray-500 focus-within:outline-0"
              placeholder="Cari Template"
              
          onChange={handleSearch}
              
              />
                </div>
      </div>
     </div>
     
 
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
    {data.slice(0, visibleCount).map((item, index) => (  
      <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 shadow shadow-xl">
        <div className=" w-full">
          <a href="#">
            <img className="mx-auto h-full " src={item.Image} alt="" />
               </a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
           
            <div className="flex items-center justify-end gap-1">
              <a href={item.link} type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Lihat Website</span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              
              </a>
              <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Lihat Website
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

            
            </div>
          </div>

          <a href={item.link} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.title}</a>

       

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M6 5a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L15.249 6H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-5a3 3 0 0 0-3-3h-3.22l-1.14-1.682A3 3 0 0 0 9.157 6H6V5Z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M3 9a2 2 0 0 1 2-2h4.157a2 2 0 0 1 1.656.879L12.249 10H3V9Zm0 3v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7H3Z" clipRule="evenodd"/>
          </svg>

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.category}</p>
            </li>

            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-xl font-bold leading-tight text-gray-400 dark:text-white">Temweb0{index + 1}</p>

            <a  href='https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website' target='blank' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pilih Template</a>

          </div>
        </div>
      </div>
    ))}
      
    </div>
    {visibleCount < data.length && (
    <div className="w-full text-center">
      <button type="button" onClick={showMore} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
    </div>
    )}
  </div>
 
</section>

<Calltoaction/>
        </div>
  );
};

export default Template;