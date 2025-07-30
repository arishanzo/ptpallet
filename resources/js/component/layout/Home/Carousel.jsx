
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  
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


  const settings = {
    dots: false, // Menampilkan titik-titik navigasi
  
    speed: 500, // Kecepatan transisi
    slidesToShow: 8, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digulirkan sekaligus
    autoplay: true,
    arrows: false, // Memutar otomatis
    autoplaySpeed: 1000, // Kecepatan autoplay dalam milidetik

    responsive: [
      {
        breakpoint: 800, // Untuk layar dengan lebar maksimum 768px
        settings: {
          slidesToShow: 4, // Menampilkan 1 slide
          arrows: false, // Sembunyikan panah navigasi di tampilan mobile
          dots: false, // Tetap tampilkan titik navigasi
        },
      },
      {
        breakpoint: 1104, // Untuk layar dengan lebar maksimum 480px
        settings: {
          slidesToShow: 4, // Tetap tampilkan 1 slide
          arrows: false, // Sembunyikan panah navigasi
          dots: false, // Tampilkan titik navigasi
        },
      },
    ],
   
  };

  

  const layananItems = [
    { id: 1, 
      src: "./img/logo/sponsor1.png",
    
    },
     { id: 2, 
      src: "./img/logo/sponsor2.png",
    
    },
     { id: 3, 
      src: "./img/logo/sponsor3.png",
    
    },
     { id: 4, 
      src: "./img/logo/sponsor4.png",
    
    },
     { id: 5, 
      src: "./img/logo/sponsor5.png",
    
    },
     { id: 6, 
      src: "./img/logo/sponsor6.png",
    
    },
     { id: 7, 
      src: "./img/logo/sponsor7.png",
    
    },
     { id: 8, 
      src: "./img/logo/sponsor8.png",
    
    },
      { id: 9, 
      src: "./img/logo/sponsor9.png",
    
    },
     { id: 10, 
      src: "./img/logo/sponsor10.png",
    
    },
   
  ];
  
  return (


    

    
<div className="w-full px-4 md:mt-32 py-12  overflow-x-hidden" >
    
    
            <animated.div style={{ ...styles }}   ref={ref}>
    <h2 className="text-xl md:text-4xl font-bold text-center text-gray-800">Our Client / Customer</h2>
  
  
<Slider {...settings} className="absolute pt-12 ">
  
  {layananItems.map((item, index) => (
    <div key={index} className="flex justify-center items-center p-4">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img
          src={item.src}
          alt="Logo"
          className="h-10 md:h-24"
        />
      </a>
    </div>
  ))}
</Slider>

</animated.div>
</div>

   
    
  );
};



export default Carousel;
