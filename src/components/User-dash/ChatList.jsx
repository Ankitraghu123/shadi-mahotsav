// src/components/ChatList.js
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../images/profiles/1.jpg';
import img16 from '../../images/profiles/16.jpg';
import img12 from '../../images/profiles/12.jpg';
import img13 from '../../images/profiles/13.jpg';
import img14 from '../../images/profiles/14.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersChattedWith } from '../../Features/User/UserSlice';

const ChatList = () => {
  const profileDetails = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const chatList =useSelector(state => state.User.chatLists?.data)

  useEffect(() => {
    dispatch(GetUsersChattedWith(profileDetails?._id))
  },[])


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
                        {chatList?.map((chat, index) => (
                          <li key={index} className="db-chat-trig">
                            <Link to={`/dashboard/chat/${chat._id}`}>
                            <div className="db-chat-pro">
                              <img src={chat.profilePicture} alt={chat.name} />
                            </div>
                            <div className="db-chat-bio">
                              <h5>{chat.name}</h5>
                              {/* <span>{chat.message}</span> */}
                            </div>
                            {/* <div className="db-chat-info">
                              <div className={`time ${chat.new ? 'new' : ''}`}>
                                <span className="timer">{chat.time}</span>
                                {chat.new && <span className="cont">{chat.newMessages}</span>}
                              </div>
                            </div> */}
                            </Link>
                           
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
