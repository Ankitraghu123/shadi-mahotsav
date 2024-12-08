import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "../../images/user/1.jpg";

// Import Swiper modules from "swiper/modules"
import { Navigation, Pagination } from "swiper/modules";
import { useDispatch } from "react-redux";
import { getProfile } from "../../Features/User/UserSlice";

const MySwiperComponent = ({profileData}) => {
   
  return (
    <>
    <Swiper
      slidesPerView={4}
      spaceBetween={4}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="mySwiper">





      {profileData?.gallery?.map((image) => (
        <SwiperSlide>
        <img src={image.url} alt="Profile Slide"  height='200px' width='100%'  />
      </SwiperSlide>
      ))}
      
    </Swiper>
    </>

  );
};

export default MySwiperComponent;
