import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Country, State, City } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { addLead, allLeadsByFranchise, editLead } from "../../Features/Lead/LeadSlice";  // Assuming updateLead exists in your redux slice

const LeadsDetails = () => {
  const dispatch = useDispatch();
  const currentFranchise = useSelector((state) => state.Franchise?.currentFranchise?.franchise);
  const allLeads = useSelector((state) => state.Lead?.allFranchiseLeads?.leads);
  const { lead,editedLead } = useSelector((state) => state.Lead);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    franchiseId: currentFranchise?._id,
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  const [showModal, setShowModal] = useState(false);
  const [editLeadId, setEditLeadId] = useState(null);

  useEffect(() => {
    if (currentFranchise?._id) {
      setFormData((prevData) => ({
        ...prevData,
        franchiseId: currentFranchise._id,
      }));
    }
  }, [currentFranchise]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (currentFranchise?._id) {
      dispatch(allLeadsByFranchise(currentFranchise._id));
    }
  }, [dispatch, lead,editedLead]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
      state: "", // Reset state and city when country changes
      city: "",
    }));
    setStates(State.getStatesOfCountry(selectedCountry));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState,
      city: "", // Reset city when state changes
    }));
    setCities(City.getCitiesOfState(formData.country, selectedState));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editLeadId) {
      dispatch(editLead({ ...formData, _id: editLeadId }));
    } else {
      dispatch(addLead(formData));
    }
    setShowModal(false); // Close modal after submitting
  };

  // Handle the edit button click
  const handleEdit = (lead) => {
    setEditLeadId(lead._id);
    setFormData({
      name: lead.name,
      email: lead.email,
      mobileNumber: lead.mobileNumber,
      country: lead.country,
      state: lead.state,
      city: lead.city,
      gender: lead.gender,
      franchiseId: lead.franchiseId,
    });
    setShowModal(true);
  };

  // Pagination logic
  const totalItems = allLeads?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };

  return (
    <div id="margin-top" className="container mt-5">
      <div className="card">
        <div className="card-header p-0">
          <img src="https://skillsikhar.com/user/img/leadsdetail.jpg" className="img-fluid w-100" alt="Leads Detail" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Add Lead Details</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Name */}
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Mobile Number */}
              <div className="col-md-6 mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Country */}
              <div className="col-md-6 mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className="col-md-6 mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="col-md-6 mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <select
                  className="form-select"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender */}
              <div className="col-md-6 mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Table for Displaying Leads */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Leads Table</h5>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <label htmlFor="itemsPerPage" className="form-label">
                Items Per Page:
              </label>
              <select
                id="itemsPerPage"
                className="form-select"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Country</th>
        <th>State</th>
        <th>City</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {allLeads?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((lead, index) => (
        <tr key={lead._id}>
          <td>{index + 1}</td>
          <td>{lead.name}</td>
          <td>{lead.email}</td>
          <td>{lead.mobileNumber}</td>
          <td>{lead.country}</td>
          <td>{lead.state}</td>
          <td>{lead.city}</td>
          <td>{lead.gender}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => handleEdit(lead)}
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Modal for Editing Lead */}
          {showModal && (
            <div className="modal" tabIndex="-1" style={{ display: "block" }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Lead</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="editName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="editName"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="editEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="editEmail"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                        {/* Mobile Number */}
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Country */}
              <div className=" mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <select
                  className="form-select"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender */}
              <div className=" mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
                      {/* Other form fields for editing */}
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadsDetails;
