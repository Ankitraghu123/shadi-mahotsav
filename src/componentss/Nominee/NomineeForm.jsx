import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createKyc } from '../../Features/Franchise/FranchiseSlice';
import achieve from '../../nominee.jpg';

const NomineeForm = () => {
  const currentFranchise = useSelector((state) => state.Franchise.currentFranchise?.franchise);
  const [nomineeAadharFront, setAadharFront] = useState(null);
  const [nomineeAadharBack, setAadharBack] = useState(null);
  const [nomineeAadharFrontPreview, setAadharFrontPreview] = useState(null);
  const [nomineeAadharBackPreview, setAadharBackPreview] = useState(null);
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeRelationship, setNomineeRelationship] = useState('');
  const [nomineeDob, setNomineeDob] = useState('');

  const dispatch = useDispatch();

  const handleFileChange = (e, setFile, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file); // Save the file for submission
      setPreview(URL.createObjectURL(file)); // Create a preview URL for display
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send data
    const formData = new FormData();
    formData.append('franchiseId', currentFranchise?._id);
    formData.append('nomineeAadharFront', nomineeAadharFront);
    formData.append('nomineeAadharBack', nomineeAadharBack);
    formData.append('nomineeName', nomineeName);
    formData.append('nomineeRelationship', nomineeRelationship);
    formData.append('nomineeDob', nomineeDob);

    // Dispatch the createKYC action with formData
    dispatch(createKyc(formData));

    // Optionally reset the form and alert the user
    alert('Form submitted successfully!');
  };

  return (
    <>
      <div className="mt-5">
        <div id="margin-top" className="achivementimage mb-2 position-relative">
          <div className="row">
            <div className="col-12">
              <img src={achieve} className="img-fluid w-100" alt="Achievement" />
            </div>
          </div>
        </div>
        <Card>
          <Card.Header className="bg-primary text-white text-center">
            <h2>Nominee Form</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="nomineeAadharFront">
                    <Form.Label>Aadhar Card (Front):</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, setAadharFront, setAadharFrontPreview)}
                    />
                    {nomineeAadharFrontPreview ? (
                      <div className="imagePreview mt-2">
                        <img
                          src={nomineeAadharFrontPreview}
                          alt="Aadhar Front"
                          className="img-fluid rounded"
                        />
                      </div>
                    ) : currentFranchise?.kycId?.nominee?.aadharCardFront && (
                      <div className="imagePreview mt-2">
                        <img
                          src={currentFranchise?.kycId?.nominee?.aadharCardFront}
                          alt="Aadhar Front"
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="nomineeAadharBack">
                    <Form.Label>Aadhar Card (Back):</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, setAadharBack, setAadharBackPreview)}
                    />
                    {nomineeAadharBackPreview ? (
                      <div className="imagePreview mt-2">
                        <img
                          src={nomineeAadharBackPreview}
                          alt="Aadhar Back"
                          className="img-fluid rounded"
                        />
                      </div>
                    ) : currentFranchise?.kycId?.nominee?.aadharCardBack && (
                      <div className="imagePreview mt-2">
                        <img
                          src={currentFranchise?.kycId?.nominee?.aadharCardBack}
                          alt="Aadhar Back"
                          className="img-fluid rounded"
                        />
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="nomineeName" className="mb-3">
                <Form.Label>Nominee Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={nomineeName || currentFranchise?.kycId?.nominee?.nomineeName || ''}
                  onChange={(e) => setNomineeName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="nomineeRelationship" className="mb-3">
                <Form.Label>Nominee Relationship:</Form.Label>
                <Form.Control
                  type="text"
                  value={nomineeRelationship || currentFranchise?.kycId?.nominee?.nomineeRelationship || ''}
                  onChange={(e) => setNomineeRelationship(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="nomineeDob" className="mb-3">
                <Form.Label>Nominee Date of Birth:</Form.Label>
                <Form.Control
                  type="date"
                  value={nomineeDob || currentFranchise?.kycId?.nominee?.nomineeDob || ''}
                  onChange={(e) => setNomineeDob(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default NomineeForm;
