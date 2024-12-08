import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img6 from '../../imgs/couple1.jpg';
import img7 from '../../imgs/couple2.jpg';
import img8 from '../../imgs/couple3.jpg';
import img9 from '../../imgs/couple4.jpg';
import img10 from '../../imgs/couple1.jpg';
import img3 from '../../imgs/couple2.jpg';
import img4 from '../../imgs/couple3.jpg';
import img5 from '../../imgs/couple4.jpg';


const RecentCouplesSection = () => {
  const couples = [
    {
      imgSrc: img6,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img7,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img8,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img9,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img10,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img3,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img4,
      name: "Dany & July",
      location: "New York",
      link: "wedding-video.html",
    },
    {
      imgSrc: img5,
      name: "Dany & July",
      location: "New York",
      link: "wedding.html",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="hom-couples-all">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>trusted brand</p>
              <h2><span>Recent Couples</span></h2>
              <span className="leaf1"></span>
              <span className="tit-ani-"></span>
            </div>
          </div>
        </div>
        <div className="hom-coup-test">
          <Slider {...settings}>
            {couples.map((couple, index) => (
              <div key={index}>
                <div className="hom-coup-box">
                  <span className="leaf"></span>
                  <img src={couple.imgSrc} alt={couple.name} loading="lazy" />
                  <div className="bx">
                    <h4>{couple.name} <span>{couple.location}</span></h4>
                    <a href={couple.link} className="sml-cta cta-dark">View more</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RecentCouplesSection;
