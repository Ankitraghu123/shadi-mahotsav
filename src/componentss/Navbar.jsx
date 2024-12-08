import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { getCurrentFranchise } from "../Features/Franchise/FranchiseSlice";
import { useSelector } from "react-redux";
import logo from '../assets/download.png'
// import "./Navbar.css"; // Assuming you have this CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentFranchise = useSelector(state => state.Franchise.currentFranchise?.franchise)

  return (
    <header className="navbar fixed-top">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">

          <h1 className="navbar-logos ms-4">
           <img width="100px" src={logo}/>
          </h1>
        </div>

        {/* Center: Welcome Message */}
        <div className="navbar-center">
          <span className="text-white">Welcome, {currentFranchise?.name}</span>
        </div>

        {/* Right: Navigation Links and Profile */}
        <div className="right">
          <div className={`navbar-right ${isMenuOpen ? "menu-open" : ""}`}>
            <nav className="navbar-links">
              <Link to="/">Home</Link>
              <Link to="/frachise/profile">My Profile</Link>
              <Link to="/frachise/edit-profile">Edit Profile</Link>
              <Link to="/frachise/affiliate-panel">Affiliate Panel</Link>
              {/* <Link to="/dashboard">Dashboard</Link> */}
              {/* <Link to="/courses">Courses</Link> */}
            </nav>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span>☰</span>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <img
              src={currentFranchise?.profilePicture}
              alt="Profile"
              className="profile-icon"
            />
            <div className="dropdown-menu">
              <Link to="/frachise/profile">My Profile</Link>
              <Link to="/frachise/edit-profile">Edit Profile</Link>
              <Link to="/frachise/affiliate-panel">Affiliate Panel</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
