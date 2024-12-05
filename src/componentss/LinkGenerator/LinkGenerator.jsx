import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Container, Card } from 'react-bootstrap';

const LinkGenerator = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: ''
  });
  const [generatedPackageLink, setGeneratedPackageLink] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone } = formData;
    if (!name || !/^[a-zA-Z\s]{3,}$/.test(name)) {
      alert('Invalid name');
      return false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email');
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return false;
    }
    return true;
  };

  const generatePackageLink = () => {
    const baseLink = "https://skillsikhar.com/package?type=";
    if (formData.type) {
      setGeneratedPackageLink(baseLink + formData.type);
    } else {
      alert('Please select a package type');
    }
  };

  const copyToClipboard = (id) => {
    const copyText = document.getElementById(id);
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // Submit form logic here
    }
  };

  return (
    <Container id="margin-top" className="mt-5">
      <Card className="shadow">
        <Card.Header className="text-center">
          <img
            src="https://skillsikhar.com/user/img/link_gen.jpg"
            alt="IDP Trainings"
            className="img-fluid"
          />
        </Card.Header>
        <Card.Body>
          <h4 className="text-center mb-4"><strong>Link Generator</strong></h4>
          <Form>
            {/* Referral Code */}
            <Row className="mb-3 align-items-center">
              <Col xs={12} md={9}>
                <Form.Group controlId="referralCode">
                  <Form.Label>My Referral Code:</Form.Label>
                  <Form.Control
                    type="text"
                    value="Your Referral Code"
                    readOnly
                    id="referral_code"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className="mt-3 mt-md-0">
                <Button variant="outline-primary" onClick={() => copyToClipboard('referral_code')}>
                  Copy Code
                </Button>
              </Col>
            </Row>

            {/* Lead Generate Link */}
            <Row className="mb-3 align-items-center">
              <Col xs={12} md={9}>
                <Form.Group controlId="leadCapture">
                  <Form.Label>Lead Generate Link:</Form.Label>
                  <Form.Control
                    type="text"
                    value="https://skillsikhar.com/lead-capture?afCode=sample&ref_code=YourReferralCode"
                    readOnly
                    id="leadCapture"
                  />
                </Form.Group>
              </Col>
              <Col xs={6} md={3} className="mt-3 mt-md-0">
                <Button variant="outline-primary" onClick={() => copyToClipboard('leadCapture')}>
                  Copy Link
                </Button>
              </Col>
              <Col xs={6} md={3} className="mt-3 mt-md-0">
                <Button variant="outline-secondary" onClick={() => setShowModal(true)}>
                  Add Manual
                </Button>
              </Col>
            </Row>

            {/* Package Link Selector */}
            <Row className="mb-3 align-items-center">
              <Col xs={12} md={9}>
                <Form.Group controlId="share_video_url">
                  <Form.Label>Link For Packages:</Form.Label>
                  <Form.Select
                    name="type"
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    value={formData.type}
                    required
                  >
                    <option value="">-- Select Type --</option>
                    <option value="video_url_1">Presentation Video</option>
                    <option value="video_url_2">Dynamic Package</option>
                    <option value="video_url_3">Basic Package</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className="mt-3 mt-md-0">
                <Button variant="outline-success" onClick={generatePackageLink}>
                  Generate Link
                </Button>
              </Col>
            </Row>

            {/* Generated Package Link */}
            {generatedPackageLink && (
              <Row className="mb-3 align-items-center">
                <Col xs={12} md={9}>
                  <Form.Group controlId="generatedPackageLink">
                    <Form.Label>Generated Package Link:</Form.Label>
                    <Form.Control
                      type="text"
                      value={generatedPackageLink}
                      readOnly
                      id="generatedPackageLink"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={3} className="mt-3 mt-md-0">
                  <Button variant="outline-primary" onClick={() => copyToClipboard('generatedPackageLink')}>
                    Copy Package Link
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </Card.Body>
      </Card>

      {/* Modal for Lead Capture */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lead Capture Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter Phone Number"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LinkGenerator;
