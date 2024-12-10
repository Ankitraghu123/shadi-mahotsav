import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

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
import { getSingleFranchise } from "../../Features/Franchise/FranchiseSlice";

const TeamDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const franchiseDetail = useSelector(
    (state) => state.Franchise.franchiseDetail?.franchise
  );


  useEffect(() => {
    dispatch(getSingleFranchise(id));
  }, [dispatch, id]);

  if (!franchiseDetail) {
    return <p>Loading franchise details...</p>;
  }

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
    </Container>
  );
};

export default TeamDetail;
