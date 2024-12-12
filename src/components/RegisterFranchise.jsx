import React, { useEffect, useState } from 'react';
// import './RegisterFranchise.css'; // Make sure to add appropriate styling
import couple from '../images/login-couple.png'; // Import images
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Features/User/UserSlice';
import { toast } from 'react-toastify';
import { Country, State, City } from "country-state-city";
import { registerFranchise } from '../Features/Franchise/FranchiseSlice';

const RegisterFranchise = () => {
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    mobileNumber: '',
    password: '',
    agree: false,
    country:'',
    city: '',
    state: '',
    package:'',
    uplineId:'',
    refBy:''
  });

  useEffect(() => {
    // Extract URL parameters
    const queryParams = new URLSearchParams(location.search);
    const refId = queryParams.get('refId');
    const uplineId = queryParams.get('uplineId');
    const packageParam = queryParams.get('package');

    // Set form fields from URL params if present
    if (refId) setFormData(prev => ({ ...prev, refBy: refId }));
    if (uplineId) setFormData(prev => ({ ...prev, uplineId }));
    if (packageParam) setFormData(prev => ({ ...prev, package: packageParam }));
  }, [location.search]);


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
    if (name === 'mobileNumber') {
      if (value.length > 10) {
        setError("Mobile number cannot exceed 10 digits.");
      } else if (value.length < 10 && value.length > 0) {
        setError("Mobile number must be exactly 10 digits.");
      } else {
        setError(""); // Clear the error if the length is exactly 10
      }
    }
    
  };

  const handleShowTerms = (e) => {
    e.preventDefault();
    setShowTermsModal(true); // Open the terms modal
  };

  const handleAcceptTerms = () => {
    setShowTermsModal(false); // Close the modal
  
    dispatch(registerFranchise(formData))
      .unwrap() // Unwrap the result of the promise
      .then(() => {
        toast.success('Registration successful! Welcome aboard.');
        navigate('/frachise');
      })
      .catch((error) => {
        // Handle any errors that occurred during registration
        toast.error(`Registration failed: ${error.response.data.message || 'Please try again.'}`);
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
                    <h4>Franchise Register</h4>
                    <h1>Sign up to Matrimony</h1>
                    <p>Already a franchise? <Link to="/login-franchise">Login</Link></p>
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
                            type="text"
                            className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
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
                          {error && <small className="text-danger">{error}</small>}
                        </div>
                      </div>

                      <div className="row">
                       
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
                      </div>


                      <div className="row">
       
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
      </div>

      <div className="row">
      <div className="form-group col-12 col-md-6">
                  <label className="form-label">Referred By (Franchise ID)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="refBy"
                    placeholder="Enter referring franchise ID"
                    value={formData.refBy}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <label className="form-label">Upline By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="uplineId"
                    placeholder="Enter uplineId"
                    value={formData.uplineId}
                    onChange={handleChange}
                  />
                </div>
                      </div>

                      <div className="form-group col-12 col-md-6">
          <label className="lb">Package:</label>
          <select
            className="form-control"
            value={formData.package}
            onChange={handleChange}
            name='package'
            required
          >
            <option value="">Select Package</option>
              <option value='silver'>
                Silver
              </option>
              <option value='gold'>
              Gold
            </option>
          </select>
        </div>

                     



                      <button type="submit" className="btn btn-primary">Create Account</button>
                      <div className="form-tit">
                        <p className="mt-3">Already a franchise? <Link to="/login-franchise" className="login-path">Login</Link></p>
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

export default RegisterFranchise;
