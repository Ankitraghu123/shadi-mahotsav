import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
  const users = [
    { user_id: 1, first_name: "John", last_name: "Doe", email: "john.doe@example.com", phone_number: "123-456-7890", gender: "Male", date_of_birth: "01-01-1990", profile_picture: "https://via.placeholder.com/150", address: "123 Main St", city: "New York", state: "NY", country: "USA", membership_status: "Active", registration_date: "01-01-2023", last_login_date: "10-11-2024" },
    { user_id: 2, first_name: "Jane", last_name: "Smith", email: "jane.smith@example.com", phone_number: "987-654-3210", gender: "Female", date_of_birth: "05-15-1992", profile_picture: "https://via.placeholder.com/150", address: "456 Oak St", city: "Los Angeles", state: "CA", country: "USA", membership_status: "Inactive", registration_date: "05-10-2024", last_login_date: "11-10-2024" },
    { user_id: 3, first_name: "Alice", last_name: "Johnson", email: "alice.johnson@example.com", phone_number: "555-123-4567", gender: "Female", date_of_birth: "09-20-1990", profile_picture: "https://via.placeholder.com/150", address: "789 Pine St", city: "San Francisco", state: "CA", country: "USA", membership_status: "Active", registration_date: "03-12-2022", last_login_date: "11-12-2024" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = users.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEntriesChange = (e) => setEntriesPerPage(Number(e.target.value));

  const totalPages = Math.ceil(users.length / entriesPerPage);

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="entries-per-page" className="form-label">Entries per page: </label>
        <select
          id="entries-per-page"
          value={entriesPerPage}
          onChange={handleEntriesChange}
          className="form-select w-auto"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th className="text-nowrap">User ID</th>
              <th className="text-nowrap">First Name</th>
              <th className="text-nowrap">Last Name</th>
              <th className="text-nowrap">Email</th>
              <th className="text-nowrap">Phone Number</th>
              <th className="text-nowrap">Gender</th>
              <th className="text-nowrap">Date of Birth</th>
              <th className="text-nowrap">Profile Picture</th>
              <th className="text-nowrap">City</th>
              <th className="text-nowrap">State</th>
              <th className="text-nowrap">Country</th>
              <th className="text-nowrap">Membership Status</th>
              <th className="text-nowrap">Registration Date</th>
              <th className="text-nowrap">Last Login Date</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((user) => (
              <tr key={user.user_id}>
                <td className="text-nowrap">{user.user_id}</td>
                <td className="text-nowrap">{user.first_name}</td>
                <td className="text-nowrap">{user.last_name}</td>
                <td className="text-nowrap">{user.email}</td>
                <td className="text-nowrap">{user.phone_number}</td>
                <td className="text-nowrap">{user.gender}</td>
                <td className="text-nowrap">{user.date_of_birth}</td>
                <td className="text-nowrap">
                  <img
                    src={user.profile_picture}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="rounded-circle"
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
                <td className="text-nowrap">{user.city}</td>
                <td className="text-nowrap">{user.state}</td>
                <td className="text-nowrap">{user.country}</td>
                <td className="text-nowrap">{user.membership_status}</td>
                <td className="text-nowrap">{user.registration_date}</td>
                <td className="text-nowrap">{user.last_login_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className="page-item">
                <button
                  className={`page-link ${currentPage === index + 1 ? 'bg-primary text-white' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
