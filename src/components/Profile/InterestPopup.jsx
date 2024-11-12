import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are included
// import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome styles are included

const InterestPopup = () => {
    const [showModal, setShowModal] = useState(false);
    const [showChatbox, setShowChatbox] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const handleSendInterest = () => {
        // Add your send interest logic here
        console.log("Interest sent!");
        setShowModal(false);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        // Handle chat message submission
        console.log("Chat message sent:", chatMessage);
        setChatMessage(''); // Clear the chat message after sending
    };

    return (
        <>
            {/* Button to open Interest Popup */}
            <button onClick={() => setShowModal(true)} className="btn btn-primary">Open Interest Popup</button>

            {/* Interest Popup */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} id="sendInter">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title seninter-tit">Send interest to <span className="intename2">Jolia</span></h4>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body seninter">
                            <div className="lhs">
                                <img src="images/profiles/1.jpg" alt="" className="intephoto2" />
                            </div>
                            <div className="rhs">
                                <h4>Permissions: <span className="intename2">Jolia</span> Can able to view the below details</h4>
                                <ul>
                                    {['About section', 'Photo gallery', 'Contact info', 'Personal info', 'Hobbies', 'Social media'].map((permission, index) => (
                                        <li key={index}>
                                            <div className="chbox">
                                                <input type="checkbox" id={`pro_${permission.toLowerCase().replace(/ /g, '_')}`} defaultChecked={permission === 'About section'} />
                                                <label htmlFor={`pro_${permission.toLowerCase().replace(/ /g, '_')}`}>{permission}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        id="comment"
                                        name="text"
                                        placeholder="Comment goes here"
                                        rows="3"
                                    ></textarea>
                                    <label htmlFor="comment">Write some message to <span className="intename"></span></label>
                                </div>
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleSendInterest}>Send interest</button>
                            <button type="button" className="btn btn-outline-danger" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* END INTEREST POPUP */}

            {/* Button to open Chat Box */}
            <button onClick={() => setShowChatbox(true)} className="btn btn-success mt-3">Chat Now</button>

            {/* Chat Conversation Box Start */}
            {showChatbox && (
                <div className="chatbox">
                    <span className="comm-msg-pop-clo" onClick={() => setShowChatbox(false)} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </span>

                    <div className="inn">
                        <form name="new_chat_form" method="post" onSubmit={handleChatSubmit}>
                            <div className="s1">
                                <img src="images/user/2.jpg" className="intephoto2" alt="" />
                                <h4><b className="intename2">Julia</b>,</h4>
                                <span className="avlsta avilyes">Available online</span>
                            </div>
                            <div className="s2 chat-box-messages">
                                <span className="chat-wel">Start a new chat!!! now</span>
                                <div className="chat-con">
                                    <div className="chat-lhs">Hi</div>
                                    <div className="chat-rhs">Hi</div>
                                </div>
                            </div>
                            <div className="s3">
                                <input
                                    type="text"
                                    name="chat_message"
                                    placeholder="Type a message here.."
                                    required
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                />
                                <button id="chat_send1" name="chat_send" type="submit">Send <i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* END Chat Conversation Box */}
        </>
    );
};

export default InterestPopup;
