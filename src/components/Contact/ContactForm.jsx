import React, { useState } from 'react';
import axios from 'axios';
import contact3 from '../../images/login-couple.png';
import { useDispatch } from 'react-redux';
import { sendEnquiry } from '../../Features/User/UserSlice';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the enquiry to Redux
      await dispatch(sendEnquiry(formData));

      // Show a success toast
      toast.success('Your message was sent successfully!');

      // Clear the form data after successful submission
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      // Set an error message and show a failure toast
      setErrorMessage('Error sending enquiry. Please try again later.');
      toast.error('Error sending enquiry. Please try again later.');
      console.error('Error sending enquiry:', error);
    }
  };

  return (
    <section>
      <div className="login pg-cont">
        <div className="container">
          <div className="row">
            <div className="inn">
              <div className="lhs">
                <div className="tit">
                  <h2>Now <b>Contact us</b> Easy and fast.</h2>
                </div>
                <div className="im">
                  <img src={contact3} alt="Contact us" />
                </div>
                <div className="log-bg">&nbsp;</div>
              </div>
              <div className="rhs">
                <div>
                  <div className="form-tit">
                    <h4>Let's talk</h4>
                    <h1>Send your enquiry now</h1>
                  </div>
                  <div className="form-login">
                    <form className="cform fvali" onSubmit={handleSubmit}>
                      {successMessage && (
                        <div className="alert alert-success cmessage" role="alert">
                          Your message was sent successfully.
                        </div>
                      )}
                      {errorMessage && (
                        <div className="alert alert-danger cmessage" role="alert">
                          {errorMessage}
                        </div>
                      )}
                      <div className="form-group">
                        <label className="lb">Name:</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Enter your full name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">Phone:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">Message:</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Send Enquiry</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
