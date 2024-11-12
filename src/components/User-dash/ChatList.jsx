// src/components/ChatList.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/profiles/1.jpg';
import img16 from '../../images/profiles/16.jpg';
import img12 from '../../images/profiles/12.jpg';
import img13 from '../../images/profiles/13.jpg';
import img14 from '../../images/profiles/14.jpg';

const ChatList = () => {
  const navigate = useNavigate();

  const chatList = [
    {
      image: img1,
      name: 'Ashley emyy',
      message: 'Hi Anna, How are you?',
      time: '9:00 PM',
      new: true,
      newMessages: 3,
    },
    {
      image: img16,
      name: 'Julia Ann',
      message: 'Hi Anna, How are you?',
      time: '9:00 PM',
      new: true,
      newMessages: 2,
    },
    {
      image: img12,
      name: 'Elizabeth Taylor',
      message: 'Hi Anna, How are you?',
      time: '8:00 PM',
      new: true,
      newMessages: 3,
    },
    {
      image: img13,
      name: 'Angelina Jolie',
      message: 'Hi Anna, How are you?',
      time: '3:00 PM',
    },
    {
      image: img14,
      name: 'Olivia mia',
      message: 'Hi Anna, How are you?',
      time: '5:00 PM',
    },
  ];

  const openChatPage = (chat) => {
    navigate(`/dashboard/chat/${encodeURIComponent(chat.name)}`, { state: { chat } });
  };

  return (
    <section>
      <div className="db">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <Row>
                <Col md={12} className="db-sec-com">
                  <h2 className="db-tit">Chat list</h2>
                  <div className="db-pro-stat">
                    <div className="db-chat">
                      <ul>
                        {chatList.map((chat, index) => (
                          <li key={index} className="db-chat-trig" onClick={() => openChatPage(chat)}>
                            <div className="db-chat-pro">
                              <img src={chat.image} alt={chat.name} />
                            </div>
                            <div className="db-chat-bio">
                              <h5>{chat.name}</h5>
                              <span>{chat.message}</span>
                            </div>
                            <div className="db-chat-info">
                              <div className={`time ${chat.new ? 'new' : ''}`}>
                                <span className="timer">{chat.time}</span>
                                {chat.new && <span className="cont">{chat.newMessages}</span>}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ChatList;
