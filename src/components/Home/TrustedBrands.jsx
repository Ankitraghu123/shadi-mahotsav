import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import user1 from '../../images/user/1.jpg';
import user2 from '../../images/user/2.jpg';
import user3 from '../../images/user/3.jpg';
import user5 from '../../images/user/5.jpg';

const TrustedBrands = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      image: user1,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jack Daniel",
      location: "New York",
    },
    {
      image: user2,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jack Daniel",
      location: "New York",
    },
    {
      image: user3,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jack Daniel",
      location: "New York",
    },
    {
      image: user5,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Jack Daniel",
      location: "New York",
    },
  ];

  return (
    <section>
      <div className="hom-cus-revi">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>trusted brand</p>
              <h2>
                <span>Trust by <b className="num">1500</b>+ Couples</span>
              </h2>
              <span className="leaf1"></span>
              <span className="tit-ani-"></span>
            </div>
            <div className="slid-inn cus-revi">
              <Slider {...sliderSettings} className="slider3">
                {reviews.map((review, index) => (
                  <div key={index}>
                    <div className="cus-revi-box">
                      <div className="revi-im">
                        <img src={review.image} alt="" loading="lazy" />
                        <i className="cir-com cir-1"></i>
                        <i className="cir-com cir-2"></i>
                        <i className="cir-com cir-3"></i>
                      </div>
                      <p>{review.review}</p>
                      <h5>{review.name}</h5>
                      <span>{review.location}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="cta-full-wid">
              <a href="#!" className="cta-dark">More customer reviews</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
