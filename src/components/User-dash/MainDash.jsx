import React from 'react'
// import Sidebar from '../layouts/Sidebar'
// import { Dropdown, Button } from "react-bootstrap";
// import { FaTachometer, FaMale, FaHandshake, FaCommenting, FaMoney, FaCog, FaSignOut, FaHeart, FaEye, FaHandPointer, FaEllipsisH } from "react-icons/fa";
import dash1 from '../../images/icon/plan.png'; // Import images
// import DashboardLayout from '../Dashboard';

const MainDash = () => {
  return (
    <>
{/* <DashboardLayout/> */}
<section>
      <div className="db">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-lg-12">
              <div className="col-md-12 db-sec-com db-new-pro-main">
                <h2 className="db-tit">New Profiles Matches</h2>
                <ul className="slider">
                  {['16', '2', '3', '4', '5', '6', '14'].map((profile, index) => (
                    <li key={index}>
                      <div className="db-new-pro">
                        <img src={`/images/profiles/${profile}.jpg`} alt="" className="profile" />
                        <div>
                          <h5>Julia Ann</h5>
                          <span className="city">New York</span>
                          <span className="age">22 Years old</span>
                        </div>
                        <a href="profile-details.html" className="fclick" target="_blank" rel="noopener noreferrer">&nbsp;</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                  <h2 className="db-tit">Profiles status</h2>
                  <div className="db-pro-stat">
                    <h6>Profile completion</h6>
                    <div className="dropdown">
                      <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Edit profile</a></li>
                        <li><a className="dropdown-item" href="#">View profile</a></li>
                        <li><a className="dropdown-item" href="#">Profile visibility settings</a></li>
                      </ul>
                    </div>
                    <div className="db-pro-pgog">
                      <span><b className="count">90</b>%</span>
                    </div>
                    <ul className="pro-stat-ic">
                      <li><span><i className="fa fa-heart-o like" aria-hidden="true"></i><b>12</b> Likes</span></li>
                      <li><span><i className="fa fa-eye view" aria-hidden="true"></i><b>12</b> Views</span></li>
                      <li><span><i className="fa fa-handshake-o inte" aria-hidden="true"></i><b>12</b> Interests</span></li>
                      <li><span><i className="fa fa-hand-pointer-o clic" aria-hidden="true"></i><b>12</b> Clicks</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                  <h2 className="db-tit">Plan details</h2>
                  <div className="db-pro-stat">
                    <h6 className="tit-top-curv">Standard plan</h6>
                    <div className="dropdown">
                      <button type="button" className="btn btn-outline-secondary" data-bs-toggle="dropdown">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Edit profile</a></li>
                        <li><a className="dropdown-item" href="#">View profile</a></li>
                        <li><a className="dropdown-item" href="#">Plan change</a></li>
                        <li><a className="dropdown-item" href="#">Download invoice now</a></li>
                      </ul>
                    </div>
                    <div className="db-plan-card">
                      <img src={dash1} alt="" />
                    </div>
                    <div className="db-plan-detil">
                      <ul>
                        <li>Plan name: <strong>Standard</strong></li>
                        <li>Validity: <strong>6 Months</strong></li>
                        <li>Valid till <strong>24 June 2024</strong></li>
                        <li><a href="#" className="cta-3">Upgrade now</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-4 db-sec-com">
                  <h2 className="db-tit">Recent chat list</h2>
                  <div className="db-pro-stat">
                    <div className="db-inte-prof-list db-inte-prof-chat">
                      <ul>
                        {['2', '16', '13', '14'].map((profile, index) => (
                          <li key={index}>
                            <div className="db-int-pro-1">
                              <img src={`/images/profiles/${profile}.jpg`} alt="" />
                            </div>
                            <div className="db-int-pro-2">
                              <h5>Julia Ann</h5>
                              <span>Illinois, United States</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}

export default MainDash