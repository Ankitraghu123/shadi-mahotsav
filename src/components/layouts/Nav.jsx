import React, { useState } from 'react';
import logo from '../../images/logo-b.png';
import profileImg from '../../images/profiles/1.jpg';
import searchIcon from '../../images/icon/search.svg';
import usersIcon from '../../images/icon/users.svg';
import menuIcon from '../../images/icon/menu.svg';
import closeIcon from '../../images/icon/close.svg';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="hom-top">
      <div className="container">
        <div className="row">
          <div className="hom-nav">
            {/* LOGO */}
            <div className="logo">
              <span className="menu desk-menu">
                <i></i><i></i><i></i>
              </span>
              <Link to="/" className="logo-brand">
                <img src={logo} alt="Logo" loading="lazy" className="ic-logo" />
              </Link>
            </div>

            {/* EXPLORE MENU */}
            <div className="bl">
              <ul>
                <li className="smenu-pare">
                  <span className="smenu">Explore</span>
                  <div className="smenu-open smenu-box">
                    <div className="container">
                      <div className="row">
                        <h4 className="tit">Explore category</h4>
                        <ul>
                          <li>
                            <div className="menu-box menu-box-2">
                              <h5>Browse profiles <span>1200+ Verified profiles</span></h5>
                              <span className="explor-cta">More details</span>
                              <Link to="all-profiles.html" className="fclick"></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-1">
                              <h5>Wedding page <span>Make reservation</span></h5>
                              <span className="explor-cta">More details</span>
                              <Link to="wedding.html" className="fclick"></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-3">
                              <h5>All Services <span>Lorem ipsum dummy</span></h5>
                              <span className="explor-cta">More details</span>
                              <Link to="services.html" className="fclick"></Link>
                            </div>
                          </li>
                          <li>
                            <div className="menu-box menu-box-4">
                              <h5>Join Now <span>Lorem ipsum dummy</span></h5>
                              <span className="explor-cta">More details</span>
                              <Link to="plans.html" className="fclick"></Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="smenu-pare">
                  <span className="smenu">All pages</span>
                  <div className="smenu-open smenu-multi">
                    <div className="container">
                      <div className="row">
                        <div className="multi-col">
                          <div className="inn">
                            <h4>Page sets 1</h4>
                            <ul>
                              <li><Link to="/profile">All profiles</Link></li>
                              <li><Link to="/profile-detail">Profile details</Link></li>
                              <li><Link to="services.html">Our Services</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="multi-col">
                          <div className="inn">
                            <h4>Page sets 2</h4>
                            <ul>
                              <li><Link to="/pricing">Pricing plans</Link></li>
                              <li><Link to="/login">Login</Link></li>
                              <li><Link to="/register">Sign-up</Link></li>
                              <li><Link to="/gallery">Photo gallery</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="multi-col">
                          <div className="inn">
                            <h4>Page sets 3</h4>
                            <ul>
                              <li><Link to="/contact">Contact</Link></li>
                              <li><Link to="/about">About</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="multi-col full">
                          <div className="inn">
                            <h4>User dashboard pages</h4>
                            <ul>
                              <li><Link to="user-dashboard.html">Dashboard</Link></li>
                              <li><Link to="user-profile.html">My profile</Link></li>
                              <li><Link to="user-interests.html">Interests</Link></li>
                              <li><Link to="user-chat.html">Chat lists</Link></li>
                              <li><Link to="user-plan.html">My plan details</Link></li>
                              <li><Link to="user-setting.html">Profile settings</Link></li>
                              <li><Link to="user-profile-edit.html">Edit full profile</Link></li>
                              <li><Link to="login.html">Sign in</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li><Link to="plans.html">Plans</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li className="smenu-pare">
                  <span className="smenu">Dashboard</span>
                  <div className="smenu-open smenu-single">
                    <ul>
                      <li><Link to="user-dashboard.html">Dashboard</Link></li>
                      <li><Link to="user-profile.html">My profile</Link></li>
                      <li><Link to="user-interests.html">Interests</Link></li>
                      <li><Link to="user-chat.html">Chat lists</Link></li>
                      <li><Link to="user-plan.html">My plan details</Link></li>
                      <li><Link to="user-setting.html">Profile settings</Link></li>
                      <li><Link to="user-profile-edit.html">Edit full profile</Link></li>
                      <li><Link to="login.html">Sign in</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* USER PROFILE */}
            <div className="al">
              <div className="head-pro">
                <img src={profileImg} alt="Profile" loading="lazy" />
                <b>Advisor</b>
                <h4>Ashley Emyy</h4>
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="mob-menu">
              <div className="mob-me-ic">
                <span className="ser-open mobile-ser">
                  <img src={searchIcon} alt="Search" />
                </span>
                <span className="mobile-exprt" data-mob="dashbord">
                  <img src={usersIcon} alt="Users" />
                </span>
                <span className="mobile-menu" data-mob="mobile" onClick={toggleMobileMenu}>
                  <img src={menuIcon} alt="Menu" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORE MENU POPUP */}
      {isMobileMenuOpen && (
        <div className="mob-me-all mobile_menu">
          <div className="mob-me-clo" onClick={toggleMobileMenu}>
            <img src={closeIcon} alt="Close" />
          </div>
          <div className="mv-bus">
            <h4><i className="fa fa-globe" aria-hidden="true"></i> EXPLORE CATEGORY</h4>
            <ul>
              <li><Link to="all-profiles.html">Browse profiles</Link></li>
              <li><Link to="wedding.html">Wedding page</Link></li>
              <li><Link to="services.html">All Services</Link></li>
              <li><Link to="plans.html">Join Now</Link></li>
            </ul>
            <h4><i className="fa fa-align-center" aria-hidden="true"></i> All Pages</h4>
            <ul>
              <li><Link to="all-profiles.html">All profiles</Link></li>
              <li><Link to="profile-details.html">Profile details</Link></li>
              <li><Link to="wedding.html">Wedding</Link></li>
              <li><Link to="services.html">Our Services</Link></li>
              <li><Link to="login.html">Login</Link></li>
              <li><Link to="contact.html">Contact us</Link></li>
              <li><Link to="about.html">About</Link></li>
              <li><Link to="plans.html">Pricing plans</Link></li>
              <li><Link to="gallery.html">Photo gallery</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
