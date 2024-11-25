import React, { useEffect } from 'react'
// import Sidebar from '../layouts/Sidebar'
// import { Dropdown, Button } from "react-bootstrap";
// import { FaTachometer, FaMale, FaHandshake, FaCommenting, FaMoney, FaCog, FaSignOut, FaHeart, FaEye, FaHandPointer, FaEllipsisH } from "react-icons/fa";
import dash1 from '../../images/icon/plan.png'; // Import images
import { useDispatch, useSelector } from 'react-redux';
import { findMatchingProfiles, getCurrentUser, getProfile, getProfileCompletion } from '../../Features/User/UserSlice';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// import DashboardLayout from '../Dashboard';

const MainDash = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch()
  const allMatchingProfiles = useSelector(state => state.User?.allMatchingProfiles?.matchingProfiles)
    const profileCompletionData = useSelector(state => state.User?.profileCompletion)
    const currentUser = useSelector(state => state.User.currentUser)

  useEffect(() => {
    dispatch(findMatchingProfiles(profileDetails._id))
    dispatch(getProfileCompletion(profileDetails?._id))
    dispatch(getCurrentUser(profileDetails?._id))
  },[])

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  }

  const calculateAge = (birthDate) => {
    const currentDate = new Date();  // Get the current date
    const birthDateObj = new Date(birthDate);  // Convert the birthdate string to a Date object
    
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();  // Calculate the difference in years
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();  // Calculate the month difference
  
    // If the current month is before the birth month or it's the same month but the current day is before the birth day, subtract 1 from age
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    return age;
  }

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
                  {allMatchingProfiles?.map((profile, index) => (
                    <Link to={`/profile-detail/${profile?.user?._id}`}>
                    <li key={index}>
                       <div className="db-new-pro">
                        <img src={profile?.user?.profilePicture} alt="" className="profile" />
                        <div>
                          <h5>{profile?.user?.name}</h5>
                          <span className="city me-2">{profile?.user?.city}</span>
                          <span className="age">{calculateAge(profile?.user?.dob)}</span>
                        </div>
                      </div>
                    </li></Link>
                  ))}
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                  <h2 className="db-tit">Profiles status</h2>
                  <div className="db-pro-stat">
                  <h6>Profile completion</h6>
                  <div className="dropdown">
                  <OverlayTrigger
                          placement="top" // Tooltip placement
                          overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>} // Tooltip content
                        >
                          <Link
                            type="button"
                            className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                            to={'/edit'}
                          >
                            <MdEdit />
                          </Link>
                        </OverlayTrigger>
                    
                  </div>
                  <div className="db-pro-pgog">
                    <span>
                      <b className="count">{profileCompletionData?.completionPercentage}</b>%
                    </span>
                  </div>
                  <div className="remaining-fields mt-3">
                    <h6 className="text-muted">Remaining Fields</h6>
                    <ul className="list-group list-group-flush"  style={{
    maxHeight: "150px", // Set the height you want
    overflowY: "auto",  // Enable vertical scrolling
  }}>
                      {profileCompletionData?.remainingFieldsWithPercentage?.map((field, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="text-muted">{field.field}</span>
                          <span className="badge bg-secondary">{field.percentage}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                  <h2 className="db-tit">Plan details</h2>
                  <div className="db-pro-stat">
                    <h6 className="tit-top-curv">{currentUser?.plans[0].plan.name}</h6> 
                    <div className="db-plan-card">
                      <img src={dash1} alt="" />
                    </div>
                    <div className="db-plan-detil">
                      <ul>
                        <li>Plan name: <strong>{currentUser?.plans[0].plan.name}</strong></li>
                        <li>plan bought on: <strong>{formatDate(currentUser?.plans[0].purchaseDate)}</strong></li>
                        <li>Valid till: <strong>{formatDate(currentUser?.plans[0].expiryDate)}</strong></li>
                        {/* <li><a href="#" className="cta-3">Upgrade now</a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-12 col-xl-4 db-sec-com">
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
                </div> */}
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