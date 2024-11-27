import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './your-css-file.css'; // Adjust based on your file structure
import Profile1 from '../../images/profiles/1.jpg';
import Profile2 from '../../images/profiles/2.jpg';
import Profile3 from '../../images/profiles/3.jpg';
import Profile4 from '../../images/profiles/4.jpg';
import Profile5 from '../../images/profiles/5.jpg';
import Profile7 from '../../images/profiles/profile-large.jpg';
import Profile8 from '../../images/icon/pro-city.png';
import Profile9 from '../../images/icon/pro-age.png';
import { getCurrentUser, getProfile, sendRequest } from '../../Features/User/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import MySwiperComponent from '../Home/MySwiperComponent';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../utils/config';
// import Profile10 from '../../images/icon/pro-height.png';
// import Profile11 from '../../images/icon/pro-job.png';
const ProfileDetail = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
    const {id} = useParams()
    const dispatch = useDispatch()
    const profileData = useSelector(state => state.User?.userProfile)
    const currentUser = useSelector(state => state.User?.currentUser)
    useEffect(() => {
        dispatch(getProfile(id))
        dispatch(getCurrentUser(profileDetails?._id))
    }, []);
    const isConnected = () => {
        return currentUser?.connections?.includes(id);
    };
    const hasSentRequest = profileData?.requestReceived?.includes(profileDetails?._id) || profileData?.connections?.includes(profileDetails?._id)

    function convertToNormalFormat(isoDate) {
        const date = new Date(isoDate);  // Convert the ISO string to a Date object
    
        // Format the date into a more readable format (e.g., "January 12, 2004")
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const sendRequestHandler =async () => {
        try {
            await dispatch(sendRequest({ senderId: profileDetails._id, receiverId: id }))
            toast.success("Request sent successfully!");
        } catch (error) {
            toast.error("Failed to send request.");
        }
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

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section>
            <div className="profi-pg profi-ban">
                <div className="">
                    <div className="">
                        <div className="profile">
                            <div className="pg-pro-big-im">
                                <div className="s1">
                                    <img src={profileData?.profilePicture} loading="lazy" className="pro" alt="" />
                                </div>
                               {
                                isLoggedIn() ?  <div className="s3">
                                <Link to={`/dashboard/chat/${id}`} className="cta fol cta-chat">Chat now</Link>
                                <button 
                            className="cta cta-sendint" 
                            onClick={sendRequestHandler} 
                            disabled={hasSentRequest} 
                        >
                            {hasSentRequest ? 'Request Sent' : 'Send interest'}
                        </button>

                            </div> : null
                               }
                            </div>
                        </div>
                        <div className="profi-pg profi-bio">
                            <div className="lhs">
                                <div className="pro-pg-intro">
                                    <h1>{profileData?.name}</h1>
                                    <ul>
                                        <li>
                                            <div>
                                                <img src={Profile8} loading="lazy" alt="" />
                                                <span>City: <strong>{profileData?.city}</strong></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src={Profile9} loading="lazy" alt="" />
                                                <span>Dob: <strong>{convertToNormalFormat(profileData?.dob)}</strong></span>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div>
                                                <img src={Profile9} loading="lazy" alt="" />
                                                <span>Job: <strong>{profileData?.jobType ? profileData?.jobType : 'NA'}</strong></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pr-bio-c pr-bio-abo">
                                    <h3>About</h3>
                                    <p>{profileData?.about}</p>
                                </div>

                                <div className="pr-bio-c pr-bio-gal" id="gallery">
                                    <h3>Photo gallery</h3>
                                    <MySwiperComponent profileData={profileData}/>
                                </div>

                                {isConnected() ? <div className="pr-bio-c pr-bio-conta">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li><span><i className="fa fa-mobile" aria-hidden="true"></i><b>Phone:</b>{profileData?.mobileNumber}</span></li>
                                        <li><span><i className="fa fa-envelope-o" aria-hidden="true"></i><b>Email:</b>{profileData?.email}</span></li>
                                        <li><span><i className="fa fa-map-marker" aria-hidden="true"></i><b>Address: </b>{profileData?.address}</span></li>
                                    </ul>
                                </div> : null}

                                <div className="pr-bio-c pr-bio-info">
  <h3>Personal Information</h3>
  <ul>
    <li><b>Name:</b> {profileData?.name}</li>
    <li><b>Email:</b> {profileData?.email}</li>
    <li><b>Mobile Number:</b> {profileData?.mobileNumber}</li>
    <li><b>Gender:</b> {profileData?.gender}</li>
    <li><b>Country:</b> {profileData?.country}</li>
    <li><b>State:</b> {profileData?.state}</li>
    <li><b>City:</b> {profileData?.city}</li>
    <li><b>Religion:</b> {profileData?.religion}</li>
    <li><b>Community:</b> {profileData?.community}</li>
    <li><b>Sub-Community:</b> {profileData?.subCommunity}</li>
    <li><b>Gotra:</b> {profileData?.gotra}</li>
    <li><b>Caste:</b> {profileData?.caste}</li>
    <li><b>Date of Birth:</b> {profileData?.dob}</li>
    <li><b>Height:</b> {profileData?.height} ft</li>
    <li><b>Weight:</b> {profileData?.weight} kg</li>
    <li><b>Address:</b> {profileData?.address}</li>
    <li><b>About:</b> {profileData?.about}</li>
    <li><b>Hobbies:</b> {profileData?.hobbies}</li>
    <li><b>Interests:</b> {profileData?.interests}</li>
    <li><b>Marital Status:</b> {profileData?.maritalStatus}</li>
    <li><b>Job Type:</b> {profileData?.jobType}</li>
    <li><b>Company Name:</b> {profileData?.companyName}</li>
    <li><b>Salary:</b> {profileData?.salary}</li>
    <li><b>Total Experience:</b> {profileData?.totalExperience}</li>
    <li><b>Degree:</b> {profileData?.degree}</li>
    <li><b>School:</b> {profileData?.school}</li>
    <li><b>College:</b> {profileData?.college}</li>
    <li><b>Father's Name:</b> {profileData?.fatherName}</li>
    <li><b>Mother's Name:</b> {profileData?.motherName}</li>
    <li><b>Father's Occupation:</b> {profileData?.fathersOccupation}</li>
    <li><b>Mother's Occupation:</b> {profileData?.mothersOccupation}</li>
    <li><b>Number of Brothers:</b> {profileData?.numberOfBrothers}</li>
    {profileData?.brother1Name && (
      <>
        <li><b>Brother 1 Name:</b> {profileData?.brother1Name}</li>
        <li><b>Brother 1 Occupation:</b> {profileData?.brother1Occupation}</li>
        <li><b>Brother 1 Marital Status:</b> {profileData?.brother1MaritalStatus}</li>
      </>
    )}
    {profileData?.brother2Name && (
      <>
        <li><b>Brother 2 Name:</b> {profileData?.brother2Name}</li>
        <li><b>Brother 2 Occupation:</b> {profileData?.brother2Occupation}</li>
        <li><b>Brother 2 Marital Status:</b> {profileData?.brother2MaritalStatus}</li>
      </>
    )}
    <li><b>Number of Sisters:</b> {profileData?.numberOfSisters}</li>
    {profileData?.sister1Name && (
      <>
        <li><b>Sister 1 Name:</b> {profileData?.sister1Name}</li>
        <li><b>Sister 1 Occupation:</b> {profileData?.sister1Occupation}</li>
        <li><b>Sister 1 Marital Status:</b> {profileData?.sister1MaritalStatus}</li>
      </>
    )}
    {profileData?.sister2Name && (
      <>
        <li><b>Sister 2 Name:</b> {profileData?.sister2Name}</li>
        <li><b>Sister 2 Occupation:</b> {profileData?.sister2Occupation}</li>
        <li><b>Sister 2 Marital Status:</b> {profileData?.sister2MaritalStatus}</li>
      </>
    )}
    <li><b>Manglik:</b> {profileData?.manglik}</li>
    <li><b>Zodiac Sign:</b> {profileData?.zodiacSign}</li>
    <li><b>Time of Birth:</b> {profileData?.timeOfBirth}</li>
    <li><b>City of Birth:</b> {profileData?.cityOfBirth}</li>
    <li><b>Any Disease:</b> {profileData?.anyDisease}</li>
    <li><b>Disease Name:</b> {profileData?.diseaseName}</li>
    <li><b>Blood Group:</b> {profileData?.bloodGroup}</li>
    <li><b>Physical Challenges:</b> {profileData?.physicalChallenges}</li>
  </ul>
</div>


                                {/* <div className="pr-bio-c pr-bio-hob">
                                    <h3>Hobbies</h3>
                                    <ul>
                                        <li><span>Modelling</span></li>
                                        <li><span>Watching movies</span></li>
                                        <li><span>Playing volleyball</span></li>
                                        <li><span>Hangout with family</span></li>
                                        <li><span>Adventure travel</span></li>
                                        <li><span>Books reading</span></li>
                                        <li><span>Music</span></li>
                                        <li><span>Cooking</span></li>
                                        <li><span>Yoga</span></li>
                                    </ul>
                                </div> */}

                                {/* <div className="pr-bio-c menu-pop-soci pr-bio-soc">
                                    <h3>Social media</h3>
                                    <ul>
                                        <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>

                            {/* <div className="rhs">
                                <div className="prof-rhs-help">
                                    <div className="help-inner">
                                        <h3>Help & Support</h3>
                                        <p>If you need help, please contact our support team.</p>
                                        <span className="ct-a cta-chat">Chat with us</span>
                                    </div>
                                </div>
                                <h3>Related Profiles</h3>
                                <Slider {...settings}>
                                    <div>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src={Profile1} alt="" />
                                                <span className="badge badge-success">25 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Angelina</h5>
                                                <span>Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src={Profile2} alt="" />
                                                <span className="badge badge-danger">24 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Jennifer</h5>
                                                <span>Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src={Profile3} alt="" />
                                                <span className="badge badge-warning">23 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Rachael</h5>
                                                <span>Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src={Profile4} alt="" />
                                                <span className="badge badge-info">22 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Sarah</h5>
                                                <span>Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="wedd-rel-box">
                                            <div className="wedd-rel-img">
                                                <img src={Profile5} alt="" />
                                                <span className="badge badge-primary">24 Years old</span>
                                            </div>
                                            <div className="wedd-rel-con">
                                                <h5>Sara</h5>
                                                <span>Available</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetail;
