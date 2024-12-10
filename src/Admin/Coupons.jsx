import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addCoupon, allCoupons, deleteCoupon } from '../Features/Coupon/CouponSlice';

const Coupons = () => {
  const dispatch = useDispatch();
  const coupons = useSelector(state => state.Coupon?.allCoupons?.coupons)
  const { isLoading, isError,coupon,deletedCoupon } = useSelector((state) => state?.Coupon);
// const isLoading = true
// const isError = "dnsnh"
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  // Fetch coupons when component mounts
  useEffect(() => {
    dispatch(allCoupons());
  }, [dispatch,coupon,deletedCoupon]);

  // Handle form submission for adding a coupon
  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (name && amount) {
      dispatch(addCoupon({ name, amount }));
      setName('');
      setAmount('');
    }
  };

  // Handle delete action
  const handleDeleteCoupon = (couponId) => {
    dispatch(deleteCoupon(couponId));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Manage Coupons</h3>

      {/* Add Coupon Form */}
      <form onSubmit={handleAddCoupon} className="mb-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Coupon Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Coupon Amount</label>
          <input
            type="text"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Coupon
        </button>
      </form>

      {/* Error Message */}
      {isError && <div className="alert alert-danger">{isError}</div>}

      {/* Coupons Table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="3" className="text-center">Loading...</td>
              </tr>
            ) : coupons?.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">No coupons available</td>
              </tr>
            ) : (
              coupons?.map((coupon) => (
                <tr key={coupon._id}>
                  <td>{coupon.name}</td>
                  <td>{coupon.amount}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteCoupon(coupon._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coupons;
