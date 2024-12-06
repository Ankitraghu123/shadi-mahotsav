import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import './Footer.css'; // Import any necessary CSS here

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span>Free support:</span> +92 (8800) 68 - 8960 &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span> info@example.com
            </h2>
          </div>
          <div className="row wed-foot-link wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>Address:</p>
              <p>Phone: <a href="tel:+917904462944"></a></p>
              <p>Email: <a href="mailto:info@example.com"></a></p>
            </div>
            <div className="col-md-4">
              <h4>Usefull Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Plans</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/frachise/*">Franchise</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
                <li><Link to="/login-franchise">Login Franchise</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link to="/admin-dashboard">Admin Login</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li><Link to="#!"><FaInstagram className='
                fs-4' /></Link></li>
                <li><Link to="#!"><FaFacebook className='fs-4' /></Link></li>
                <li><Link to="#!"><FaTwitter className='fs-4' /></Link></li>
                <li><Link to="#!"><FaYoutube className='fs-4' /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section>
        <div className="cr">
          <div className="container">
            <div className="row">
              <p>
                Copyright <a href="#!" target="_blank" rel="noopener noreferrer">shadimahotsav.com</a> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
