import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMember } from '../Features/Admin/AdminSlice';
import { toast } from 'react-toastify'; // Importing Toastify
import { useNavigate } from 'react-router';
// import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify CSS

const AddMember = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    gender: '',
    religion: '',
    country: '',
    city: '',
    state: '',
    education: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Dispatch the action to add a member
      await dispatch(addMember(formData));

      // If success, show a success toast
      toast.success("Member added successfully!");
        navigate('/admin-dashboard/all-members')
    } catch (error) {
      // If error, show an error toast
      toast.error("Failed to add member. Please try again.");
    }
  };

  return (
    <Container style={{ maxWidth: '100%' }}>
      <h2 className="mb-4">Add Member</h2>
      <Form onSubmit={handleSubmit}>
        {/* Row for Name and Email */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter name"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Row for Password and Mobile Number */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                placeholder="Enter mobile number"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Row for Gender and Religion */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formReligion">
              <Form.Label>Religion</Form.Label>
              <Form.Control
                as="select"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
              >
                <option value="">Select Religion</option>
                <option value="Christianity">Christianity</option>
                <option value="Hindu">Hindu</option>
                <option value="Islam">Islam</option>
                <option value="Sikh">Sikh</option>
                <option value="Nonreligious">Nonreligious</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Row for Country and City */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Row for State and Education */}
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control
                as="select"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">Select Education Level</option>
                <option value="High School">High School</option>
                <option value="Associates">Associates</option>
                <option value="Technical School">Technical School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="MBBS">MBBS</option>
                <option value="LLB">LLB</option>
                <option value="JD">JD</option>
                <option value="MD">MD</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Row for Date of Birth */}
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          Add Member
        </Button>
      </Form>
      
    </Container>
  );
};

export default AddMember;
