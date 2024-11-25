import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap included in your project

const ProfileEdit = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: 'Male',
        city: 'Chennai',
        dob: '',
        age: '',
        height: '',
        weight: '',
        fathersName: '',
        mothersName: '',
        address: '',
        jobType: 'Business',
        companyName: '',
        salary: '',
        jobExperience: '',
        degree: '',
        school: '',
        college: '',
        whatsapp: '',
        facebook: '',
        instagram: '',
        x: '',
        youtube: '',
        linkedin: '',
        hobbies: []
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle multiple selections for hobbies
    const handleHobbiesChange = (e) => {
        const options = e.target.options;
        const selectedHobbies = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedHobbies.push(options[i].value);
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            hobbies: selectedHobbies,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // For demonstration, log the form data
    };

    return (
        <section>
            <div className="login pro-edit-update">
                <div className="container">
                    <div className="row">
                        <div className="inn">
                            <div className="rhs">
                                <div className="form-login">
                                    <form onSubmit={handleSubmit}>
                                        {/* PROFILE BIO */}
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
                                                    value={formData.name}
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
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    disabled
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
                                                    disabled
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
                                                />
                                            </div>
                                        </div>
                                        {/* END PROFILE BIO */}
                                        {/* ADVANCED BIO */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Basic info</h4>
                                                <h1>Advanced bio</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Gender:</label>
                                                    <select
                                                        className="form-select chosen-select"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">City:</label>
                                                    <select
                                                        className="form-select chosen-select"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="Chennai">Chennai</option>
                                                        <option value="Newyork">Newyork</option>
                                                        <option value="London">London</option>
                                                        <option value="Chicago">Chicago</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Date of birth:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="dob"
                                                        value={formData.dob}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Age:</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="age"
                                                        value={formData.age}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Height(ft) :</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="height"
                                                        value={formData.height}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Weight(kg):</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="weight"
                                                        value={formData.weight}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Fathers name:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="fathersName"
                                                        value={formData.fathersName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Mothers name:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="mothersName"
                                                        value={formData.mothersName}
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
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        {/* END ADVANCED BIO */}
                                        {/* JOB & EDUCATION */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Job details</h4>
                                                <h1>Job & Education</h1>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Job type:</label>
                                                <select
                                                    className="form-select chosen-select"
                                                    name="jobType"
                                                    value={formData.jobType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="Business">Business</option>
                                                    <option value="Employee">Employee</option>
                                                    <option value="Government">Government</option>
                                                    <option value="Jobless">Jobless</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Company name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="companyName"
                                                    value={formData.companyName}
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
                                                        value={formData.salary}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label className="lb">Job total experience:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="jobExperience"
                                                        value={formData.jobExperience}
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
                                                    value={formData.degree}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">School:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="school"
                                                    value={formData.school}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">College:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="college"
                                                    value={formData.college}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        {/* END JOB & EDUCATION */}
                                        {/* SOCIAL LINKS */}
                                        <div className="edit-pro-parti">
                                            <div className="form-tit">
                                                <h4>Social Links</h4>
                                                <h1>Social Links</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">WhatsApp:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="whatsapp"
                                                        value={formData.whatsapp}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">Facebook:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="facebook"
                                                        value={formData.facebook}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">Instagram:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="instagram"
                                                        value={formData.instagram}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">X:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="x"
                                                        value={formData.x}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">YouTube:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="youtube"
                                                        value={formData.youtube}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <label className="lb">LinkedIn:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="linkedin"
                                                        value={formData.linkedin}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="lb">Hobbies:</label>
                                                <select
                                                    multiple
                                                    className="form-select"
                                                    name="hobbies"
                                                    value={formData.hobbies}
                                                    onChange={handleHobbiesChange}
                                                >
                                                    <option value="Singing">Singing</option>
                                                    <option value="Dancing">Dancing</option>
                                                    <option value="Reading">Reading</option>
                                                    <option value="Traveling">Traveling</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* END SOCIAL LINKS */}
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary">
                                                Save Changes
                                            </button>
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

export default ProfileEdit;
