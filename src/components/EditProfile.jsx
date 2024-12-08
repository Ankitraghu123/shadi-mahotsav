import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, getProfile } from "../Features/User/UserSlice";
import { Country, State, City } from "country-state-city";

const EditProfile = () => {
  const profileDetails = JSON.parse(localStorage.getItem("userData"));
  const userData = useSelector((state) => state.User?.userProfile);
  const { editedProfile } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    gender: "male",
    country: "",
    state: "",
    city: "",
    religion: "Christianity",
    community: "",
    subCommunity: "",
    gotra: "",
    caste: "",
    dob: "",
    height: "",
    weight: "",
    address: "",
    about:"",
    hobbies:"",
    interests:"",
    maritalStatus:"",
    jobType: "Business",
    companyName: "",
    salary: "",
    totalExperience: "",
    degree: "",
    school: "",
    college: "",
    fatherName: "",
    motherName: "",
    fathersOccupation: "",
    mothersOccupation: "",
    numberOfBrothers: "",
    brother1Name: "",
    brother1Occupation: "",
    brother1MaritalStatus: "",
    brother2Name: "",
    brother2Occupation: "",
    brother2MaritalStatus: "",
    numberOfSisters: "",
    sister1Name: "",
    sister1Occupation: "",
    sister1MaritalStatus: "",
    sister2Name: "",
    sister2Occupation: "",
    sister2MaritalStatus: "",
    manglik:"",
    zodiacSign:"",
    timeOfBirth:"",
    cityOfBirth:"",
    anyDisease:"",
    diseaseName:"",
    bloodGroup:"",
    physicalChallenges:"",
    otherPhysicallyDisabled:""
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    dispatch(getProfile(profileDetails?._id));
  }, [dispatch, profileDetails?._id]);

  // Update formData once userData is fetched
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        mobileNumber: userData.mobileNumber || "",
        gender: userData.gender || "male",
        country: userData.country || "",
        state: userData.state || "",
        city: userData.city || "",
        religion: userData.religion || "Christianity",
        community: userData.community || "",
        subCommunity: userData.subCommunity || "",
        gotra: userData.gotra || "",
        caste: userData.caste || "",
        dob: userData.dob || "",
        height: userData.height || "",
        weight: userData.weight || "",
        address: userData.address || "",
        about: userData.about || "",
        hobbies: userData.hobbies || "",
        interests: userData.interests || "",
        maritalStatus: userData.maritalStatus || "",
        jobType: userData.jobType || "Business",
        companyName: userData.companyName || "",
        salary: userData.salary || "",
        totalExperience: userData.totalExperience || "",
        degree: userData.degree || "",
        school: userData.school || "",
        college: userData.college || "",
        fatherName: userData.fatherName || "",
        motherName: userData.motherName || "",
        fathersOccupation: userData.fathersOccupation || "",
        mothersOccupation: userData.mothersOccupation || "",
        numberOfBrothers: userData.numberOfBrothers || "",
        brother1Name: userData.brother1Name || "",
        brother1Occupation: userData.brother1Occupation || "",
        brother1MaritalStatus: userData.brother1MaritalStatus || "",
        brother2Name: userData.brother2Name || "",
        brother2Occupation: userData.brother2Occupation || "",
        brother2MaritalStatus: userData.brother2MaritalStatus || "",
        numberOfSisters: userData.numberOfSisters || "",
        sister1Name: userData.sister1Name || "",
        sister1Occupation: userData.sister1Occupation || "",
        sister1MaritalStatus: userData.sister1MaritalStatus || "",
        sister2Name: userData.sister2Name || "",
        sister2Occupation: userData.sister2Occupation || "",
        sister2MaritalStatus: userData.sister2MaritalStatus || "",
        manglik: userData.manglik || "",
        zodiacSign: userData.zodiacSign || "",
        timeOfBirth: userData.timeOfBirth || "",
        cityOfBirth: userData.cityOfBirth || "",
        anyDisease: userData.anyDisease || "",
        diseaseName: userData.diseaseName || "",
        bloodGroup: userData.bloodGroup || "",
        physicalChallenges: userData.physicalChallenges || "",
        otherPhysicallyDisabled : userData.otherPhysicallyDisabled || ""
      });
      
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setFormData({ ...formData, country: value, state: "", city: "" });
      const selectedStates = State.getStatesOfCountry(value);
      setStates(selectedStates);
      setCities([]);
    } else if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
      const selectedCities = City.getCitiesOfState(formData.country, value);
      setCities(selectedCities);
    } else if (name === "city") {
      setFormData({ ...formData, city: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile({ id: userData?._id, formData }));
  };

  return (
    <section>
      <div className="login pro-edit-update">
        <div className="container">
          <div className="row">
            <div className="inn">
              <div className="rhs">
                <div className="form-login">
                  <form>
                    {/* Basic Info Section */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Basic info</h4>
                        <h1>Edit my profile</h1>
                      </div>
                      <div className="form-group">
                        <label className="lb">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                          name="name"
                          value={formData?.name}
                          onChange={handleChange}
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
                          value={formData?.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">Phone:</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                          name="mobileNumber"
                          value={formData?.mobileNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">Gender:</label>
                        <select
                          className="form-select"
                          name="gender"
                          value={formData?.gender}
                          onChange={handleChange}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    {/* Advanced Bio Section */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Advanced info</h4>
                        <h1>Advanced bio</h1>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Country:</label>
                          <select
                            className="form-select"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">{formData.country}</option>
                            {Country.getAllCountries().map((country) => (
                              <option
                                key={country.isoCode}
                                value={country.isoCode}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">State:</label>
                          <select
                            className="form-select"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            disabled={!states.length}
                          >
                            <option value="">{formData.state}</option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">City:</label>
                          <select
                            className="form-select"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            disabled={!cities.length}
                          >
                            <option value="">{formData.city}</option>
                            {cities.map((city) => (
                              <option key={city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Religion:</label>
                          <select
                            className="form-select"
                            name="religion"
                            value={formData?.religion}
                            onChange={handleChange}
                          >
                            <option>Hindu</option>
                            <option>Christian</option>
                            <option>Jain</option>
                            <option>Buddhist</option>
                            <option>Sikh</option>
                            <option>Jewish</option>
                            <option>Parsi</option>
                            <option>Muslim</option>
                            <option>Spritual - non religious</option>
                            <option>No Religion</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Community:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="community"
                            placeholder="Enter your zodiac sign"
                            value={formData?.community}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Sub Community:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="subCommunity"
                            placeholder="Enter your zodiac sign"
                            value={formData?.subCommunity}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Gotra:</label>
                          <select
                            className="form-control"
                            name="gotra"
                            value={formData.gotra}
                            onChange={handleChange}
                          >
                            <option value="">Select Gotra</option>
                            <option value="Bharadwaj">Bharadwaj</option>
                            <option value="Kashyap">Kashyap</option>
                            <option value="Vashishtha">Vashishtha</option>
                            <option value="Gautam">Gautam</option>
                            <option value="Agastya">Agastya</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="col-md-6 form-group">
                          <label className="lb">Caste:</label>
                          <select
                            className="form-control"
                            name="caste"
                            value={formData.caste}
                            onChange={handleChange}
                          >
                            <option value="">Select Caste</option>
                            <option value="General">General</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                       
                      </div>
                      <div className="row">
                      <div className="col-md-6 form-group">
                          <label className="lb">Date of Birth:</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            value={formData?.dob}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Height(ft):</label>
                          <input
                            type="text"
                            className="form-control"
                            name="height"
                            placeholder="Enter your height in Ft"
                            value={formData?.height}
                            onChange={handleChange}
                          />
                        </div>
                       
                      </div>
                      <div className="row">
                      <div className="col-md-6 form-group">
                          <label className="lb">Weight(kg) :</label>
                          <input
                            type="text"
                            className="form-control"
                            name="weight"
                            placeholder="Enter your weight"
                            value={formData?.weight}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Address:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter your address"
                            value={formData?.address}
                            onChange={handleChange}
                          />
                        </div>

                        
                      </div>

                   <div className="row">
                   <div className="col-md-6 form-group">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-select"
                            name="maritalStatus"
                            value={formData?.maritalStatus}
                            onChange={handleChange}
                          >
                            <option>unMarried</option>
                            <option>divorced</option>
                            <option>widow</option>
                            <option>other</option>
                          </select>
                        </div>

                      <div className="col-md-6 form-group">
                        <label className="lb">About:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="about"
                          placeholder="Enter About Yourself"
                          value={formData?.about}
                          onChange={handleChange}
                        />
                      </div>
                   </div>

                  <div className="row">
                  <div className="col-md-6 form-group">
                          <label className="lb">Hobbies :</label>
                          <input
                            type="text"
                            className="form-control"
                            name="hobbies"
                            placeholder="Enter your hobbies"
                            value={formData?.hobbies}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Interests :</label>
                          <input
                            type="text"
                            className="form-control"
                            name="interests"
                            placeholder="Enter your interests"
                            value={formData?.interests}
                            onChange={handleChange}
                          />
                        </div>
                  </div>

                        
                     
                    </div>

                    {/* Job & Education Section */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Job & Education</h4>
                      </div>
                      <div className="form-group">
                        <label className="lb">Job Type:</label>
                        <select
                          className="form-select"
                          name="jobType"
                          value={formData?.jobType}
                          onChange={handleChange}
                        >
                          <option>Business</option>
                          <option>Employee</option>
                          <option>Government</option>
                          <option>Jobless</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="lb">Company Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyName"
                          placeholder="Enter your company name"
                          value={formData?.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Salary:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="salary"
                            placeholder="Enter your salary"
                            value={formData?.salary}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Total Experience:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="totalExperience"
                            placeholder="Enter your experience"
                            value={formData?.totalExperience}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="lb">Degree:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="degree"
                          placeholder="Enter your degree"
                          value={formData?.degree}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">School Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="school"
                          placeholder="Enter your school name"
                          value={formData?.school}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="lb">College Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="college"
                          placeholder="Enter your college name"
                          value={formData?.college}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Family Details */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Family Details</h4>
                      </div>

                      {/* Parents' Details */}
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Father's Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fatherName"
                            placeholder="Enter your father's name"
                            value={formData.fatherName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Mother's Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="motherName"
                            placeholder="Enter your mother's name"
                            value={formData.motherName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Father's Occupation:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fathersOccupation"
                            placeholder="Enter your father's occupation"
                            value={formData.fathersOccupation}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Mother's Occupation:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="mothersOccupation"
                            placeholder="Enter your mother's occupation"
                            value={formData.mothersOccupation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Number of Brothers */}
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Number of Brothers:</label>
                          <input
                            type="number"
                            className="form-control"
                            name="numberOfBrothers"
                            placeholder="Enter number of brothers"
                            value={formData.numberOfBrothers}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <h6>Brother One</h6>
                      <div className="row">
                        <div className="col-md-4 form-group">
                          <label className="lb">Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="brother1Name"
                            placeholder="Enter name"
                            value={formData.brother1Name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Occupation </label>
                          <input
                            type="text"
                            className="form-control"
                            name="brother1Occupation"
                            placeholder="Enter Occupation"
                            value={formData.brother1Occupation}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-select"
                            name="brother1MaritalStatus"
                            value={formData?.brother1MaritalStatus}
                            onChange={handleChange}
                          >
                            <option>unMarried</option>
                            <option>divorced</option>
                            <option>widow</option>
                            <option>other</option>
                          </select>
                        </div>
                      </div>

                      <h6>Brother Two</h6>
                      <div className="row">
                        <div className="col-md-4 form-group">
                          <label className="lb">Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="brother2Name"
                            placeholder="Enter name"
                            value={formData.brother2Name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Occupation </label>
                          <input
                            type="text"
                            className="form-control"
                            name="brother2Occupation"
                            placeholder="Enter Occupation"
                            value={formData.brother2Occupation}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-select"
                            name="brother2MaritalStatus"
                            value={formData?.brother2MaritalStatus}
                            onChange={handleChange}
                          >
                            <option>unMarried</option>
                            <option>divorced</option>
                            <option>widow</option>
                            <option>other</option>
                          </select>
                        </div>
                      </div>

                      {/* Number of Sisters */}
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Number of Sisters:</label>
                          <input
                            type="number"
                            className="form-control"
                            name="numberOfSisters"
                            placeholder="Enter number of sisters"
                            value={formData.numberOfSisters}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <h6>Sister One</h6>
                      <div className="row">
                        <div className="col-md-4 form-group">
                          <label className="lb">Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="sister1Name"
                            placeholder="Enter name"
                            value={formData.sister1Name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Occupation </label>
                          <input
                            type="text"
                            className="form-control"
                            name="sister1Occupation"
                            placeholder="Enter Occupation"
                            value={formData.sister1Occupation}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-select"
                            name="sister1MaritalStatus"
                            value={formData?.sister1MaritalStatus}
                            onChange={handleChange}
                          >
                            <option>unMarried</option>
                            <option>divorced</option>
                            <option>widow</option>
                            <option>other</option>
                          </select>
                        </div>
                      </div>

                      <h6>Sister Two</h6>
                      <div className="row">
                        <div className="col-md-4 form-group">
                          <label className="lb">Name </label>
                          <input
                            type="text"
                            className="form-control"
                            name="sister2Name"
                            placeholder="Enter name"
                            value={formData.sister2Name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Occupation </label>
                          <input
                            type="text"
                            className="form-control"
                            name="sister2Occupation"
                            placeholder="Enter Occupation"
                            value={formData.sister2Occupation}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-4 form-group">
                          <label className="lb">Marital Status:</label>
                          <select
                            className="form-select"
                            name="brother2MaritalStatus"
                            value={formData?.sister2MaritalStatus}
                            onChange={handleChange}
                          >
                            <option>unMarried</option>
                            <option>divorced</option>
                            <option>widow</option>
                            <option>other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Astro Details */}
                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Astro Details</h4>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Manglik</label>
                          <select
                            className="form-control"
                            name="manglik"
                            value={formData.manglik}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Zodiac Sign:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zodiacSign"
                            placeholder="Enter your zodiac sign"
                            value={formData?.zodiacSign}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Time Of Birth</label>
                          <input
                            type="text"
                            className="form-control"
                            name="timeOfBirth"
                            placeholder="Enter your time of birth"
                            value={formData.timeOfBirth}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">City Of Birth</label>
                          <input
                            type="text"
                            className="form-control"
                            name="cityOfBirth"
                            placeholder="Enter your city of birth"
                            value={formData.cityOfBirth}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="edit-pro-parti">
                      <div className="form-tit">
                        <h4>Health Details</h4>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Any Disease</label>
                          <select
                            className="form-control"
                            name="anyDisease"
                            value={formData.anyDisease}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Disease Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="diseaseName"
                            placeholder="Enter disease name"
                            value={formData.diseaseName}
                            onChange={handleChange}
                            disabled={formData.anyDisease !== "Yes"} // Disable field unless "Yes" is selected
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Blood Group</label>
                          <input
                            type="text"
                            className="form-control"
                            name="bloodGroup"
                            placeholder="Enter blood group"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Physical Challenges</label>
                          <select
                            className="form-control"
                            name="physicalChallenges"
                            value={formData.physicalChallenges}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option value="None">None</option>
                            <option value="Hearing Impairment">
                              Hearing Impairment
                            </option>
                            <option value="Visual Impairment">
                              Visual Impairment
                            </option>
                            <option value="Locomotor Disability">
                              Locomotor Disability
                            </option>
                            <option value="Speech Disability">
                              Speech Disability
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                       {
                        formData.physicalChallenges == 'Other' ?  <div className="col-md-6 form-group">
                        <label className="lb">Other Physical Disablity</label>
                        <input
                          type="text"
                          className="form-control"
                          name="otherPhysicallyDisabled"
                          placeholder="Enter Other Physical Disablity"
                          value={formData.otherPhysicallyDisabled}
                          onChange={handleChange}
                        />
                      </div> : ''
                       }
                      </div>
                    </div>

                    <div>
                      <button onClick={handleSubmit}>Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
