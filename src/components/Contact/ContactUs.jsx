import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './ContactUs.css'; // Optional: Add custom CSS here
import contact1 from '../../imgs/handshake.png';
import contact2 from '../../imgs/help-desk.png';
// import contact3 from '../../images/profiles/7.jpg';

const ContactUs = () => {
  return (
    <>
      {/* BANNER */}
      <section>
        <div className="str">
          <div className="ban-inn ab-ban pg-cont">
            <div className="container">
              <div className="row">
                <div className="hom-ban">
                  <div className="ban-tit">
                    <span>We are here to assist you.</span>
                    <h1>Contact us</h1>
                    <p>Most Trusted and premium Matrimony Service in the World.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}

      {/* START */}
      <section>
        <div className="ab-sec2 pg-cont">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <div className="we-here">
                    <h3>Our office</h3>
                    <p>Most Trusted and premium Matrimony Service in the World.</p>
                    <span>
                      <i className="fa fa-phone" aria-hidden="true"></i> +92 (8800) 68 - 8960
                    </span>
                    <span>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i> help@company.com
                    </span>
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src={contact1} alt="Trust Icon" />
                    <h4>Customer Relations</h4>
                    <p>Most Trusted and premium Matrimony Service in the World.</p>
                    <a href="#!" className="cta-rou-line">
                      Get Support
                    </a>
                  </div>
                </li>
                <li>
                  <div className="we-cont">
                    <img src={contact2} alt="Telephone Icon" />
                    <h4>WhatsApp Support</h4>
                    <p>Most Trusted and premium Matrimony Service in the World.</p>
                    <a href="#!" className="cta-rou-line">
                      Talk to sales
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
    </>
  );
};

export default ContactUs;
