import React, { useState } from 'react';
// import './Register.css'; // Make sure to add appropriate styling
import couple from '../images/login-couple.png'; // Import images
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Features/User/UserSlice';
import { toast } from 'react-toastify';
import { Country, State, City } from "country-state-city";

const Register = () => {
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate()
 
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
    maritalStatus:'',
    couponCode: '',
    profileFor:''
  });

  const handleCountryChange = (e) => {
    const countryIsoCode = e.target.value;
    const countryName = Country.getAllCountries().find(
      (country) => country.isoCode === countryIsoCode
    )?.name || "";

    setSelectedCountry(countryIsoCode);
    setSelectedState(""); // Reset state
    setSelectedCity(""); // Reset city

    // Update the formData with the selected country
    setFormData((prevData) => ({
      ...prevData,
      country: countryName,
      state: "",
      city: "",
    }));
  };

  const handleStateChange = (e) => {
    const stateIsoCode = e.target.value;
    const stateName = State.getStatesOfCountry(selectedCountry).find(
      (state) => state.isoCode === stateIsoCode
    )?.name || "";

    setSelectedState(stateIsoCode);
    setSelectedCity(""); // Reset city

    // Update the formData with the selected state
    setFormData((prevData) => ({
      ...prevData,
      state: stateName,
      city: "",
    }));
  };

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);

    // Update the formData with the selected city
    setFormData((prevData) => ({
      ...prevData,
      city: cityName,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleShowTerms = (e) => {
    e.preventDefault();
    setShowTermsModal(true); // Open the terms modal
  };

  const handleAcceptTerms = () => {
    setShowTermsModal(false); // Close the modal
    dispatch(registerUser(formData))
      .then(() => {
        toast.success('Registration successful! Welcome aboard.');
        navigate('/dashboard/user-profile')
      })
      .catch(() => {
        toast.error('Registration failed. Please try again.');
      });
  };

  const handleRejectTerms = () => {
    setShowTermsModal(false); // Close the modal
    toast.error('You must accept the terms and conditions to register.');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser(formData))
  //     .then((response) => {
  //       toast.success('Registration successful! Welcome aboard.');
  //     })
  //     .catch((error) => {
  //       toast.error('Registration failed. Please try again.');
  //     });
  //   console.log(formData);
  // };  

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
                    <form onSubmit={handleShowTerms}>
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
                            <option value="Hindu">Hindu</option>
                            <option value="Christian">Christian</option>
                            <option value="Jain">Jain</option>
                            <option value="Buddhist">Buddhist</option>
                            <option value="Sikh">Sikh</option>
                            <option value="Jewish">Jewish</option>
                            <option value="Parsi">Parsi</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Spritual - non religious">Spritual- non religious</option>
                            <option value="No Religion">No Religion</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
        <div className="form-group col-12 col-md-6">
          <label className="lb">Country:</label>
          <select
            className="form-control"
            value={selectedCountry}
            onChange={handleCountryChange}
            name='country'
          >
            <option value="">Select Country</option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-12 col-md-6">
          <label className="lb">State:</label>
          <select
            className="form-control"
            value={selectedState}
            onChange={handleStateChange}
            disabled={!selectedCountry}
            name='state'
          >
            <option value="">Select State</option>
            {selectedCountry &&
              State.getStatesOfCountry(selectedCountry).map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="form-group col-12 col-md-6">
          <label className="lb">City:</label>
          <select
            className="form-control"
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
            name='city'
          >
            <option value="">Select City</option>
            {selectedState &&
              City.getCitiesOfState(selectedCountry, selectedState).map(
                (city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                )
              )}
          </select>
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
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-control"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Marital Status</option>
                            <option value="unmarried">Un Married</option>
                            <option value="widow">Widow</option>
                            <option value="divorced">Divorced</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">This Profile is For:</label>
                          <select
                            className="form-control"
                            name="profileFor"
                            value={formData.profileFor}
                            onChange={handleChange}
                          >
                            <option value="">This Profile is for</option>
                            <option value="mySelf">My Self</option>
                            <option value="mySon">My Son</option>
                            <option value="myDaughter">My Daughter</option>
                            <option value="myBrother">My Brother</option>
                            <option value="mySister">My Sisiter</option>
                            <option value="myFriend">My Friend</option>
                            <option value="myRelative">My Relative</option>

                          </select>
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

      {showTermsModal && (
  <div className="modal-overlay">
    <div className="modal-content" style={{ backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px',width:'60%' }}>
      <h3>Terms and Conditions</h3>
      <p>Please read and accept our <Link id='blue' to={'/terms-and-conditions'}>Terms and Conditions</Link> & <Link id='blue' to={'/privacy-policy'}>Privacy Policy</Link> to proceed with registration.</p>
      <div className="modal-actions">
        <button
          className="btn btn-success"
          onClick={handleAcceptTerms}
          style={{ marginRight: '10px' }}
        >
          Accept
        </button>
        <button className="btn btn-danger" onClick={handleRejectTerms}>
          Reject
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Register;
