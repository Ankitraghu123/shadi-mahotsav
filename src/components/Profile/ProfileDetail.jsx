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
// import Profile10 from '../../images/icon/pro-height.png';
// import Profile11 from '../../images/icon/pro-job.png';
const ProfileDetail = () => {
    useEffect(() => {
        // If needed, any additional initialization can go here
    }, []);

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
                                    <img src={Profile7} loading="lazy" className="pro" alt="" />
                                </div>
                                <div className="s3">
                                    <a href="#!" className="cta fol cta-chat">Chat now</a>
                                    <span className="cta cta-sendint" data-toggle="modal" data-target="#sendInter">Send interest</span>
                                </div>
                            </div>
                        </div>
                        <div className="profi-pg profi-bio">
                            <div className="lhs">
                                <div className="pro-pg-intro">
                                    <h1>Angelina Jolie</h1>
                                    <div className="pro-info-status">
                                        <span className="stat-1"><b>100</b> viewers</span>
                                        <span className="stat-2"><b>Available</b> online</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <div>
                                                <img src={Profile8} loading="lazy" alt="" />
                                                <span>City: <strong>New York</strong></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src={Profile9} loading="lazy" alt="" />
                                                <span>Age: <strong>21</strong></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src='' loading="lazy" alt="" />
                                                <span>Height: <strong>5.7</strong></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <img src='' loading="lazy" alt="" />
                                                <span>Job: <strong>Working</strong></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pr-bio-c pr-bio-abo">
                                    <h3>About</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                </div>

                                <div className="pr-bio-c pr-bio-gal" id="gallery">
                                    <h3>Photo gallery</h3>
                                    <div id="image-gallery">
                                        <div className="pro-gal-imag">
                                            <div className="img-wrapper">
                                                <a href="#!"><img src="images/profiles/1.jpg" className="img-responsive" alt="" /></a>
                                                <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        <div className="pro-gal-imag">
                                            <div className="img-wrapper">
                                                <a href="#!"><img src="images/profiles/6.jpg" className="img-responsive" alt="" /></a>
                                                <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        <div className="pro-gal-imag">
                                            <div className="img-wrapper">
                                                <a href="#!"><img src="images/profiles/14.jpg" className="img-responsive" alt="" /></a>
                                                <div className="img-overlay"><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pr-bio-c pr-bio-conta">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li><span><i className="fa fa-mobile" aria-hidden="true"></i><b>Phone:</b>+92 (8800) 68 - 8960</span></li>
                                        <li><span><i className="fa fa-envelope-o" aria-hidden="true"></i><b>Email:</b>angelinajoliewed@gmail.com</span></li>
                                        <li><span><i className="fa fa-map-marker" aria-hidden="true"></i><b>Address: </b>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</span></li>
                                    </ul>
                                </div>

                                <div className="pr-bio-c pr-bio-info">
                                    <h3>Personal information</h3>
                                    <ul>
                                        <li><b>Name:</b> Angelina Jolie</li>
                                        <li><b>Father's name:</b> John Smith</li>
                                        <li><b>Family name:</b> Joney family</li>
                                        <li><b>Age:</b> 24</li>
                                        <li><b>Date of birth:</b> 03 Jan 1998</li>
                                        <li><b>Height:</b> 167cm</li>
                                        <li><b>Weight:</b> 65kg</li>
                                        <li><b>Degree:</b> MSC Computer Science</li>
                                        <li><b>Religion:</b> Any</li>
                                        <li><b>Profession:</b> Working</li>
                                        <li><b>Company:</b> Google</li>
                                        <li><b>Position:</b> Web Developer</li>
                                        <li><b>Salary:</b> $1000 p/m</li>
                                    </ul>
                                </div>

                                <div className="pr-bio-c pr-bio-hob">
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
                                </div>

                                <div className="pr-bio-c menu-pop-soci pr-bio-soc">
                                    <h3>Social media</h3>
                                    <ul>
                                        <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                        <li><a href="#!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="rhs">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetail;
