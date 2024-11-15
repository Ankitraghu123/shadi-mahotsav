import React, { useState } from 'react';
// import './Login.css'; // Import your CSS for styling
import Login1 from '../images/login-couple.png';
import { Link } from 'react-router-dom';
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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
    // Add your form submission logic here
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
                  <h2>Now <b>Find <br /> your life partner</b> Easy and fast.</h2>
                </div>
                <div className="im">
                  <img src={Login1} alt="Login couple" />
                </div>
                <div className="log-bg">&nbsp;</div>
              </div>
              <div className="rhs">
                <div>
                  <div className="form-tit">
                    <h1>ADMIN LOGIN</h1>
                    <h5>Sign in to Matrimony</h5>
                    {/* <p>Not a member? <Link to="/register">Sign up now</Link></p> */}
                  </div>
                  <div className="form-login">
                    <form onSubmit={handleSubmit}>
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

                      <div className="form-group form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                          /> Remember me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">Sign in</button>

                      <div className="form-tit">

                    <p className='mt-3'>Not a member? <Link to="/register" className='login-path'>Sign up now</Link></p>
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

export default AdminLogin;
