import React from 'react';
// import './AboutUsBanner.css'; // Import your CSS file
import prizeIcon from '../../imgs/medal.png'; // Import images
import trustIcon from '../../imgs/trust.png'; // Import images
import ringsIcon from '../../imgs/wedding-ring.png'; // Import images
const AboutUsBanner = () => {
  return (
    <>
      {/* About Us Banner Section */}
      <section>
        <div className="str">
          <div className="ban-inn ab-ban">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span><i className="no1">#1</i> Wedding Website</span>
                    <h1>About us</h1>
                    <p>Most Trusted and premium Matrimony Service in the World.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section>
        <div className="ab-sec2">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div>
                    <img src={prizeIcon} alt="Genuine profiles" />
                    <h4>Genuine profiles</h4>
                    <p>The most trusted wedding matrimony brand</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={trustIcon} alt="Most trusted" />
                    <h4>Most trusted</h4>
                    <p>The most trusted wedding matrimony brand</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={ringsIcon} alt="2000+ weddings" />
                    <h4>2000+ weddings</h4>
                    <p>The most trusted wedding matrimony brand</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsBanner;
