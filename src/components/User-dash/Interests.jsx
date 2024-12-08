import React, { useEffect, useState } from 'react';
import img1 from '../../images/profiles/men1.jpg';
import img2 from '../../images/profiles/men2.jpg';
import img3 from '../../images/profiles/men3.jpg';
import img4 from '../../images/profiles/men4.jpg';
import img5 from '../../images/profiles/men5.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRequest, allConnections, allReceivedRequest, allSendedRequest, rejectRequest } from '../../Features/User/UserSlice';
import { Link } from 'react-router-dom';

const Interests = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const [activeTab, setActiveTab] = useState('home');
  const dispatch = useDispatch()
  const receivedRequests = useSelector(state => state.User.receivedRequests?.receivedRequests)
  const sendedRequests = useSelector(state => state.User.sendedRequests?.sendedRequests)
  const connections = useSelector(state => state.User.allConnections?.connections)

  const {requestAccepted,requestRejected} = useSelector(state => state.User)
  useEffect(() => {
    dispatch(allReceivedRequest(profileDetails._id))
    dispatch(allSendedRequest(profileDetails._id))
    dispatch(allConnections(profileDetails._id))
  },[requestAccepted,requestRejected])

  // Function to change the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const  convertToNormalFormat = (isoDate)=> {
    const date = new Date(isoDate);  // Convert the ISO string to a Date object

    // Format the date into a more readable format (e.g., "January 12, 2004")
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


const acceptRequestHandler = (senderId)=> {
  dispatch(acceptRequest({senderId,receiverId:profileDetails._id}))
}

const denyRequestHandler = (senderId)=> {
  dispatch(rejectRequest({senderId,receiverId:profileDetails._id}))
}


  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

// Format the date using toLocaleString with specific options
const formattedDate = date.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    day: "2-digit",
    month: "long",
    year: "numeric"
});

return formattedDate
  }

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
                            Sended Requests
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTab === 'menu2' ? 'active bg-danger' : ''}`}
                            onClick={() => handleTabChange('menu2')}
                          >
                            Accepted Requests
                          </button>
                        </li>
                      </ul>

                      <div className="tab-content">
                        <div id="home" className={`container tab-pane ${activeTab === 'home' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                              {receivedRequests?.map((user, index) => (
                                <li key={index + 1}>
                                  <div className="db-int-pro-1">
                                    <img src={user?.profilePicture} alt={`Profile ${index + 1}`} />
                                    {/* <span className="badge bg-primary user-pla-pat">Platinum user</span> */}
                                  </div>
                                  <div className="db-int-pro-2">
                                    <h5>{user?.name}</h5>
                                    <ol className="poi">
                                      <li>City: <strong>{user?.city}</strong></li>
                                      <li>Dob: <strong>{convertToNormalFormat(user?.dob)}</strong></li>
                                      <li>Height: <strong>{user?.height}</strong></li>
                                      <li>Job: <strong>{user.jobType}</strong></li>
                                    </ol>
                                    <ol className="poi poi-date">
                                      <li>Request on: {formatDate(user?.createdAt)}</li>
                                    </ol>
                                    <Link className="cta-5" to={`/profile-detail/${user?._id}`}>View full profile</Link>
                                  </div>
                                  <div className="db-int-pro-3">
                                    <button type="button" className="btn btn-success btn-sm" onClick={() => acceptRequestHandler(user?._id)}>Accept</button>
                                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => denyRequestHandler(user?._id)}>Deny</button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div id="menu1" className={`container tab-pane ${activeTab === 'menu1' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                              {
                                sendedRequests?.map((user) => (
                                  
                                  <li>
                                <div className="db-int-pro-1">
                                  <img src={user?.profilePicture} alt="Profile 5" />
                                </div>
                                <div className="db-int-pro-2">
                                  <h5>{user?.name}</h5>
                                  <ol className="poi">
                                    <li>City: <strong>{user?.city}</strong></li>
                                    <li>Age: <strong>{convertToNormalFormat(user?.dob)}</strong></li>
                                    <li>Height: <strong>{user?.height}</strong></li>
                                    <li>Job: <strong>{user?.jobType}</strong></li>
                                  </ol>
                                  <ol className="poi poi-date">
                                    <li>{formatDate(user?.createdAt)}</li>
                                  </ol>
                                  <Link className="cta-5" to={`/profile-detail/${user?._id}`}>View full profile</Link>
                                </div>
                                
                              </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>

                        <div id="menu2" className={`container tab-pane ${activeTab === 'menu2' ? 'active' : 'fade'}`}><br />
                          <div className="db-inte-prof-list">
                            <ul>
                             {
                              connections?.map((user) => (
                                <li>
                                <div className="db-int-pro-1">
                                  <img src={user?.profilePicture} alt="Profile 1" />
                                </div>
                                <div className="db-int-pro-2">
                                  <h5>{user?.name}</h5>
                                  <ol className="poi">
                                    <li>City: <strong>{user?.city}</strong></li>
                                    <li>Age: <strong>{convertToNormalFormat(user?.dob)}</strong></li>
                                    <li>Height: <strong>{user?.height}</strong></li>
                                    <li>Job: <strong>{user?.jobType}</strong></li>
                                  </ol>
                                  <ol className="poi poi-date">
                                    <li>{formatDate(user?.createdAt)}</li>
                                  </ol>
                                  <Link className="cta-5" to={`/profile-detail/${user?._id}`}>View full profile</Link>
                                 
                                </div>
                                <div className="db-int-pro-3">
                                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => denyRequestHandler(user?._id)}>Deny</button>
                                  </div>
                              </li>
                              ))
                             }
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
