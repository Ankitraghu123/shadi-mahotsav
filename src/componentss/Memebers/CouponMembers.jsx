import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProfiles } from '../Features/User/UserSlice';
// import { MdDelete, MdEdit } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { deleteMember } from '../Features/Admin/AdminSlice';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getCouponMembers } from '../../Features/Franchise/FranchiseSlice';

const CouponMembers = () => {
    const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
  const dispatch = useDispatch();
//   const members = useSelector((state) => state.User.allProfiles);
  const members = useSelector(state => state.Franchise?.couponMembers?.data)
  useEffect(() => {
    dispatch(getCouponMembers(currentFranchise?._id));
  }, [dispatch,currentFranchise?._id]);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const isPlanActive = (plan) => {
    const currentDate = new Date();
    const expiryDate = new Date(plan?.expiryDate);
    return expiryDate >= currentDate;
  };
  // Filter members based on the search query
  const filteredUsers = members?.filter((user) => {
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
<div id="margin-top" className="card-body">
    <div className=" mt-5" id='table-margin-top'>
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
              <th className="text-nowrap">Religion</th>
              <th className="text-nowrap">Active Plan</th>
              <th className="text-nowrap">Country</th>
              <th className="text-nowrap">State</th>
              <th className="text-nowrap">City</th>
              <th className="text-nowrap">Education</th>
              <th className="text-nowrap">Dob</th>
              <th className="text-nowrap">Age</th>
              <th className="text-nowrap">Height (ft)</th>
              <th className="text-nowrap">Weight (kg)</th>
              <th className="text-nowrap">Father's Name</th>
              <th className="text-nowrap">Mother's Name</th>
              <th className="text-nowrap">Address</th>
              <th className="text-nowrap">Job Type</th>
              <th className="text-nowrap">Company Name</th>
              <th className="text-nowrap">Salary</th>
              <th className="text-nowrap">Total Experience</th>
              <th className="text-nowrap">Degree</th>
              <th className="text-nowrap">School</th>
              <th className="text-nowrap">College</th>
              <th className="text-nowrap">Zodiac Sign</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries?.map((user) => {
                const activePlan = user?.plans?.find(isPlanActive);
                return <tr key={user.user_id}>
                <td className="text-nowrap">
                  <img
                    className="rounded-circle"
                    width="60px"
                    height="60px"
                    src={user?.profilePicture}
                    alt=""
                  />
                </td>
                <td className="text-nowrap">{user?.name}</td>
                <td className="text-nowrap">{user?.email}</td>
                <td className="text-nowrap">{user?.mobileNumber}</td>
                <td className="text-nowrap">{user?.gender}</td>
                <td className="text-nowrap">{user?.religion}</td>
                <td className="text-nowrap">
                    {activePlan ? (
                      <>
                        <div>Plan Name: {activePlan.plan.name}</div>
                        <div>Expiry: {new Date(activePlan.expiryDate).toLocaleDateString()}</div>
                      </>
                    ) : (
                      <span>No Active Plan</span>
                    )}
                  </td>
                <td className="text-nowrap">{user?.country}</td>
                <td className="text-nowrap">{user?.state}</td>
                <td className="text-nowrap">{user?.city}</td>
                <td className="text-nowrap">{user?.edutaion}</td>
                <td className="text-nowrap">{user?.dob}</td>
                <td className="text-nowrap">{user?.age}</td>
                <td className="text-nowrap">{user?.height}</td>
                <td className="text-nowrap">{user?.weight}</td>
                <td className="text-nowrap">{user?.fatherName}</td>
                <td className="text-nowrap">{user?.motherName}</td>
                <td className="text-nowrap">{user?.address}</td>
                <td className="text-nowrap">{user?.jobType}</td>
                <td className="text-nowrap">{user?.companyName}</td>
                <td className="text-nowrap">{user?.salary}</td>
                <td className="text-nowrap">{user?.totalExperience}</td>
                <td className="text-nowrap">{user?.degree}</td>
                <td className="text-nowrap">{user?.school}</td>
                <td className="text-nowrap">{user?.college}</td>
                <td className="text-nowrap">{user?.zodiacSign}</td>

              </tr>
            }

            )}
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
    </div>
  );
};

export default CouponMembers;
