import React, { useState } from 'react';
import profile1 from '../../images/profiles/4.jpg'; // Import images
import profile2 from '../../images/profiles/10.jpg'; // Import images
const ProfileSection = () => {
    const [selectedAvailability, setSelectedAvailability] = useState('All');
    const [selectedProfile, setSelectedProfile] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProfile, setCurrentProfile] = useState(null); // Store the current profile for chat

    // Function to open the chat modal and set the current profile
    const openChatModal = (profileName) => {
        setCurrentProfile(profileName);
        setIsModalOpen(true);
    };

    // Function to close the chat modal
    const closeChatModal = () => {
        setIsModalOpen(false);
        setCurrentProfile(null);
    };

    return (
        <section>
            <div className="all-weddpro all-jobs all-serexp chosenini">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 fil-mob-view">
                            <span className="filter-clo">+</span>
                            {/* START */}
                            <div className="filt-com lhs-cate">
                                <h4><i className="fa fa-search" aria-hidden="true"></i> I'm looking for</h4>
                                <div className="form-group">
                                    <select className="chosen-select">
                                        <option value="">I'm looking for</option>
                                        <option value="Men">Men</option>
                                        <option value="Women">Women</option>
                                    </select>
                                </div>
                            </div>
                            {/* END */}

                            {/* Age Filter */}
                            <div className="filt-com lhs-cate">
                                <h4><i className="fa fa-clock-o" aria-hidden="true"></i> Age</h4>
                                <div className="form-group">
                                    <select className="chosen-select">
                                        <option value="">Select age</option>
                                        {[...Array(9)].map((_, i) => (
                                            <option key={i}>{18 + i * 10} to {27 + i * 10}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* END */}

                            {/* Religion Filter */}
                            <div className="filt-com lhs-cate">
                                <h4><i className="fa fa-bell-o" aria-hidden="true"></i> Select Religion</h4>
                                <div className="form-group">
                                    <select className="chosen-select">
                                        <option>Religion</option>
                                        <option>Any</option>
                                        <option>Hindu</option>
                                        <option>Muslim</option>
                                        <option>Jain</option>
                                        <option>Christian</option>
                                    </select>
                                </div>
                            </div>
                            {/* END */}

                            {/* Location Filter */}
                            <div className="filt-com lhs-cate">
                                <h4><i className="fa fa-map-marker" aria-hidden="true"></i> Location</h4>
                                <div className="form-group">
                                    <select className="chosen-select" name="addjbmaincate">
                                        <option value="Chennai">Chennai</option>
                                        <option value="Bangaluru">Bangaluru</option>
                                        <option value="Delhi">Delhi</option>
                                    </select>
                                </div>
                            </div>
                            {/* END */}

                            {/* Availability */}
                            <div className="filt-com lhs-rati lhs-avail lhs-cate">
                                <h4><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Availability</h4>
                                <ul>
                                    {['All', 'Available', 'Offline'].map((availability, index) => (
                                        <li key={index}>
                                            <div className="rbbox">
                                                <input
                                                    type="radio"
                                                    value={availability}
                                                    name="expert_avail"
                                                    className="rating_check"
                                                    id={`exav${index + 1}`}
                                                    checked={selectedAvailability === availability}
                                                    onChange={() => setSelectedAvailability(availability)}
                                                />
                                                <label htmlFor={`exav${index + 1}`}>{availability}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* END */}

                            {/* Profile */}
                            <div className="filt-com lhs-rati lhs-ver lhs-cate">
                                <h4><i className="fa fa-shield" aria-hidden="true"></i> Profile</h4>
                                <ul>
                                    {['All', 'Premium', 'Free'].map((profile, index) => (
                                        <li key={index}>
                                            <div className="rbbox">
                                                <input
                                                    type="radio"
                                                    value={profile}
                                                    name="expert_veri"
                                                    className="rating_check"
                                                    id={`exver${index + 1}`}
                                                    checked={selectedProfile === profile}
                                                    onChange={() => setSelectedProfile(profile)}
                                                />
                                                <label htmlFor={`exver${index + 1}`}>{profile}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* END */}

                            {/* Send Query */}
                            <div className="filt-com filt-send-query">
                                <div className="send-query">
                                    <h5>What are you looking for?</h5>
                                    <p>We will help you to arrange the best match for you.</p>
                                    <a href="#!" data-toggle="modal" data-target="#expfrm">Send your queries</a>
                                </div>
                            </div>
                            {/* END */}
                        </div>

                        <div className="col-md-9">
                            <div className="short-all">
                                <div className="short-lhs">
                                    Showing <b>32</b> profiles
                                </div>
                                <div className="short-rhs">
                                    <ul>
                                        <li>Sort by:</li>
                                        <li>
                                            <div className="form-group">
                                                <select className="chosen-select">
                                                    <option value="">Most relative</option>
                                                    <option value="Newest">Date listed: Newest</option>
                                                    <option value="Oldest">Date listed: Oldest</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li><div className="sort-grid sort-grid-1"><i className="fa fa-th-large" aria-hidden="true"></i></div></li>
                                        <li><div className="sort-grid sort-grid-2 act"><i className="fa fa-bars" aria-hidden="true"></i></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="all-list-sh">
                                <ul>
                                    {/* Profile 1 */}
                                    <li>
                                        <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                                            <div className="pro-img">
                                                <a href="profile-details.html">
                                                    <img src={profile1} alt="" />
                                                </a>
                                                <div className="pro-ave" title="User currently available">
                                                    <span className="pro-ave-yes"></span>
                                                </div>
                                                <div className="pro-avl-status"><h5>Available Online</h5></div>
                                            </div>
                                            <div className="pro-detail">
                                                <h4><a href="profile-details.html">Ashley emyy</a></h4>
                                                <div className="pro-bio">
                                                    <span>B.Sc</span>
                                                    <span>IT Profession</span>
                                                    <span>29 Years old</span>
                                                    <span>Height: 155Cms</span>
                                                </div>
                                                <div className="links">
                                                    <span className="cta-chat" onClick={() => openChatModal('Ashley emyy')}>Chat now</span>
                                                    <a href="#!">WhatsApp</a>
                                                    <a href="#!" className="cta cta-sendint" data-bs-toggle="modal" data-bs-target="#sendInter">Send interest</a>
                                                    <a href="profile-details.html">More details</a>
                                                </div>
                                            </div>
                                            <span className="enq-sav" data-toggle="tooltip" title="Click to save this profile."><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                                        </div>
                                    </li>

                                    {/* Profile 2 */}
                                    <li>
                                        <div className="all-pro-box" data-useravil="avilno" data-aviltxt="Offline">
                                            <div className="pro-img">
                                                <a href="profile-details.html">
                                                    <img src={profile2} alt="" />
                                                </a>
                                                <div className="pro-ave" title="User currently available">
                                                    <span className="pro-ave-yes"></span>
                                                </div>
                                                <div className="pro-avl-status">
                                                    <span className="marqu">Last login 10 mins ago | I'll be available at 10:00 AM</span>
                                                </div>
                                            </div>
                                            <div className="pro-detail">
                                                <h4><a href="profile-details.html">Elizabeth Taylor</a></h4>
                                                <div className="pro-bio">
                                                    <span>M.A</span>
                                                    <span>Teacher</span>
                                                    <span>32 Years old</span>
                                                    <span>Height: 160Cms</span>
                                                </div>
                                                <div className="links">
                                                    <span className="cta-chat" onClick={() => openChatModal('Elizabeth Taylor')}>Chat now</span>
                                                    <a href="#!">WhatsApp</a>
                                                    <a href="#!" className="cta cta-sendint" data-bs-toggle="modal" data-bs-target="#sendInter">Send interest</a>
                                                    <a href="profile-details.html">More details</a>
                                                </div>
                                            </div>
                                            <span className="enq-sav" data-toggle="tooltip" title="Click to save this profile."><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Chat Now Modal */}
                            {isModalOpen && (
                                <div className="modal" style={{ display: 'block' }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Chat with {currentProfile}</h5>
                                                <button type="button" className="close" onClick={closeChatModal}>
                                                    <span>&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Chat interface can be implemented here */}
                                                <p>Chat interface for {currentProfile} will go here.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={closeChatModal}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
