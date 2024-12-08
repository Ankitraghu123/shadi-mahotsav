import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, getProfile } from '../Features/User/UserSlice';
import { useParams } from 'react-router';

const EditMember = () => {
  const {id} = useParams()
  const userData = useSelector((state) => state.User?.userProfile);
  const { editedProfile } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    gender: 'male',
    city: '',
    state: '',
    country: '',
    religion: 'Christianity',
    zodiacSign: '',
    dob: '',
    height: '',
    weight: '',
    fatherName: '',
    motherName: '',
    address: '',
    jobType: 'Business',
    companyName: '',
    salary: '',
    totalExperience: '',
    degree: '',
    school: '',
    college: '',
  });

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch,id]);

  // Update formData once userData is fetched
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        mobileNumber: userData.mobileNumber || '',
        gender: userData.gender || 'male',
        city: userData.city || '',
        state: userData.state || '',
        country: userData.country || '',
        religion: userData.religion || 'Christianity',
        zodiacSign: userData.zodiacSign || '',
        dob: userData.dob || '',
        height: userData.height || '',
        weight: userData.weight || '',
        fatherName: userData.fatherName || '',
        motherName: userData.motherName || '',
        address: userData.address || '',
        jobType: userData.jobType || 'Business',
        companyName: userData.companyName || '',
        salary: userData.salary || '',
        totalExperience: userData.totalExperience || '',
        degree: userData.degree || '',
        school: userData.school || '',
        college: userData.college || '',
        about: userData.about || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
                  <form >
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
                          name="phone"
                          value={formData?.phone}
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
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
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
                          <label className="lb">City:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="Enter your city"
                            value={formData?.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">State:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            placeholder="Enter your state"
                            value={formData?.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Country:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            placeholder="Enter your country"
                            value={formData?.country}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label className="lb">Religion:</label>
                          <select
                            className="form-select"
                            name="religion"
                            value={formData?.religion}
                            onChange={handleChange}
                          >
                            <option>Christianity</option>
                            <option>Hindu</option>
                            <option>Islam</option>
                            <option>Sikh</option>
                            <option>Nonreligious</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
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
                      </div>
                      <div className="row">
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
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label className="lb">Father's Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="fatherName"
                            placeholder="Enter your father's name"
                            value={formData?.fatherName}
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
                            value={formData?.motherName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
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

                      <div className="form-group">
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
                    <div >
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

export default EditMember;
