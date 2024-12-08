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
    <>
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
            <div className={`${currentFranchise?.kycId?.approved == "Approved" ? "text-success" : "text-danger"} ms-4 mt-2 fs-4`}>
              {currentFranchise?.kycId?.approved}  ({currentFranchise?.kycId?.rejectReason})
            </div>
            <Card.Body>
              <Form id="kyc-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group controlId="aadharCardNumber">
                  <Form.Label>Aadhar Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="aadharCardNumber"
                    value={formData?.aadharCardNumber || currentFranchise?.kycId?.aadharCardNumber}
                    onChange={handleChange}
                  disabled={currentFranchise?.kycId?.aadharCardApproved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="aadharCardFront">
                  <Form.Label>Aadhar Card (Front) <span className={`${currentFranchise?.kycId?.aadharCardApproved == "Approved" ? "text-success" : "text-danger"}`}> {currentFranchise?.kycId?.aadharCardApproved}</span> ({currentFranchise?.kycId?.aadharCardReject})</Form.Label>
                  <Form.Control
                    type="file"
                    name="aadharCardFront"
                    accept="image/*"
                    onChange={handleChange}
                  disabled={currentFranchise?.kycId?.aadharCardApproved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.aadharCardApproved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.panCardApproved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="panCardFront">
                  <Form.Label>Pan Card (Front) <span className={`${currentFranchise?.kycId?.panCardApproved == "Approved" ? "text-success" : "text-danger"}`}> {currentFranchise?.kycId?.panCardApproved}</span> ({currentFranchise?.kycId?.panCardReject})</Form.Label>
                  <Form.Control
                    type="file"
                    name="panCardFront"
                    accept="image/*"
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.panCardApproved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.panCardApproved == "Approved"}
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
  <Form.Select
    name="bankName"
    value={formData.bankName || currentFranchise?.kycId?.bankName}
    onChange={handleChange}
    disabled={currentFranchise?.kycId?.approved == "Approved"}
  >
    <option value="">Select Bank</option>
    {/* Public Sector Banks */}
    <option value="State Bank of India">State Bank of India</option>
    <option value="Punjab National Bank">Punjab National Bank</option>
    <option value="Bank of Baroda">Bank of Baroda</option>
    <option value="Canara Bank">Canara Bank</option>
    <option value="Union Bank of India">Union Bank of India</option>
    <option value="Indian Bank">Indian Bank</option>
    <option value="UCO Bank">UCO Bank</option>
    <option value="Bank of Maharashtra">Bank of Maharashtra</option>
    <option value="Central Bank of India">Central Bank of India</option>
    <option value="Indian Overseas Bank">Indian Overseas Bank</option>

    {/* Private Sector Banks */}
    <option value="HDFC Bank">HDFC Bank</option>
    <option value="ICICI Bank">ICICI Bank</option>
    <option value="Axis Bank">Axis Bank</option>
    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
    <option value="IndusInd Bank">IndusInd Bank</option>
    <option value="Yes Bank">Yes Bank</option>
    <option value="IDFC First Bank">IDFC First Bank</option>
    <option value="Federal Bank">Federal Bank</option>
    <option value="South Indian Bank">South Indian Bank</option>
    <option value="RBL Bank">RBL Bank</option>
    <option value="Bandhan Bank">Bandhan Bank</option>
    <option value="City Union Bank">City Union Bank</option>
    <option value="Jammu & Kashmir Bank">Jammu & Kashmir Bank</option>
    <option value="Karur Vysya Bank">Karur Vysya Bank</option>
    <option value="Tamilnad Mercantile Bank">Tamilnad Mercantile Bank</option>
    <option value="DCB Bank">DCB Bank</option>

    {/* Regional Rural Banks */}
    <option value="Andhra Pragathi Grameena Bank">Andhra Pragathi Grameena Bank</option>
    <option value="Baroda Uttar Pradesh Gramin Bank">Baroda Uttar Pradesh Gramin Bank</option>
    <option value="Kerala Gramin Bank">Kerala Gramin Bank</option>
    <option value="Madhyanchal Gramin Bank">Madhyanchal Gramin Bank</option>
    <option value="Prathama UP Gramin Bank">Prathama UP Gramin Bank</option>

    {/* Cooperative Banks */}
    <option value="Saraswat Cooperative Bank">Saraswat Cooperative Bank</option>
    <option value="Shamrao Vithal Cooperative Bank">Shamrao Vithal Cooperative Bank</option>
    <option value="Punjab & Maharashtra Cooperative Bank">Punjab & Maharashtra Cooperative Bank</option>

    {/* Foreign Banks in India */}
    <option value="Citi Bank">Citi Bank</option>
    <option value="HSBC Bank">HSBC Bank</option>
    <option value="Standard Chartered Bank">Standard Chartered Bank</option>
    <option value="Deutsche Bank">Deutsche Bank</option>
    <option value="DBS Bank">DBS Bank</option>

    {/* Payment Banks */}
    <option value="Paytm Payments Bank">Paytm Payments Bank</option>
    <option value="Airtel Payments Bank">Airtel Payments Bank</option>
    <option value="India Post Payments Bank">India Post Payments Bank</option>
  </Form.Select>
</Form.Group>


                <Form.Group controlId="accountType">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="accountType"
                    value={formData.accountType || currentFranchise?.kycId?.accountType}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber ||currentFranchise?.kycId?.accountNumber}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="reenterAccountNumber">
                  <Form.Label>Re-enter Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="reenterAccountNumber"
                    value={formData?.reenterAccountNumber || currentFranchise?.kycId?.reenterAccountNumber}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode || currentFranchise?.kycId?.ifscCode}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="accountPassbookPhoto">
                  <Form.Label>Account Passbook Photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="accountPassbookPhoto"
                    accept="image/*"
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender || currentFranchise?.kycId?.gender}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
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
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="address"
                    value={formData.address || currentFranchise?.kycId?.address}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
                  />
                </Form.Group>

                <Form.Group controlId="maritalStatus">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="maritalStatus"
                    value={formData.maritalStatus || currentFranchise?.kycId?.maritalStatus}
                    onChange={handleChange}
                    disabled={currentFranchise?.kycId?.approved == "Approved"}
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
    </>
  );
};

export default KycForm;
