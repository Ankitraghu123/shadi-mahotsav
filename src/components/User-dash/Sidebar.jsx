import React, { useEffect, useState } from 'react'
import { deleteProfilePicture, editProfilePicture, getCurrentUser, getProfile } from '../../Features/User/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink, OverlayTrigger, Tooltip } from 'react-bootstrap';


const Sidebar = () => {
   const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
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
    <div className="db-nav">
              <div className="db-nav-pro">
                <img
                  src={imagePreview || profileData?.profilePicture}
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="edit-options">
                <OverlayTrigger
        placement="top" // Tooltip placement
        overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>} // Tooltip text for Edit
      >
        <button
          onClick={() => setIsEditing(true)}
          className="edit-btn"
        >
          <MdEdit />
        </button>
      </OverlayTrigger>

      {/* Delete Button with Tooltip */}
      <OverlayTrigger
        placement="top" // Tooltip placement
        overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>} // Tooltip text for Delete
      >
        <button
          onClick={handleDeleteImage}
          className="delete-btn"
        >
          <MdDelete />
        </button>
      </OverlayTrigger>
                </div>
                {isEditing && (
                  <div className="image-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <button onClick={handleSaveImage}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
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
                  <li>
                    <NavLink
                      to="/dashboard/user-setting"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/logout"
                    >
                      Logouts
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
  )
}

export default Sidebar