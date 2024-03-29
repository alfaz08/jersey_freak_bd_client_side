
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";
import { Link } from "react-router-dom";

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Slider = () => {
  
  const categories =[
    {
      id:1,
      category:"addidas",
      image:"https://i.ibb.co/cJzJzWp/adidas-logo-adidas-icon-free-free-vector.jpg"
    },
    {
      id:2,
      category:"nike",
      image:"https://i.ibb.co/mSN6Yfg/free-nike-1-202653.jpg"
    },
    {
      id:3,
      category:"puma",
      image:"https://i.ibb.co/ZxSB9nF/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-white-backg.jpg"
    },
    {
      id:4,
      category:"kappa",
      image:"https://i.ibb.co/KxRBYwv/kappa5224-logowik-com.webp"
    },
    {
      id:5,
      category:"reebok",
      image:"https://i.ibb.co/vD09Nxz/images.png"
    },
    {
      id:6,
      category:"new balance",
      image:"https://i.ibb.co/MhM9SMB/New-Balance-Emblem-700x394.png"
    },
  ]


  return (
    <>
     <div className="flex justify-between ">
     <div>
     <h2 className="text-center mt-8 font-semibold text-4xl mb-4 text-green-00">
        Different brand
      </h2>
     </div>

      <div>
      <div className="flex mt-10 gap-2">
      <div>
      <FaArrowCircleLeft  className="text-4xl"/>
      </div>
      <div>
      <FaArrowCircleRight className="text-4xl"/>
      </div>
      </div>
      </div>

     </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={false}  
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >


        
         {
          categories?.map(category=>(
            <SwiperSlide key={category.id} id="image">

          <Link to={`/productDetails/${category.category}`}>
            <div className="card w-52 h-60 border  border-gray-300  shadow-xl hover:border hover:bg-amber-100  hover:border-amber-300 ">
              <figure className="px-10 pt-10">
                <img
                  src={category.image}
                  alt="Shoes"
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase">{category.category}</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
          ))
         }

         
        
      
        
      </Swiper>
    </>
  );
};

export default Slider;