import React, { useState } from 'react';
import img1 from '../../images/profiles/men1.jpg';
import img2 from '../../images/profiles/men2.jpg';
import img3 from '../../images/profiles/men3.jpg';
import img4 from '../../images/profiles/men4.jpg';
import img5 from '../../images/profiles/men5.jpg';

const Interests = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Function to change the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <div className="db">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <div className="col-md-12 db-sec-com">
                  <h2 className="db-tit">Interest Request</h2>
                  <div className="db-pro-stat">
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

                    <div className="db-inte-main">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'home' ? 'active bg-danger' : ''}`}
                            onClick={() => handleTabChange('home')}
                          >
                            New Requests
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'menu1' ? 'active bg-danger' : ''}`}
                            onClick={() => handleTabChange('menu1')}
                          >
                            Accept Requests
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'menu2' ? 'active bg-danger' : ''}`}
                            onClick={() => handleTabChange('menu2')}
                          >
                            Deny Requests
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content">
                        <div id="home" className={`container tab-pane ${activeTab === 'home' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                              {[img1, img2, img3, img4].map((img, index) => (
                                <li key={index + 1}>
                                  <div className="db-int-pro-1">
                                    <img src={img} alt={`Profile ${index + 1}`} />
                                    <span className="badge bg-primary user-pla-pat">Platinum user</span>
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>John Smith</h5>
                                    <ol className="poi">
                                      <li>City: <strong>Illinois</strong></li>
                                      <li>Age: <strong>21</strong></li>
                                      <li>Height: <strong>5.7</strong></li>
                                      <li>Job: <strong>Working</strong></li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>Request on: 10:30 AM, 18 August 2024</li>
                                    </ol>
                                    <a href="profile-details.html" className="cta-5" target="_blank" rel="noopener noreferrer">View full profile</a>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button type="button" className="btn btn-success btn-sm">Accept</button>
                                    <button type="button" className="btn btn-outline-danger btn-sm">Deny</button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div id="menu1" className={`container tab-pane ${activeTab === 'menu1' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                              <li>
                                <div className="db-int-pro-1">
                                  <img src={img5} alt="Profile 5" />
                                </div>
                                <div className="db-int-pro-2">
                                  <h5>John Smith</h5>
                                  <ol className="poi">
                                    <li>City: <strong>Illinois</strong></li>
                                    <li>Age: <strong>21</strong></li>
                                    <li>Height: <strong>5.7</strong></li>
                                    <li>Job: <strong>Working</strong></li>
                                  </ol>
                                  <ol className="poi poi-date">
                                    <li>Request on: 10:30 AM, 18 August 2024</li>
                                    <li>Accept on: 3:00 PM, 21 August 2024</li>
                                  </ol>
                                  <a href="profile-details.html" className="cta-5" target="_blank" rel="noopener noreferrer">View full profile</a>
                                </div>
                                <div className="db-int-pro-3">
                                  <button type="button" className="btn btn-outline-danger btn-sm">Deny</button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div id="menu2" className={`container tab-pane ${activeTab === 'menu2' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                              <li>
                                <div className="db-int-pro-1">
                                  <img src={img1} alt="Profile 1" />
                                </div>
                                <div className="db-int-pro-2">
                                  <h5>John Smith</h5>
                                  <ol className="poi">
                                    <li>City: <strong>Illinois</strong></li>
                                    <li>Age: <strong>21</strong></li>
                                    <li>Height: <strong>5.7</strong></li>
                                    <li>Job: <strong>Working</strong></li>
                                  </ol>
                                  <ol className="poi poi-date">
                                    <li>Request on: 10:30 AM, 18 August 2024</li>
                                    <li>Deny on: 3:00 PM, 21 August 2024</li>
                                  </ol>
                                  <a href="profile-details.html" className="cta-5" target="_blank" rel="noopener noreferrer">View full profile</a>
                                </div>
                                <div className="db-int-pro-3">
                                  <button type="button" className="btn btn-success btn-sm">Accept</button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
