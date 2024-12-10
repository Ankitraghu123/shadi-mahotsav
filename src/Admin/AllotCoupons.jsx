import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllFranchise } from "../Features/Franchise/FranchiseSlice";
import { allCoupons, allotCoupons } from "../Features/Coupon/CouponSlice";

const AllotCoupons = () => {
  const dispatch = useDispatch();

  // Redux state to get coupons and franchises
  const coupons = useSelector((state) => state.Coupon?.allCoupons?.coupons);
  const franchises = useSelector(
    (state) => state.Franchise?.getAllFranchises?.franchises
  );

  // State to hold selected coupon, filtered franchises, and selected franchises
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [filteredFranchises, setFilteredFranchises] = useState([]);
  const [selectedFranchises, setSelectedFranchises] = useState([]);

  // Fetching coupons and franchises on mount
  useEffect(() => {
    dispatch(allCoupons());
    dispatch(getAllFranchise());
  }, [dispatch]);

  // Handle coupon selection and filter franchises based on selected coupon
  const handleCouponChange = (event) => {
    const selectedCouponValue = event.target.value;
    setSelectedCoupon(selectedCouponValue);

    if (selectedCouponValue) {
      setFilteredFranchises(
        franchises?.filter(
          (franchise) =>
            !franchise.adminCoupons ||
            !franchise.adminCoupons.includes(selectedCouponValue)
        )
      );
    } else {
      setFilteredFranchises(franchises);
    }
  };

  // Handle selection of individual franchises
  const handleFranchiseSelection = (franchiseId) => {
    if (selectedFranchises.includes(franchiseId)) {
      setSelectedFranchises(selectedFranchises.filter((id) => id !== franchiseId));
    } else {
      setSelectedFranchises([...selectedFranchises, franchiseId]);
    }
  };

  // Handle selection of all franchises
  const handleSelectAll = () => {
    if (selectedFranchises.length === filteredFranchises.length) {
      setSelectedFranchises([]); // Deselect all
    } else {
      setSelectedFranchises(filteredFranchises.map((franchise) => franchise._id)); // Select all
    }
  };

  // Handle coupon allotment
  const handleAllotCoupon = () => {
    if (selectedCoupon && selectedFranchises.length > 0) {
      // Dispatch action to allot coupon to selected franchises
      dispatch(allotCoupons({couponId: selectedCoupon, franchiseIds: selectedFranchises }));
      alert("Coupon allotted successfully!");
      setSelectedCoupon("");
      setSelectedFranchises([]);
    } else {
      alert("Please select a coupon and at least one franchise.");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Allot Coupons to Franchises</h3>

      {/* Dropdown for selecting coupon */}
      <div className="mb-3">
        <label htmlFor="coupon" className="form-label">Select Coupon</label>
        <select
          id="coupon"
          className="form-select"
          value={selectedCoupon}
          onChange={handleCouponChange}
        >
          <option value="">--Select a Coupon--</option>
          {coupons?.map((coupon) => (
            <option key={coupon._id} value={coupon._id}>
              {coupon.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table for displaying filtered franchises */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedFranchises.length === filteredFranchises.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Wallet Amount</th>
              <th>Allotted Coupons</th>
            </tr>
          </thead>
          <tbody>
            {filteredFranchises?.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No franchises available
                </td>
              </tr>
            ) : (
              filteredFranchises?.map((franchise) => (
                <tr key={franchise._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedFranchises.includes(franchise._id)}
                      onChange={() => handleFranchiseSelection(franchise._id)}
                    />
                  </td>
                  <td>{franchise.name}</td>
                  <td>{franchise.email}</td>
                  <td>{franchise.couponWallet}</td>
                  <td>
                    {franchise.adminCoupons?.length > 0
                      ? franchise.adminCoupons.map((coupon) => coupon.name).join(", ")
                      : "No coupons allotted"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Button to allot selected coupon */}
      <div className="mt-3">
        <button
          className="btn btn-primary"
          onClick={handleAllotCoupon}
          disabled={!selectedCoupon || selectedFranchises.length === 0}
        >
          Allot Coupon
        </button>
      </div>
    </div>
  );
};

export default AllotCoupons;
