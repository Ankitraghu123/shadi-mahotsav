import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const logoutHandler = () => {
    localStorage.clear();
    toast.success('Admin Logged Out')
     navigate('/login-franchise');
  }
  return (
    <>
      <div className="menu-button">
        <div className="menu-content">
          <p className="bg-black text-white text-center">Welcome ! Siddhant sahu</p>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""} overflow-x-scroll`} style={{marginBottom:"10px"}}>
        <nav className="sidebar-nav">
          <Link to="/frachise/*" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-user"></i> Dashboard
          </Link>
          {/* <Link to="/frachise/earning" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-edit"></i> My Earnings
          </Link> */}

          {/* <div id="dropping" className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <button className="dropdown-btn" onClick={toggleDropdown}>
              <i className="fas fa-wallet"></i> Wallet
              <i className={`fas fa-chevron-${isDropdownOpen ? "up" : "down"}`}></i>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/wallet/upgrade-income" onClick={() => setSidebarOpen(false)}>
                  <i className="fas fa-arrow-up"></i> Upgrade Wallet
                </Link>
                <Link to="/wallet/cfc-income" onClick={() => setSidebarOpen(false)}>
                  <i className="fas fa-money-bill-wave"></i> CFC  Wallet
                </Link>
                <Link to="/wallet/cmc-income" onClick={() => setSidebarOpen(false)}>
                  <i className="fas fa-wallet"></i> CMC  Wallet
                </Link>
                <Link to="/wallet/retail-income" onClick={() => setSidebarOpen(false)}>
                  <i className="fas fa-store"></i> Retail  Wallet
                </Link>
                <Link to="/wallet/coupons-points" onClick={() => setSidebarOpen(false)}>
                  <i className="fas fa-gift"></i> Coupons  Wallet
                </Link>
              </div>
            )}
          </div> */}

          {/* <Link to="/frachise/achievement" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-book"></i> My Achievements
          </Link> */}
          {/* <Link to="/frachise/leaderboard" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-certificate"></i> Leaderboard
          </Link> */}
          <Link to="/frachise/payout" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-users"></i> Payout Details
          </Link>
          <Link to="/frachise/add-member" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-users"></i> Add Member
          </Link>
          <Link to="/frachise/direct-member" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-users"></i> Direct Member
          </Link>
          <Link to="/frachise/coupon-member" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-users"></i> Coupon Member
          </Link>
          <Link to="/frachise/leads" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-arrow-up"></i> Leads Details
          </Link>
          <Link to="/frachise/kyc" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-id-card"></i> KYC Details
          </Link>
          <Link to="/frachise/nominee" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-user-friends"></i> Nominee Details
          </Link>
          <Link to="/frachise/link-generator" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-link"></i> Link Generator
          </Link>
          <Link to="/frachise/referral" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-user-plus"></i> Referral Details
          </Link>
          <Link to="/frachise/team" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-user-plus"></i> All Team
          </Link>
          <Link to="/frachise/tree-view" onClick={() => setSidebarOpen(false)}>
            <i className="fas fa-user-plus"></i> Tree View
          </Link>
          <Link  onClick={logoutHandler} style={{marginBottom:"40px"}}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>

          {/* Wallet Dropdown */}
        

        </nav>
      </aside>
      <div
        className={`backdrop ${isSidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
