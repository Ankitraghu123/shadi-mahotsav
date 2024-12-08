import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getAllProfiles, getProfile } from '../../Features/User/UserSlice';
import { base_url } from '../../utils/base_url';
import { IoSendSharp } from "react-icons/io5";

const ChatPage = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const allProfiles = useSelector(state => state.User?.allProfiles);
  // const [profile, setProfile] = useState(null);
  const profile = useSelector(state => state.User.userProfile)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const socket = React.useRef(null);

  useEffect(() => {
    socket.current = io('http://localhost:4000');
  
    socket.current.on('connect', () => {
      console.log('Connected to socket server', socket.current.id);
    });
    socket.current.emit('setUserId', profileDetails._id);
  
    socket.current.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  
    return () => {
      socket.current.disconnect();
    };
  }, [profileDetails._id]);

  useEffect(() => {
   dispatch(getProfile(id))
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${base_url}message/messages/${profileDetails._id}/${id}`);
        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [id, profileDetails._id]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      const messageData = {
        senderId: profileDetails._id,
        receiverId: id,
        message,
      };

      try {
        const response = await fetch(`${base_url}message/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        });

        if (response.ok) {
          const savedMessage = await response.json();
          setMessages((prevMessages) => [...prevMessages, savedMessage.data]);
          socket.current.emit('sendMessage', savedMessage.data);
          setMessage('');
        } else {
          console.error('Failed to send message:', await response.json());
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Container className="chat-page">
      <Button variant="link" onClick={() => navigate(-1)}>&larr; Back to Chat List</Button>
      <Row className="mt-3">
        <Col md={12}>
          <div className="chat-header">
            <img width="50px" height="50px" src={profile?.profilePicture} alt={profile?.name} className="chat-profile-image rounded-circle" />
            <h4>{profile?.name}</h4>
          </div>
          <div className="chat-messages p-3" style={{ maxHeight: '60vh', overflowY: 'auto', background: '#f0f0f0', borderRadius: '10px' }}>
            {messages?.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${msg.senderId === profileDetails._id ? 'justify-content-end' : 'justify-content-start'} my-2`}
              >
                
                <div
                  className={`p-2 ${msg.senderId === profileDetails._id ? 'bg-primary text-white' : 'bg-light text-white'}`}
                  style={{
                    borderRadius: '15px',
                    maxWidth: '75%',
                    wordBreak: 'break-word',
                  }}
                >
                  {/* <p className="mb-1" style={{ fontSize: '0.9em' }}>
                  <strong>{msg.senderId === profileDetails._id ? 'You' : profile?.name}</strong>
                  </p> */}
                  <p className={`mb-0 ${msg.senderId === id ? '' : 'text-white'}`}>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
          <Form className="chat-input-form mt-4" onSubmit={handleSendMessage}>
            <Form.Group controlId="messageInput" className="d-flex">
              <Form.Control
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type a message..."
                className="me-2"
              />
              <Button variant="primary" type="submit">
              <IoSendSharp />
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
