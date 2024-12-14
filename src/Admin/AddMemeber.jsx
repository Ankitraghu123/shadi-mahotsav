import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country, State, City } from "country-state-city";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { addMember } from "../Features/Franchise/FranchiseSlice";

const AddMember = () => {
    const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [error, setError] = useState("");

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
    profileFor:'',
    franchiseId:currentFranchise?._id
  });

  useEffect(() => {
    // Update franchiseId when currentFranchise changes
    setFormData((prev) => ({
      ...prev,
      franchiseId: currentFranchise?._id || "",
    }));
  }, [currentFranchise]);

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
    const { name, value } = e.target;
    if (name === "mobileNumber") {
      if (value.length > 10 || isNaN(value)) {
        setError("Mobile number must be 10 digits and numeric.");
      } else if (value.length < 10) {
        setError("Mobile number should be exactly 10 digits.");
      } else {
        setError(""); // Clear error if validation passes
      }
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addMember(formData))
      .unwrap()
      .then(() => {
        toast.success("Member added successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          password: "",
          agree: false,
          gender: "",
          religion: "",
          country: "",
          city: "",
          state: "",
          education: "",
          dob: "",
          maritalStatus: "",
          couponCode: "",
          profileFor: "",
        });
        navigate('/admin-dashboard/all-members')
      })
      .catch((error) => {
        toast.error(`Error adding member: ${error.message}`);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Member</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div className="row">
        <div style={styles.formGroup} className="form-group col-12 col-md-6">
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup} className="form-group col-12 col-md-6">
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        </div>
        <div className="row">
        <div style={styles.formGroup} className="form-group col-12 col-md-6">
          <label htmlFor="mobileNumber" style={styles.label}>
            Mobile Number:
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            style={styles.input}
            maxLength={10}
            required
          />
           {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
        </div>
        <div style={styles.formGroup} className="form-group col-12 col-md-6">
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
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

                          />
                        </div>
                        <div className="form-group col-12 col-md-6">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-control"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}

                          >
                            <option value="">Select Marital Status</option>
                            <option value="unmarried">Unmarried</option>
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
        <button type="submit" style={styles.button}>
          Add Member
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {

    margin: "115px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddMember;
