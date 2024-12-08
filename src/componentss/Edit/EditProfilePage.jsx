import React, { useEffect, useState } from "react";
import { Accordion, Table, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfilePicture, editFranchise, editProfilePicture, getCurrentFranchise } from "../../Features/Franchise/FranchiseSlice";
import { MdDelete, MdEdit } from "react-icons/md";

const EditProfilePage = () => {
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleProfilePictureSubmit = async () => {
    if (!newProfilePicture) {
      alert("Please select a picture to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("franchiseId", profileData.id);
    formData.append("newImage", newProfilePicture);

    dispatch(editProfilePicture(formData))
  };

  const dispatch = useDispatch()
  const [profileData, setProfileData] = useState({
    id: "",
    name: "",
    email: "",
    mobileNumber: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    if (currentFranchise) {
      setProfileData({
        id: currentFranchise._id,
        name: currentFranchise.name || "",
        email: currentFranchise.email || "",
        mobileNumber: currentFranchise.mobileNumber || "",
        state: currentFranchise.state || "",
        city: currentFranchise.city || "",
      });
    }
  }, [currentFranchise]);

  const deleteProfileHandler = () => {
    setNewProfilePicture(null)
    dispatch(deleteProfilePicture(currentFranchise?._id))
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editFranchise(profileData))
    // Here you would typically send the data to your backend
  };

  return (
    <div id="margin-top" className="">
      {/* Profile Header */}
      <div
        className="card mb-5"
        style={{
          backgroundImage:
            "url('https://www.idigitalpreneur.com/assets/useradmin/dashboard/my_earnings.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <div className="d-flex flex-column justify-content-center align-items-center">
  <img
    src={newProfilePicture ? URL.createObjectURL(newProfilePicture) : currentFranchise?.profilePicture}
    className="rounded-circle"
    alt="Profile"
    style={{ width: "120px", height: "120px", objectFit: "cover" }}
  />

  <div style={{ marginTop: "10px" }}>
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      style={{ display: "none" }}
      id="profile-picture-upload"
    />
    <label htmlFor="profile-picture-upload" className="btn btn-link p-0 me-2 bg-transparent">
      <MdEdit />
    </label>
    <button
      onClick={() => deleteProfileHandler()}
      className="btn btn-link p-0 text-danger bg-transparent"
    >
      <MdDelete />
    </button>
    <button
      onClick={handleProfilePictureSubmit}
      className="btn btn-link p-0 text-success bg-transparent ms-2"
    >
      save
    </button>
  </div>

</div>
<div className="text-center mt-3" id="profile-text">
            <p className="mb-0 fw-bold">{profileData?.name}</p>
            <span>{profileData?.email}</span>
          </div>
      </div>

      {/* Editable Profile Form */}
      <div className="card">
        <div className="card-body">
          <h4 className="text-center fw-bold">Your Profile</h4>
          <Accordion defaultActiveKey="0" flush>
            {/* Personal Details */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Personal Details</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={handleSubmit}>
                  <Table bordered responsive>
                    <tbody>
                      <tr>
                        <td>
                          <b>Name</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                            disabled="true"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Email</b>
                        </td>
                        <td>
                          <Form.Control
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Phone</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="mobileNumber"
                            value={profileData.mobileNumber}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>State</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="state"
                            value={profileData.state}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>City</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="city"
                            value={profileData.city}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>

            {/* Billing Address */}
            {/*<Accordion.Item eventKey="1">
              <Accordion.Header>Billing Address</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={handleSubmit}>
                  <Table bordered responsive>
                    <tbody>
                      <tr>
                        <td>
                          <b>Full Name</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Address Line 1</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="custAddr1"
                            value={profileData.custAddr1}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Address Line 2</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="custAddr2"
                            value={profileData.custAddr2}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>City</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="city"
                            value={profileData.city}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>State</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="state"
                            value={profileData.state}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Zip</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="custPincode"
                            value={profileData.custPincode}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Aadhar No</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="custAadharNo"
                            value={profileData.custAadharNo}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>PAN Details</b>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            name="custPanNo"
                            value={profileData.custPanNo}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>*/}

            {/* Account Details */}
            {/* <Accordion.Item eventKey="2">
              <Accordion.Header>Account Details</Accordion.Header>
              <Accordion.Body>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td>
                        <b>Name</b>
                      </td>
                      <td>{profileData.accHolder}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Account Type</b>
                      </td>
                      <td>{profileData.accType}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Bank Name</b>
                      </td>
                      <td>{profileData.bankName}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Account Number</b>
                      </td>
                      <td>{profileData.accNo}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>IFSC Code</b>
                      </td>
                      <td>{profileData.ifscCode}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item> */}

            {/* Account Management */}
            {/* <Accordion.Item eventKey="3">
              <Accordion.Header>Account Management</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter old password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Change Password
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
