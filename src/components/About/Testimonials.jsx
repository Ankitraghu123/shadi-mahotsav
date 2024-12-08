import React from 'react';
import { Carousel } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";

// Image imports
import profile1 from '../../images/profiles/1.jpg';
import profile6 from '../../images/profiles/6.jpg';
import profile7 from '../../images/profiles/7.jpg';

const Testimonials = () => {
  return (
    <section>
      <div className="hom-partners abo-partners" id="testimonials">
        <div className="container">
          <div className="row">
            {/* Subtitle */}
            <div className="sub-tit-caps">
              <h2>
                Customer{' '}
                <span className="animate animate__animated animate__flipInX" style={{ animationDelay: '0.1s' }}>
                  Testimonials
                </span>
              </h2>
              <p>Fusce imperdiet ullamcorper fringilla.</p>
            </div>

            {/* Testimonial Background Shapes */}
            <div className="wedd-shap">
              <span className="abo-shap-1"></span>
              <span className="abo-shap-3"></span>
            </div>

            {/* Carousel */}
            <Carousel
              id="demo"
              prevIcon={
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'black' }} />
              }
              nextIcon={
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: 'black' }} />
              }
            >
              <Carousel.Item>
                <ul>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile1} alt="John Smith" />
                        <div>
                          <h4>John Smith</h4>
                          <span>IT Profession</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile6} alt="Julia Ann" />
                        <div>
                          <h4>Julia Ann</h4>
                          <span>Teacher</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile7} alt="William Son" />
                        <div>
                          <h4>William Son</h4>
                          <span>Government Staff</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Carousel.Item>

              {/* Second Carousel Item */}
              <Carousel.Item>
                <ul>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile1} alt="John Smith" />
                        <div>
                          <h4>John Smith</h4>
                          <span>IT Profession</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile6} alt="Julia Ann" />
                        <div>
                          <h4>Julia Ann</h4>
                          <span>Teacher</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ab-testmo">
                      <div className="ab-test-rat">
                        <div className="ab-test-star">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          <span>(50 Reviews)</span>
                        </div>
                        <div className="ab-test-conte">
                          <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                          </p>
                        </div>
                      </div>
                      <div className="ab-rat-user">
                        <img src={profile7} alt="William Son" />
                        <div>
                          <h4>William Son</h4>
                          <span>Government Staff</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
