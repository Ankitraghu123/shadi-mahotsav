// MembershipDetailsForm.js
import React, { useState } from 'react';
import { Form, Button, Table, Container, Row, Col, Pagination, Dropdown } from 'react-bootstrap';

const MembershipDetailsForm = () => {
  const [formData, setFormData] = useState({
    membershipType: '',
    membershipID: '',
    startDate: '',
    expirationDate: '',
    status: '',
    renewalDate: '',
    membershipFee: '',
    paymentFrequency: '',
  });

  const [memberships, setMemberships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMemberships([...memberships, formData]);
    setFormData({
      membershipType: '',
      membershipID: '',
      startDate: '',
      expirationDate: '',
      status: '',
      renewalDate: '',
      membershipFee: '',
      paymentFrequency: '',
    });
  };

  // Handle pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = memberships.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEntriesChange = (numEntries) => {
    setEntriesPerPage(numEntries);
    setCurrentPage(1);
  };

  return (
    <Container className="my-4">
      <h3 className="mb-3">Membership Details</h3>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="membershipType">
              <Form.Label>Membership Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Basic, Premium, VIP"
                name="membershipType"
                value={formData.membershipType}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="membershipID">
              <Form.Label>Membership ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unique ID"
                name="membershipID"
                value={formData.membershipID}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Membership Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="expirationDate">
              <Form.Label>Membership Expiration Date</Form.Label>
              <Form.Control
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Membership Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
                <option value="expired">Expired</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="renewalDate">
              <Form.Label>Membership Renewal Date</Form.Label>
              <Form.Control
                type="date"
                name="renewalDate"
                value={formData.renewalDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="membershipFee">
              <Form.Label>Membership Fee</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Fee Amount"
                name="membershipFee"
                value={formData.membershipFee}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="paymentFrequency">
              <Form.Label>Payment Frequency</Form.Label>
              <Form.Control
                as="select"
                name="paymentFrequency"
                value={formData.paymentFrequency}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Frequency</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Add Membership
        </Button>
      </Form>

      <h4 className="mt-4">Membership Records</h4>

      {/* Dropdown to select entries per page */}
      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Show {entriesPerPage} entries
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {[5, 10, 15, 20].map((num) => (
            <Dropdown.Item key={num} onClick={() => handleEntriesChange(num)}>
              {num} entries
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>Membership Type</th>
            <th>Membership ID</th>
            <th>Start Date</th>
            <th>Expiration Date</th>
            <th>Status</th>
            <th>Renewal Date</th>
            <th>Fee</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((membership, index) => (
            <tr key={index}>
              <td>{membership.membershipType}</td>
              <td>{membership.membershipID}</td>
              <td>{membership.startDate}</td>
              <td>{membership.expirationDate}</td>
              <td>{membership.status}</td>
              <td>{membership.renewalDate || 'N/A'}</td>
              <td>{membership.membershipFee}</td>
              <td>{membership.paymentFrequency}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-3">
        {Array.from({ length: Math.ceil(memberships.length / entriesPerPage) }, (_, idx) => (
          <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => paginate(idx + 1)}>
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default MembershipDetailsForm;
