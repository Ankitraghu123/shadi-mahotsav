import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersRegisterationByDate, GetUsersWithoutPlans } from '../Features/Admin/AdminSlice';

const MemeberByDate = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Admin.userRegisterationByDate);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (startDate || endDate) {
      dispatch(GetUsersRegisterationByDate({ startDate, endDate }));
    }
  }, [dispatch, startDate, endDate]);

  const handleFilter = () => {
    if (!startDate && !endDate) {
      alert('Please select at least one date.');
      return;
    }
    dispatch(GetUsersRegisterationByDate({ startDate, endDate }));
    setCurrentPage(1); // Reset to first page after filtering
  };

  const filteredUsers = users?.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user?.name?.toLowerCase().includes(query) ||
      user?.email?.toLowerCase().includes(query) ||
      user?.mobileNumber?.toString().includes(query) ||
      user?.gender?.toLowerCase().includes(query) ||
      user?.religion?.toLowerCase().includes(query) ||
      user?.city?.toLowerCase().includes(query) ||
      user?.state?.toLowerCase().includes(query) ||
      user?.country?.toLowerCase().includes(query) ||
      user?.education?.toLowerCase().includes(query) ||
      user?.dob?.toLowerCase().includes(query) ||
      user?.fatherName?.toLowerCase().includes(query) ||
      user?.motherName?.toLowerCase().includes(query) ||
      user?.address?.toLowerCase().includes(query) ||
      user?.jobType?.toLowerCase().includes(query) ||
      user?.companyName?.toLowerCase().includes(query) ||
      user?.salary?.toLowerCase().includes(query) ||
      user?.totalExperience?.toLowerCase().includes(query) ||
      user?.degree?.toLowerCase().includes(query) ||
      user?.school?.toLowerCase().includes(query) ||
      user?.college?.toLowerCase().includes(query) ||
      user?.zodiacSign?.toLowerCase().includes(query)
    );
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredUsers?.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(filteredUsers?.length / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEntriesChange = (e) => setEntriesPerPage(Number(e.target.value));

  return (
    <div className="container mt-5">
      {/* Date Filters */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="start-date" className="form-label">
            Start Date:
          </label>
          <input
            type="date"
            id="start-date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="end-date" className="form-label">
            End Date:
          </label>
          <input
            type="date"
            id="end-date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleFilter}>
          Filter Users
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page when searching
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="entries-per-page" className="form-label">
          Entries per page:
        </label>
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

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              {/* Add additional columns as needed */}
            </tr>
          </thead>
          <tbody>
            {currentEntries?.map((user) => (
              <tr key={user.user_id}>
                <td>
                  <img
                    className="rounded-circle"
                    width="60px"
                    height="60px"
                    src={user?.profilePicture}
                    alt=""
                  />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
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

export default MemeberByDate;
