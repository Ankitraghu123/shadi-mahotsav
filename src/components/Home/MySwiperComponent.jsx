import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "../../images/user/1.jpg";

// Import Swiper modules from "swiper/modules"
import { Navigation, Pagination } from "swiper/modules";

const MySwiperComponent = () => {
  return (
    <>
    <div className="container">
    <div className="home-tit">
              <p>Quick Access</p>
              <h2><span>Our Services</span></h2>
              <span className="leaf1"></span>
              <span className="tit-ani-"></span>
            </div>
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper">





      <SwiperSlide>
        <img src={slider} alt="Profile Slide" />
        <li>
          <div className="wow fadeInUp hacc hacc1" data-wow-delay="0.1s">
            <div className="con">
              <img src="images/icon/user.png" alt="" loading="lazy" />
              <h4>Browse Profiles</h4>
              <p>1200+ Profiles</p>
              <a href="all-profiles.html">View more</a>
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="Profile Slide" />
        <li>
                  <div className="wow fadeInUp hacc hacc2" data-wow-delay="0.2s">
                    <div className="con">
                      <img src="images/icon/gate.png" alt="" loading="lazy" />
                      <h4>Wedding</h4>
                      <p>1200+ Profiles</p>
                      <a href="wedding-video.html">View more</a>
                    </div>
                  </div>
                </li>
      </SwiperSlide>
      <SwiperSlide>
      <img src={slider} alt="Profile Slide" />
        <li>
                  <div className="wow fadeInUp hacc hacc3" data-wow-delay="0.3s">
                    <div className="con">
                      <img src="images/icon/couple.png" alt="" loading="lazy" />
                      <h4>All Services</h4>
                      <p>1200+ Profiles</p>
                      <a href="services.html">View more</a>
                    </div>
                  </div>
                </li>
                </SwiperSlide>
                <SwiperSlide>
        <img src={slider} alt="Profile Slide" />
        <li>
          <div className="wow fadeInUp hacc hacc1" data-wow-delay="0.1s">
            <div className="con">
              <img src="images/icon/user.png" alt="" loading="lazy" />
              <h4>Browse Profiles</h4>
              <p>1200+ Profiles</p>
              <a href="all-profiles.html">View more</a>
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider} alt="Profile Slide" />
        <li>
                  <div className="wow fadeInUp hacc hacc2" data-wow-delay="0.2s">
                    <div className="con">
                      <img src="images/icon/gate.png" alt="" loading="lazy" />
                      <h4>Wedding</h4>
                      <p>1200+ Profiles</p>
                      <a href="wedding-video.html">View more</a>
                    </div>
                  </div>
                </li>
      </SwiperSlide>
      <SwiperSlide>
      <img src={slider} alt="Profile Slide" />
        <li>
                  <div className="wow fadeInUp hacc hacc3" data-wow-delay="0.3s">
                    <div className="con">
                      <img src="images/icon/couple.png" alt="" loading="lazy" />
                      <h4>All Services</h4>
                      <p>1200+ Profiles</p>
                      <a href="services.html">View more</a>
                    </div>
                  </div>
                </li>
                </SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
    </div>

    </>

  );
};

export default MySwiperComponent;
