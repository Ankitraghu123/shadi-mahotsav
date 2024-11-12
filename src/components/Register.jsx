import React, { useState } from 'react';
// import './Register.css'; // Make sure to add appropriate styling
import couple from '../images/login-couple.png'; // Import images
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Features/User/UserSlice';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    agree: false,
    gender: '',
    religion: '',
    country: '',
    city: '',
    state: '',
    education: '',
    dob: '',
    couponCode: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .then((response) => {
        toast.success('Registration successful! Welcome aboard.');
      })
      .catch((error) => {
        toast.error('Registration failed. Please try again.');
      });
    console.log(formData);
  };  

  return (
    <section>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="inn">
              <div className="lhs">
                <div className="tit">
                  <h2>Now <b>Find your life partner</b> Easy and fast.</h2>
                </div>
                <div className="im">
                  <img src={couple} alt="Couple" />
                </div>
                <div className="log-bg">&nbsp;</div>
              </div>
              <div className="rhs">
                <div>
                  <div className="form-tit">
                    <h4>Start for free</h4>
                    <h1>Sign up to Matrimony</h1>
                    <p>Already a member? <Link to="/login">Login</Link></p>
                  </div>
                  <div className="form-login">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
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
                      </div>

                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Phone:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="mobileNumber"
                            placeholder="Enter phone number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Password:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Gender:</label>
                          <select
                            className="form-control"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Religion:</label>
                          <select
                            className="form-control"
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
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Country:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">City:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">State:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Education:</label>
                          <select
                            className="form-control"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Education</option>
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
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Date of Birth:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Coupon Code:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter coupon code"
                            name="couponCode"
                            value={formData.couponCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">Create Account</button>
                      <div className="form-tit">
                        <p className="mt-3">Already a member? <Link to="/login" className="login-path">Login</Link></p>
                      </div>
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

export default Register;
