import React, { useState } from "react";
// import "./ProfileSettings.css"; // Import your CSS file here
import img15 from '../../images/profiles/15.jpg';
const Setting = () => {
  const [editAccount, setEditAccount] = useState(false);
  const [fullName, setFullName] = useState("vijaya kumar");
  const [email, setEmail] = useState("vijaykumar@gmail.com");
  const [password, setPassword] = useState("dfght3d34");
  const [confirmPassword, setConfirmPassword] = useState("asg235sf");
  const [profileType, setProfileType] = useState("General");

  const handleEditToggle = () => setEditAccount(!editAccount);
  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully");
  };

  return (
    <section>
      <div className="db">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <div className="col-md-12 db-sec-com">
                  <h2 className="db-tit">Profile settings</h2>
                  <div className="col7 fol-set-rhs">
                    {/* Profile Section */}
                    <div className="ms-write-post fol-sett-sec sett-rhs-pro">
                      <div className="foll-set-tit fol-pro-abo-ico">
                        <h4>Profile</h4>
                      </div>
                      <div className="fol-sett-box">
                        <ul>
                          <li>
                            <div className="sett-lef">
                              <div className="auth-pro-sm sett-pro-wid">
                                <div className="auth-pro-sm-img">
                                  <img src={img15} alt="" />
                                </div>
                                <div className="auth-pro-sm-desc">
                                  <h5>Anna Jaslin</h5>
                                  <p>Premium user | Illinois</p>
                                </div>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <a href="#" className="set-sig-out">
                                Sign Out
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Profile visible</h5>
                                <p>You can set who can view your profile.</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <div className="sett-select-drop">
                                <select>
                                  <option value="All users">All users</option>
                                  <option value="Premium">Premium</option>
                                  <option value="Free">Free</option>
                                  <option value="None">
                                    Not visible (No one can view your profile)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Who can send you Interest requests?</h5>
                                <p>You can set who can send you interest requests.</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <div className="sett-select-drop">
                                <select>
                                  <option value="All users">All users</option>
                                  <option value="Premium">Premium</option>
                                  <option value="Free">Free</option>
                                </select>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Account Section */}
                    <div className="ms-write-post fol-sett-sec sett-rhs-acc">
                      <div className="foll-set-tit fol-pro-abo-ico">
                        <h4>Account</h4>
                        <a onClick={handleEditToggle} className="sett-edit-btn sett-acc-edit-eve">
                          <i className="fa fa-edit" aria-hidden="true"></i> Edit
                        </a>
                      </div>
                      {editAccount ? (
                        <form className="form-com sett-pro-form" onSubmit={handleUpdate}>
                          <ul>
                            <li>
                              <div className="fm-lab">Full name</div>
                              <div className="fm-fie">
                                <input
                                  type="text"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="fm-lab">Email id</div>
                              <div className="fm-fie">
                                <input
                                  type="text"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="fm-lab">Password</div>
                              <div className="fm-fie">
                                <input
                                  type="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="fm-lab">Confirm password</div>
                              <div className="fm-fie">
                                <input
                                  type="password"
                                  value={confirmPassword}
                                  onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="fm-lab">Profile type</div>
                              <div className="fm-fie">
                                <select value={profileType} onChange={(e) => setProfileType(e.target.value)}>
                                  <option value="General">General</option>
                                  <option value="Blogger">Blogger</option>
                                  <option value="Business">Business</option>
                                  <option value="Marketer">Marketer</option>
                                </select>
                              </div>
                            </li>
                            <li>
                              <button type="submit">Update</button>
                              <button type="button" onClick={handleEditToggle} className="sett-acc-edi-can">
                                Cancel
                              </button>
                            </li>
                          </ul>
                        </form>
                      ) : (
                        <div className="fol-sett-box sett-acc-view sett-two-tab">
                          <ul>
                            <li>
                              <div>Full name</div>
                              <div>Anna Jaslin</div>
                            </li>
                            <li>
                              <div>Mobile</div>
                              <div>+01 4343 53553</div>
                            </li>
                            <li>
                              <div>Email id</div>
                              <div>loremipsum@gmail.com</div>
                            </li>
                            <li>
                              <div>Password</div>
                              <div>**********</div>
                            </li>
                            <li>
                              <div>Profile type</div>
                              <div>Platinum</div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Notifications Section */}
                    <div className="ms-write-post fol-sett-sec sett-rhs-not">
                      <div className="foll-set-tit fol-pro-abo-ico">
                        <h4>Notifications</h4>
                      </div>
                      <div className="fol-sett-box">
                        <ul>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Interest request</h5>
                                <p>Interest request email notifications</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <input type="checkbox" id="sett-not-mail" defaultChecked />
                              <label htmlFor="sett-not-mail"></label>
                            </div>
                          </li>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Chat</h5>
                                <p>New chat notifications</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <input type="checkbox" id="sett-not-fri" defaultChecked />
                              <label htmlFor="sett-not-fri"></label>
                            </div>
                          </li>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Profile views</h5>
                                <p>You get notified at the end of the day if someone views your profile.</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <input type="checkbox" id="sett-not-fol" defaultChecked />
                              <label htmlFor="sett-not-fol"></label>
                            </div>
                          </li>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>New profile match</h5>
                                <p>You receive profile match emails.</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <input type="checkbox" id="sett-not-mes" defaultChecked />
                              <label htmlFor="sett-not-mes"></label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Deactivate Section */}
                    <div className="ms-write-post fol-sett-sec sett-rhs-dea">
                      <div className="foll-set-tit fol-pro-abo-ico">
                        <h4>Deactivate account</h4>
                      </div>
                      <div className="fol-sett-box">
                        <ul>
                          <li>
                            <div className="sett-lef">
                              <div className="sett-rad-left">
                                <h5>Are you sure you want to deactivate your account?</h5>
                                <p>Once you deactivate your account, you will lose all your matches, chats, and profile details.</p>
                              </div>
                            </div>
                            <div className="sett-rig">
                              <a href="#" className="sett-dea-btn">
                                Deactivate
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            {/* <div className="col-md-4 col-lg-3">
              <div className="user-sid-bar-set">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i> My Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-cog" aria-hidden="true"></i> Profile Settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-bookmark" aria-hidden="true"></i> My Bookmarks
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true"></i> Add New Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-power-off" aria-hidden="true"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;
