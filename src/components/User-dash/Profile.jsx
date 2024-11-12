import React, { useEffect } from 'react';
import image1 from "../../images/profiles/12.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../Features/User/UserSlice';
import { Link } from 'react-router-dom';
const DashboardProfile = () => {
    const profileDetails = JSON.parse(localStorage.getItem('userData'));
    const dispatch = useDispatch()
    const profileData = useSelector(state => state.User.userProfile)

    useEffect(() => {
        dispatch(getProfile(profileDetails?._id))
    },[])

  return (
    <section>
    <div className="db">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="row">
                    <div className="col-md-12 col-lg-8">
                    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h5 mb-0">Profile Details</h2>
      </div>
      <div className="card-body">
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Name:</div>
          <div className="col-8">{profileData?.name || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Email:</div>
          <div className="col-8">{profileData?.email || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Mobile Number:</div>
          <div className="col-8">{profileData?.mobileNumber || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Gender:</div>
          <div className="col-8">{profileData?.gender || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Religion:</div>
          <div className="col-8">{profileData?.religion || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Country:</div>
          <div className="col-8">{profileData?.country || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">City:</div>
          <div className="col-8">{profileData?.city || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">State:</div>
          <div className="col-8">{profileData?.state || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Education:</div>
          <div className="col-8">{profileData?.degree || "N/A"}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 font-weight-bold">Date of Birth:</div>
          <div className="col-8">{profileData?.dob || "N/A"}</div>
        </div>
      </div>
    </div>
          </div>
                        <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
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
                                <div className="db-pro-pgog ">
                                    <span>
                                        <b className="count">90</b>%
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12 db-sec-com db-pro-stat-pg">
                            <h2 className="db-tit">Profiles views</h2>
                            <div className="db-pro-stat-view-filter cho-round-cor chosenini">
                                <div>
                                    <select className="chosen-select">
                                        <option value="">Current month</option>
                                        <option value="">Jan 2024</option>
                                        <option value="">Feb 2024</option>
                                        <option value="">Mar 2024</option>
                                        <option value="">Apr 2024</option>
                                        <option value="">May 2024</option>
                                        <option value="">Jun 2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className="chartin">
                                <canvas id="Chart_leads"></canvas>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default DashboardProfile;
