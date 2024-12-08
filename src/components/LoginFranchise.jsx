import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Features/User/UserSlice';
import { toast } from 'react-toastify';
import Login1 from '../images/login-couple.png';
import { loginFranchise } from '../Features/Franchise/FranchiseSlice';

const Logi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginFranchise(formData));
      if (loginFranchise.fulfilled.match(resultAction)) {
        toast.success('Login successful! Welcome aboard.');
        navigate('/frachise');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
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
                    <h4>Login Franchise</h4>
                    <h1>Sign in to Matrimony</h1>
                    <p className='mt-3'>Not a franchise? <Link to="/register-franchise" className='login-path'>Sign up now</Link></p>
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
                      <button type="submit" className="btn btn-primary">Sign in</button>
                      <div className="form-tit">
                      <p className='mt-3'>Not a franchise? <Link to="/register-franchise" className='login-path'>Sign up now</Link></p>
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

export default Logi;
