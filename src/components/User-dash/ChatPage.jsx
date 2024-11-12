// src/components/ChatPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { chat } = location.state || {};

  if (!chat) {
    return <p>Chat not found.</p>;
  }

  return (
    <Container className="chat-page">
      <Button variant="link" onClick={() => navigate(-1)}>&larr; Back to Chat List</Button>
      <Row className="mt-3">
        <Col md={12}>
          <div className="chat-header">
            <img src={chat.image} alt={chat.name} className="chat-profile-image" />
            <h4>{chat.name}</h4>
          </div>
          <div className="chat-messages">
            <p>{chat.message}</p>
          </div>
          <Form className="chat-input-form mt-4">
            <Form.Group controlId="messageInput">
              <Form.Control type="text" placeholder="Type a message..." />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
