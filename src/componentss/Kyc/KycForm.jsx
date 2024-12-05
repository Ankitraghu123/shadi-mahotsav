import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import achieve from '../../mykyc.jpg';
import { useDispatch, useSelector } from "react-redux";
import { createKyc } from "../../Features/Franchise/FranchiseSlice";

const KycForm = () => {
  const dispatch = useDispatch()
  const currentFranchise = useSelector(state => state.Franchise.currentFranchise?.franchise)
  const [formData, setFormData] = useState({
    aadharCardNumber: "",
    panCardNumber: "",
    bankName: "",
    accountType: "",
    accountHolderName: "",
    accountNumber: "",
    reenterAccountNumber: "",
    ifscCode: "",
    dob: "",
    gender: "male",
    email: "",
    address: "",
    maritalStatus: "",
    aadharCardFront: "",
    aadharCardBack: "",
    panCardFront: "",
    panCardBack: "",
    accountPassbookPhoto: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    aadharCardFront: "",
    aadharCardBack: "",
    panCardFront: "",
    panCardBack: "",
    accountPassbookPhoto: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if formData has all the data
    console.log("Form data before submission:", formData);
  
    const formDataToSend = new FormData();
  
    // Append all form fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });
  
    // Adding franchise ID explicitly
    formDataToSend.append("franchiseId", currentFranchise?._id);
  
    // Debug: Check the FormData keys and values
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  
    // Dispatch the action with formDataToSend
    dispatch(createKyc(formDataToSend ))
  };
  return (
    <Container>
      <div id="margin-top" className="achivementimage mb_30 position-relative">
        <div className="row">
          <div className="col-12">
            <img src={achieve} className="img-fluid w-100" alt="Achievement" />
          </div>
        </div>
      </div>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h3>KYC Form</h3>
            </Card.Header>
            <Card.Body>
              <Form id="kyc-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="aadharCardNumber">
                  <Form.Label>Aadhar Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="aadharCardNumber"
                    value={formData?.aadharCardNumber || currentFranchise?.kycId?.aadharCardNumber}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="aadharCardFront">
                  <Form.Label>Aadhar Card (Front)</Form.Label>
                  <Form.Control
                    type="file"
                    name="aadharCardFront"
                    accept="image/*"
                    onChange={handleChange}
                    
                  />
                  {imagePreviews.aadharCardFront ? (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.aadharCardFront}
                        alt="Aadhar Front"
                        className="img-fluid"
                      />
                    </div>
                  ) : currentFranchise?.kycId?.aadharCardFront && <div className="mt-3">
                  <img
                    src={currentFranchise?.kycId?.aadharCardFront}
                    alt="Aadhar Front"
                    className="img-fluid"
                  />
                </div>}
                </Form.Group>

                <Form.Group controlId="aadharCardBack">
                  <Form.Label>Aadhar Card (Back)</Form.Label>
                  <Form.Control
                    type="file"
                    name="aadharCardBack"
                    accept="image/*"
                    onChange={handleChange}
                    
                  />
                  {imagePreviews.aadharCardBack ? (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.aadharCardBack}
                        alt="Aadhar Back"
                        className="img-fluid"
                      />
                    </div>
                  ) :currentFranchise?.kycId?.aadharCardBack && (
                    <div className="mt-3">
                      <img
                        src={currentFranchise?.kycId?.aadharCardBack}
                        alt="Aadhar Back"
                        className="img-fluid"
                      />
                    </div>
                  )  }
                </Form.Group>

                <Form.Group controlId="panCardNumber">
                  <Form.Label>Pan Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="panCardNumber"
                    value={formData.panCardNumber || currentFranchise?.kycId?.panCardNumber}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="panCardFront">
                  <Form.Label>Pan Card (Front)</Form.Label>
                  <Form.Control
                    type="file"
                    name="panCardFront"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {imagePreviews.panCardFront ? (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.panCardFront}
                        alt="Pan Card Front"
                        className="img-fluid"
                      />
                    </div>
                  ) : currentFranchise?.kycId?.panCardFront && (
                    <div className="mt-3">
                      <img
                        src={currentFranchise?.kycId?.panCardFront}
                        alt="Pan Card Front"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="panCardBack">
                  <Form.Label>Pan Card (Back)</Form.Label>
                  <Form.Control
                    type="file"
                    name="panCardBack"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {imagePreviews.panCardBack ? (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.panCardBack}
                        alt="Pan Card Back"
                        className="img-fluid"
                      />
                    </div>
                  ): currentFranchise?.kycId?.panCardBack &&(
                    <div className="mt-3">
                      <img
                        src={currentFranchise?.kycId?.panCardBack}
                        alt="Pan Card Back"
                        className="img-fluid"
                      />
                    </div>
                  ) }
                </Form.Group>

                <Form.Group controlId="bankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankName"
                    value={formData.bankName || currentFranchise?.kycId?.bankName}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="accountType">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="accountType"
                    value={formData.accountType || currentFranchise?.kycId?.accountType}
                    onChange={handleChange}
                    
                  >
                    <option value="">--- Choose ---</option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="accountHolderName">
                  <Form.Label>Account Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountHolderName"
                    value={formData.accountHolderName || currentFranchise?.kycId?.accountHolderName}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber ||currentFranchise?.kycId?.accountNumber}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="reenterAccountNumber">
                  <Form.Label>Re-enter Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="reenterAccountNumber"
                    value={formData?.reenterAccountNumber || currentFranchise?.kycId?.reenterAccountNumber}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode || currentFranchise?.kycId?.ifscCode}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="accountPassbookPhoto">
                  <Form.Label>Account Passbook Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="accountPassbookPhoto"
                    accept="image/*"
                    onChange={handleChange}
                    
                  />
                  {imagePreviews.accountPassbookPhoto ? (
                    <div className="mt-3">
                      <img
                        src={imagePreviews.accountPassbookPhoto}
                        alt="Account Passbook Photo"
                        className="img-fluid"
                      />
                    </div>
                  ): currentFranchise?.kycId?.accountPassbookPhoto && (
                    <div className="mt-3">
                      <img
                        src={currentFranchise?.kycId?.accountPassbookPhoto}
                        alt="Account Passbook Photo"
                        className="img-fluid"
                      />
                    </div>
                  )}
                </Form.Group>

                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob || currentFranchise?.kycId?.dob}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender || currentFranchise?.kycId?.gender}
                    onChange={handleChange}
                    
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email || currentFranchise?.kycId?.email}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="address"
                    value={formData.address || currentFranchise?.kycId?.address}
                    onChange={handleChange}
                    
                  />
                </Form.Group>

                <Form.Group controlId="maritalStatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="maritalStatus"
                    value={formData.maritalStatus || currentFranchise?.kycId?.maritalStatus}
                    onChange={handleChange}
                    
                  >
                    <option value="">--- Choose ---</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default KycForm;
