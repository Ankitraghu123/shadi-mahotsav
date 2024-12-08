import React from 'react';

const QuickAccessSection = () => {
  return (
    <section>
      <div className="str home-acces-main">
        <div className="container">
          <div className="row">
            {/* BACKGROUND SHAPE */}
            <div className="wedd-shap">
              <span className="abo-shap-1"></span>
              <span className="abo-shap-4"></span>
            </div>
            {/* END BACKGROUND SHAPE */}

            <div className="home-tit">
              <p>Quick Access</p>
              <h2><span>Our Services</span></h2>
              <span className="leaf1"></span>
              <span className="tit-ani-"></span>
            </div>
            <div className="home-acces">
              <ul className="hom-qui-acc-sli">
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
                <li>
                  <div className="wow fadeInUp hacc hacc4" data-wow-delay="0.4s">
                    <div className="con">
                      <img src="images/icon/hall.png" alt="" loading="lazy" />
                      <h4>Join Now</h4>
                      <p>Start for free</p>
                      <a href="plans.html">Get started</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wow fadeInUp hacc hacc3" data-wow-delay="0.3s">
                    <div className="con">
                      <img src="images/icon/photo-camera.png" alt="" loading="lazy" />
                      <h4>Photo gallery</h4>
                      <p>1200+ Profiles</p>
                      <a href="photo-gallery.html">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wow fadeInUp hacc hacc4" data-wow-delay="0.4s">
                    <div className="con">
                      <img src="images/icon/cake.png" alt="" loading="lazy" />
                      <h4>Blog & Articles</h4>
                      <p>Start for free</p>
                      <a href="blog.html">Get started</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;