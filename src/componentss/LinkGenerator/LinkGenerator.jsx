import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { generateRegisterLink } from '../../Features/Franchise/FranchiseSlice';

const LinkGenerator = () => {
  const currentFranchise = useSelector((state) => state.Franchise?.currentFranchise?.franchise);
  const registerLink = useSelector((state) => state.Franchise?.registerLink?.registrationLink);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    franchiseCode: currentFranchise?.code || '',
    uplineId: '',
    packageType: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateLink = async () => {
    setLoading(true);
    await dispatch(generateRegisterLink(formData));
    setLoading(false);
  };

  const copyToClipboard = async (id) => {
    const copyText = document.getElementById(id);
    try {
      await navigator.clipboard.writeText(copyText.value);
      alert('Copied to clipboard');
    } catch (err) {
      alert('Failed to copy');
    }
  };

  return (
    <div id="margin-top" className="mt-5">
      <Card className="shadow">
        <Card.Header className="text-center">
          <img
            src="https://skillsikhar.com/user/img/link_gen.jpg"
            alt="IDP Trainings"
            className="img-fluid"
          />
        </Card.Header>
        <Card.Body>
          <h4 className="text-center mb-4"><strong>Register Link Generator</strong></h4>
          <Form>
            {/* Franchise Code (refId) */}
            <Row className="mb-3 align-items-center">
              <Col xs={12} md={9}>
                <Form.Group controlId="franchiseCode">
                  <Form.Label>Franchise Id (refId):</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.franchiseCode}
                    readOnly
                    id="franchiseCode"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3} className="mt-3 mt-md-0">
                <Button variant="outline-primary" onClick={() => copyToClipboard('franchiseCode')}>
                  Copy Code
                </Button>
              </Col>
            </Row>

            {/* Upline ID */}
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="uplineId">
                  <Form.Label>Upline ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="uplineId"
                    value={formData.uplineId}
                    onChange={handleInputChange}
                    placeholder="Optional (defaults to Franchise Id)"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Package Type */}
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="packageType">
                  <Form.Label>Package Type:</Form.Label>
                  <Form.Select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select Package --</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Generate Link Button */}
            <Row>
              <Col>
                <Button variant="outline-success" onClick={generateLink} disabled={loading}>
                  {loading ? 'Generating...' : 'Generate Registration Link'}
                </Button>
              </Col>
            </Row>

            {/* Generated Registration Link */}
            {registerLink && (
              <Row className="mt-4 align-items-center">
                <Col xs={12} md={9}>
                  <Form.Group controlId="registerLink">
                    <Form.Label>Generated Registration Link:</Form.Label>
                    <Form.Control
                      type="text"
                      value={registerLink}
                      readOnly
                      id="registerLink"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={3} className="mt-3 mt-md-0">
                  <Button variant="outline-primary" onClick={() => copyToClipboard('registerLink')}>
                    Copy Link
                  </Button>
                </Col>
              </Row>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LinkGenerator;
