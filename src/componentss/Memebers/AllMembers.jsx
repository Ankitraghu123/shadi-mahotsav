import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../../Features/User/UserSlice';
import { addMemberToCoupon } from '../../Features/Franchise/FranchiseSlice';
import { GetUsersWithoutPlans } from '../../Features/Admin/AdminSlice';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AllMembers = () => {
  const currentFranchise = useSelector((state) => state.Franchise?.currentFranchise?.franchise);
  const members = useSelector((state) => state.Admin?.usersWithoutPlans);
  const dispatch = useDispatch();
  const {addedCouponToMember} = useSelector(state => state.Franchise)

  useEffect(() => {
    dispatch(GetUsersWithoutPlans());
  }, [dispatch,addedCouponToMember]);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActivePlan, setSearchActivePlan] = useState('');
  const [selectedCoupons, setSelectedCoupons] = useState({}); // To store selected coupon for each user
  const [loading, setLoading] = useState({}); // To manage loading state for each user

  const isPlanActive = (plan) => {
    const currentDate = new Date();
    const expiryDate = new Date(plan?.expiryDate);
    return expiryDate >= currentDate;
  };

  const filteredUsers = members?.filter((user) => {
    const query = searchQuery.toLowerCase();
    const isActivePlan =
      searchActivePlan === 'active'
        ? user?.plans?.find(isPlanActive)
        : searchActivePlan === 'inactive'
        ? !user?.plans?.find(isPlanActive)
        : true;
    const matchesSearch = user?.name?.toLowerCase().includes(query);
    return matchesSearch && isActivePlan;
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredUsers?.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(filteredUsers?.length / entriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEntriesChange = (e) => setEntriesPerPage(Number(e.target.value));

  const handleCouponChange = (userId, couponCode) => {
    setSelectedCoupons((prev) => ({
      ...prev,
      [userId]: couponCode,
    }));
  };

  const handleAddCoupon = async (userId) => {
    const couponCode = selectedCoupons[userId];
    if (couponCode) {
      setLoading((prev) => ({ ...prev, [userId]: true })); // Set loading for the user
      try {
        await dispatch(addMemberToCoupon({ memberId: userId, couponCode }));
        toast.success('Coupon successfully added!');
      } catch (error) {
        toast.error('Failed to add coupon. Please try again.');
      } finally {
        setLoading((prev) => ({ ...prev, [userId]: false })); // Reset loading state
      }
    } else {
      toast.error('Please select a coupon before saving.');
    }
  };

  return (
    <div id="margin-top" className="card-body">
      {/* Toast Container */}
      <ToastContainer />
      <div className="mt-5">
        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="active-plan" className="form-label">
            Active Plan:
          </label>
          <select
            id="active-plan"
            value={searchActivePlan}
            onChange={(e) => setSearchActivePlan(e.target.value)}
            className="form-select w-auto"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">No Active Plan</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th className="text-nowrap">Name</th>
                <th className="text-nowrap">Email</th>
                <th className="text-nowrap">Mobile Number</th>
                <th className="text-nowrap">Add Coupon</th>
                <th className="text-nowrap">Action</th> {/* Added column for the Save button */}
              </tr>
            </thead>
            <tbody>
              {currentEntries?.map((user) => (
                <tr key={user.user_id}>
                  <td className="text-nowrap">{user?.name}</td>
                  <td className="text-nowrap">{user?.email}</td>
                  <td className="text-nowrap">{user?.mobileNumber}</td>
                  <td className="text-nowrap">
                    <div className="d-flex align-items-center">
                      <select
                        className="form-select me-2"
                        onChange={(e) => handleCouponChange(user?._id, e.target.value)}
                        value={selectedCoupons[user?._id] || ''}
                      >
                        <option value="">Select Coupon</option>
                        <option value={currentFranchise?.couponOneMonth}>One Month Coupon</option>
                        <option value={currentFranchise?.couponThreeMonth}>Three Month Coupon</option>
                        <option value={currentFranchise?.couponOneYear}>One Year Coupon</option>
                      </select>
                    </div>
                  </td>
                  <td className="text-nowrap">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddCoupon(user?._id)}
                      disabled={loading[user?._id]} // Disable button while loading
                    >
                      {loading[user?._id] ? 'Saving...' : 'Save Coupon'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

export default AllMembers;
