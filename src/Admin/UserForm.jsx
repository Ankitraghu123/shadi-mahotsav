import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = () => {
  return (
    <Container className="mt-5">
      <h2>User Registration Form</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select>
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formMembershipStatus">
              <Form.Label>Membership Status</Form.Label>
              <Form.Select>
                <option>Select status</option>
                <option>Active</option>
                <option>Inactive</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formRegistrationDate">
              <Form.Label>Registration Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastLoginDate">
              <Form.Label>Last Login Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UserForm;
