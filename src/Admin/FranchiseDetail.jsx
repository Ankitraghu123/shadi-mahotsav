import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleFranchise } from "../Features/Franchise/FranchiseSlice";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const FranchiseDetail = () => {
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
    package: franchisePackage,
    kycId,
  } = franchiseDetail;

  return (
    <Container className="py-4">
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

      {kycId && (
        <Card className="mb-4">
          <Card.Body>
            <h3 className="mb-3">KYC Details</h3>
            <p>
              <strong>Aadhar Card Number:</strong> {kycId.aadharCardNumber}
            </p>
            <p>
              <strong>PAN Card Number:</strong> {kycId.panCardNumber}
            </p>
            <p>
              <strong>Bank Name:</strong> {kycId.bankName}
            </p>
            <p>
              <strong>Account Holder Name:</strong> {kycId.accountHolderName}
            </p>
            <p>
              <strong>IFSC Code:</strong> {kycId.ifscCode}
            </p>
            <Row className="mt-3">
              <Col xs={12} md={6} className="mb-3">
                <Image
                  src={kycId.aadharCardFront}
                  alt="Aadhar Front"
                  fluid
                  className="mb-2"
                />
                <p className="text-center">Aadhar Card Front</p>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Image
                  src={kycId.aadharCardBack}
                  alt="Aadhar Back"
                  fluid
                  className="mb-2"
                />
                <p className="text-center">Aadhar Card Back</p>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Image
                  src={kycId.panCardFront}
                  alt="PAN Front"
                  fluid
                  className="mb-2"
                />
                <p className="text-center">PAN Card Front</p>
              </Col>
              <Col xs={12} md={6} className="mb-3">
                <Image
                  src={kycId.panCardBack}
                  alt="PAN Back"
                  fluid
                  className="mb-2"
                />
                <p className="text-center">PAN Card Back</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
       {kycId?.nominee && (
        <Card className="mb-4">
          <Card.Body>
            <h3 className="mb-3">Nominee Details</h3>
            <p>
              <strong>Nominee Name:</strong> {kycId?.nominee.nomineeName || "N/A"}
            </p>
            <p>
              <strong>Nominee Relation:</strong> {kycId?.nominee.nomineeRelationship || "N/A"}
            </p>
            <p>
              <strong>Nominee Dob:</strong> {kycId?.nominee.nomineeDob || "N/A"}
            </p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default FranchiseDetail;
