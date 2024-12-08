// src/components/DashboardLayout.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import DashboardProfile from "./User-dash/Profile";
import ChatList from "./User-dash/ChatList";
import Interests from "./User-dash/Interests";
import PlanDetails from "./User-dash/PlanDetails";
import Setting from "./User-dash/Setting";
import MainDash from "./User-dash/MainDash";
import ChatPage from "./User-dash/ChatPage";
import profiles from '../images/profiles/12.jpg'; // Import images
import { useDispatch, useSelector } from "react-redux";
import { deleteProfilePicture, editProfilePicture, getCurrentUser } from "../Features/User/UserSlice";
import Sidebar from "./User-dash/Sidebar";
import {toast} from 'react-toastify'
import { Button } from "react-bootstrap";

const DashboardLayout = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const {editedProfilePicture, deletedProfilePicture} = useSelector(state => state.User)

  useEffect(() => {
    dispatch(getCurrentUser(profileDetails?._id));
  }, [profileDetails?._id, dispatch,editedProfilePicture, deletedProfilePicture]);

  const profileData = useSelector(state => state.User.currentUser);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    // console.log(file)
    // console.log(event.target.files)
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const LogoutHandler = () => {
    localStorage.clear();
    toast.success('User Logged Out')
    setTimeout(() => navigate('/'), 100);
  }

  const handleSaveImage = () => {
    if (file) {
      console.log(file)
      dispatch(editProfilePicture({ userId: profileDetails?._id, newImage:file }));
    }
    setIsEditing(false);
  };

  const handleDeleteImage = () => {
    
    dispatch(deleteProfilePicture(profileDetails?._id ));
    setImagePreview('')
  };

  return (
    <section id="new-side" className="db">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
          <div className="db-nav overflow-hidden ">
              <div className="db-nav-pro">
                <img
                  src={imagePreview || profileData?.profilePicture}
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="edit-options">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="edit-btn"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={handleDeleteImage}
                    className="delete-btn"
                  >
                    <MdDelete/>
                  </button>
                </div>
                {isEditing && (
                  <div className="image-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <Button style={{marginRight:'5px',marginTop:'5px'}} onClick={handleSaveImage}>Save</Button>
                    <Button style={{marginTop:'5px'}}  onClick={() => setIsEditing(false)}>Cancel</Button>
                  </div>
                )}
              </div>
              <div className="db-nav-list">
                <ul>
                  <li>
                    <NavLink
                      to="/dashboard/main"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/user-profile"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/user-interests"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Interests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/chat"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      ChatList
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/plane"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Plan
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="/dashboard/user-setting"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Settings
                    </NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      onClick={LogoutHandler}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <Routes>
              <Route path="main" element={<MainDash />} />
              <Route path="user-profile" element={<DashboardProfile />} />
              <Route path="user-interests" element={<Interests />} />
              <Route path="chat" element={<ChatList />} />
              <Route path="chat/:id" element={<ChatPage />} />
              <Route path="plane" element={<PlanDetails />} />
              {/* <Route path="user-setting" element={<Setting />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
