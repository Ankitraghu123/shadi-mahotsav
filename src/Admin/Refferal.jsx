import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaChartLine, FaEnvelope } from 'react-icons/fa';
const Refferal = () => {
  return (
    <Container fluid className="py-4">
    <h2 className="mb-4">Dashboard Overview</h2>
    <Row>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">Total People</Card.Title>
            <Card.Text className="display-4">1,200</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <FaDollarSign size={30} color="#2196F3" />
            <Card.Title className="mt-2">Total Income</Card.Title>
            <Card.Text className="display-4">$34,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <FaChartLine size={30} color="#FF5722" />
            <Card.Title className="mt-2">Monthly Growth</Card.Title>
            <Card.Text className="display-4">15%</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <FaEnvelope size={30} color="#FFC107" />
            <Card.Title className="mt-2">New Messages</Card.Title>
            <Card.Text className="display-4">42</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Refferal