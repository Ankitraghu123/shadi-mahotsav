import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../Features/User/UserSlice';
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteMember } from '../Features/Admin/AdminSlice';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';  
import { getAllFranchise } from '../Features/Franchise/FranchiseSlice';

const AllFranchise = () => {
  const dispatch = useDispatch();
  const franchises = useSelector((state) => state.Franchise?.getAllFranchises?.franchises);
  useEffect(() => {
    dispatch(getAllFranchise());
  }, []);

  const deleteFranchiseHandler = () => {
    dispatch()
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter franchises based on the search query
  const filteredUsers = franchises?.filter((franchise) => {
    const query = searchQuery.toLowerCase();
    return (
      franchise?.name?.toLowerCase().includes(query) ||
      franchise?.email?.toLowerCase().includes(query) ||
      franchise?.mobileNumber?.toString().includes(query) 
      
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

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th className="text-nowrap">Profile Pic</th>
              <th className="text-nowrap">Name</th>
              <th className="text-nowrap">Email</th>
              <th className="text-nowrap">Mobile Number</th>
              <th className="text-nowrap">Gender</th>
              <th className="text-nowrap">Dob</th>
              <th className="text-nowrap">state</th>
              <th className="text-nowrap">City</th>
              <th className="text-nowrap">Aadhar Number</th>
              <th className="text-nowrap">Pan Number</th>
              <th className="text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries?.map((franchise) => (
              <tr key={franchise.user_id}>
                <td className="text-nowrap">
                  <Link to={`/admin-dashboard/franchise-detail/${franchise._id}`}>
                  <img
                    className="rounded-circle"
                    width="60px"
                    height="60px"
                    src={franchise?.profilePicture}
                    alt=""
                  /></Link>
                </td>
                <td className="text-nowrap">{franchise?.name}</td>
                <td className="text-nowrap">{franchise?.email}</td>
                <td className="text-nowrap">{franchise?.mobileNumber}</td>
                <td className="text-nowrap">{franchise?.kycId?.gender}</td>
                <td className="text-nowrap">{franchise?.kycId?.dob}</td>
                <td className="text-nowrap">{franchise?.state}</td>
                <td className="text-nowrap">{franchise?.city}</td>
                <td className="text-nowrap">{franchise?.kycId?.aadharCardNumber}</td>
                <td className="text-nowrap">{franchise?.kycId?.panCardNumber}</td>
                <td className="text-nowrap"  >
                {/* <OverlayTrigger
        placement="top" // Tooltip placement
        overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>} // Tooltip text
      > */}
        {/* <Link to={`/admin-dashboard/edit-member/${franchise?._id}`} className="icon-link"> */}
          {/* <MdEdit id='icon-size' className="icon edit-icon" /> */}
        {/* </Link> */}
      {/* </OverlayTrigger> */}
      
      {/* Delete Icon with Tooltip */}
      <OverlayTrigger
        placement="top" // Tooltip placement
        overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>} // Tooltip text
      >
        <Link onClick={() => deleteFranchiseHandler(franchise?._id)} className="icon-link">
          <MdDelete id='icon-size' className="icon delete-icon" />
        </Link>
      </OverlayTrigger>
                </td>
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

export default AllFranchise;
