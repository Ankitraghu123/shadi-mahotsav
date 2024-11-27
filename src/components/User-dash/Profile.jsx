import React, { useEffect, useState } from "react";
import image1 from "../../images/profiles/12.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from 'react-bootstrap';

import {
  addImageToGallery,
  DeleteImageFromGallery,
  EditImageInGallery,
  editProfilePicture,
  getProfile,
  getProfileCompletion,
} from "../../Features/User/UserSlice";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import MySwiperComponent from "../Home/MySwiperComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const DashboardProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const profileDetails = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.User.userProfile);
  const profileCompletionData = useSelector(
    (state) => state.User?.profileCompletion
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const { imageAddedToGallery,imageEditedInGallery,imageDeletedFromGallery } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(getProfile(profileDetails?._id));
    dispatch(getProfileCompletion(profileDetails?._id));
  }, [imageAddedToGallery,imageEditedInGallery,imageDeletedFromGallery]);

  // Format the date using toLocaleString with specific options
  const calculateAge = (birthDate) => {
    const currentDate = new Date(); // Get the current date
    const birthDateObj = new Date(birthDate); // Convert the birthdate string to a Date object

    let age = currentDate.getFullYear() - birthDateObj.getFullYear(); // Calculate the difference in years
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth(); // Calculate the month difference

    // If the current month is before the birth month or it's the same month but the current day is before the birth day, subtract 1 from age
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("userId", profileDetails._id);
      dispatch(addImageToGallery(formData));
      setSelectedImage(null); // Clear the selection after uploading
    }
  };

  const handleEditClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleEditImageChange = (e) => {
    setNewImage(e.target.files[0]); // Capture the new file
  };

  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append("image", newImage);
    formData.append("userId", profileData?._id);
    formData.append("fileId", selectedImage?.fileId);

    // console.log(selectedImage.fileId)
    dispatch(EditImageInGallery(formData))
    // console.log("Updated image:", newImage);
    setShowModal(false);
  };

    const handleDeleteClick = (image) => {
      dispatch(DeleteImageFromGallery({userId:profileData?._id,fileId:image.fileId}))
    }
  return (
    <section>
      <div className="db">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row d-flex align-items-stretch">
                {/* Profile Details Card */}
                <div className="col-md-12 col-lg-8 mb-4 d-flex align-items-stretch">
                  <div className="card shadow-sm w-100">
                    <div className="card-header bg-primary text-white">
                      <h2 className="h5 mb-0">Profile Details</h2>
                    </div>
                    <div className="card-body">
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Name:</div>
                        <div className="col-8">
                          {profileData?.name || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Email:</div>
                        <div className="col-8">
                          {profileData?.email || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">
                          Mobile Number:
                        </div>
                        <div className="col-8">
                          {profileData?.mobileNumber || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Gender:</div>
                        <div className="col-8">
                          {profileData?.gender || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Religion:</div>
                        <div className="col-8">
                          {profileData?.religion || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Country:</div>
                        <div className="col-8">
                          {profileData?.country || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">City:</div>
                        <div className="col-8">
                          {profileData?.city || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">State:</div>
                        <div className="col-8">
                          {profileData?.state || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Education:</div>
                        <div className="col-8">
                          {profileData?.education || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Age:</div>
                        <div className="col-8">
                          {calculateAge(profileData?.dob) || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Marital Status:</div>
                        <div className="col-8">
                          {profileData?.maritalStatus || "N/A"}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4 font-weight-bold">Profile For:</div>
                        <div className="col-8">
                          {profileData?.profileFor || "N/A"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Completion Card */}
                <div className="col-md-12 col-lg-4 mb-4 d-flex align-items-stretch">
                  <div className="card shadow-sm w-100">
                    <div className="db-pro-stat">
                      <h6>Profile completion</h6>
                      <div className="dropdown">
                        <Link
                          type="button"
                          className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                          to={"/edit"}
                        >
                          <MdEdit />
                        </Link>
                      </div>
                      <div className="db-pro-pgog">
                        <span>
                          <b className="count">
                            {profileCompletionData?.completionPercentage}
                          </b>
                          %
                        </span>
                      </div>
                      <div className="remaining-fields mt-3">
                        <h6 className="text-muted">Remaining Fields</h6>
                        <ul className="list-group list-group-flush"  style={{
    maxHeight: "150px", // Set the height you want
    overflowY: "auto",  // Enable vertical scrolling
  }}>
                          {profileCompletionData?.remainingFieldsWithPercentage?.map(
                            (field, index) => (
                              <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <span className="text-muted">
                                  {field.field}
                                </span>
                                <span className="badge bg-secondary">
                                  {field.percentage}%
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="profileImageUpload" className="form-label">
                  Upload Posts
                </label>
                <input
                  type="file"
                  id="profileImageUpload"
                  className="form-control"
                  onChange={handleImageChange}
                />
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleImageUpload}
                  disabled={!selectedImage}
                >
                  Save Image
                </button>
              </div>
              <Swiper
        slidesPerView={4}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {profileData?.gallery?.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="Profile Slide" height="200px" width="100%" />
            <button onClick={() => handleEditClick(image)}><MdEdit /></button>
            <button onClick={() => handleDeleteClick(image)}><MdDelete /></button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Edit Image Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Current Image:</h5>
            <img src={selectedImage?.url} alt="Selected" height="200px" width="100%" />
            <h5>Upload New Image:</h5>
            <input type="file" onChange={handleEditImageChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

             
              {/* Additional sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardProfile;
