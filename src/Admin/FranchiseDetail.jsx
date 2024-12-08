import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  approveKYC,
  getSingleFranchise,
  approveAadharCard,
  approvePanCard,
  rejectKYC,
  rejectAadharCard,
  rejectPanCard,
} from "../Features/Franchise/FranchiseSlice";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const FranchiseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const franchiseDetail = useSelector(
    (state) => state.Franchise.franchiseDetail?.franchise
  );

  const [showModal, setShowModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectAction, setRejectAction] = useState(null);

  useEffect(() => {
    dispatch(getSingleFranchise(id));
  }, [dispatch, id]);

  if (!franchiseDetail) {
    return <p>Loading franchise details...</p>;
  }

  const handleApproveKYC = () => {
    dispatch(approveKYC(franchiseDetail._id));
  };

  const handleApproveAadhar = () => {
    dispatch(approveAadharCard(franchiseDetail._id));
  };

  const handleApprovePan = () => {
    dispatch(approvePanCard(franchiseDetail._id));
  };

  const handleReject = (action) => {
    setRejectAction(() => action);
    setShowModal(true);
  };

  const handleSubmitReject = () => {
    console.log("rejected")
    if (rejectAction && rejectReason.trim()) {
      dispatch(rejectAction({id:franchiseDetail?._id, reason:rejectReason}))
    }
    setShowModal(false);
    setRejectReason("");
  };

  const {
    name,
    email,
    mobileNumber,
    country,
    state,
    city,
    pinCode,
    code,
    profilePicture,
    kycId,
  } = franchiseDetail;

  return (
    <Container className="py-4">
      {/* Profile Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col xs={12} className="text-center">
              <Image
                src={profilePicture}
                alt="Profile"
                roundedCircle
                fluid
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </Col>
            <Col xs={12} className="text-center mt-3">
              <h2>{name}</h2>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Mobile Number:</strong> {mobileNumber}
              </p>
              <p>
                <strong>Code:</strong> {code}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Location Section */}
      <Card className="mb-4">
        <Card.Body>
          <h3 className="mb-3">Location Details</h3>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>State:</strong> {state}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Pin Code:</strong> {pinCode || "N/A"}
          </p>
        </Card.Body>
      </Card>

      {/* KYC Section */}
      {kycId && (
        <Card className="mb-4">
          <Card.Body>
            <h3 className="mb-3">KYC Details</h3>
            <Row>
              <Col xs={12} className="mb-3">
                <Button onClick={handleApproveKYC} variant="success">
                  {kycId.approved == "Approved" ? "Approved" : "Approve Kyc"}
                </Button>
                <Button
                  onClick={() => handleReject(rejectKYC)}
                  className="bg-danger ms-2"
                >
                  Reject KYC
                </Button>
              </Col>
              <Col xs={6}>
                <p>
                  <strong>Aadhar Card Number:</strong> {kycId.aadharCardNumber}
                </p>
                <Image
                  src={kycId.aadharCardFront}
                  alt="Aadhar Front"
                  fluid
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  className="mb-2"
                />
                <Image
                  src={kycId.aadharCardBack}
                  alt="Aadhar Back"
                  fluid
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  className="mb-2"
                />
                <Button
                  onClick={handleApproveAadhar}
                  variant="primary"
                  className="mt-2 me-2"
                >
                  {kycId.aadharCardApproved == "Approved" ? "Approved" : "Approve Aadhaar Card"}
                </Button>
                <Button
                  onClick={() => handleReject(rejectAadharCard)}
                  className="mt-2 bg-danger"
                >
                  Reject Aadhaar Card
                </Button>
              </Col>
              <Col xs={6}>
                <p>
                  <strong>PAN Card Number:</strong> {kycId.panCardNumber}
                </p>
                <Image
                  src={kycId.panCardFront}
                  alt="PAN Front"
                  fluid
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  className="mb-2"
                />
                <Image
                  src={kycId.panCardBack}
                  alt="PAN Back"
                  fluid
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  className="mb-2"
                />
                <Button
                  onClick={handleApprovePan}
                  variant="primary"
                  className="mt-2 me-2"
                >
                  {kycId.panCardApproved == "Approved" ? "Approved" : "Approve Pan Card"}
                </Button>
                <Button
                  onClick={() => handleReject(rejectPanCard)}
                  className="mt-2 bg-danger"
                >
                  Reject PAN Card
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mt-4">
                <p>
                  <strong>Bank Name:</strong> {kycId.bankName}
                </p>
                <Image
                  src={kycId.accountPassbookPhoto}
                  alt="accountPassbookPhoto"
                  fluid
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  className="mb-2"
                />
                <p>
                  <strong>Account Holder Name:</strong>{" "}
                  {kycId.accountHolderName}
                </p>
                <p>
                  <strong>IFSC Code:</strong> {kycId.ifscCode}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}

      {/* Nominee Section */}
      {kycId?.nominee && (
        <Card className="mb-4">
          <Card.Body>
            <h3 className="mb-3">Nominee Details</h3>
            <p>
              <strong>Nominee Name:</strong>{" "}
              {kycId.nominee.nomineeName || "N/A"}
            </p>
            <Col xs="6">
              <Image
                src={kycId.nominee.aadharCardFront}
                alt="Nominee Aadhar Front"
                fluid
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                className="mb-2"
              />
              <Image
                src={kycId.nominee.aadharCardBack}
                alt="Nominee Aadhar Back"
                fluid
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                className="mb-2"
              />
            </Col>
            <p>
              <strong>Nominee Relationship:</strong>{" "}
              {kycId.nominee.nomineeRelationship || "N/A"}
            </p>
            <p>
              <strong>Nominee Date of Birth:</strong>{" "}
              {kycId.nominee.nomineeDob || "N/A"}
            </p>
          </Card.Body>
        </Card>
      )}

      {/* Reject Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Reason</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Reason for Rejection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Enter reason"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmitReject}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FranchiseDetail;
