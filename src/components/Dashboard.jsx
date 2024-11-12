// src/components/DashboardLayout.jsx
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import DashboardProfile from "./User-dash/Profile";
import ChatList from "./User-dash/ChatList";
import Interests from "./User-dash/Interests";
import PlanDetails from "./User-dash/PlanDetails";
import Setting from "./User-dash/Setting";
import MainDash from "./User-dash/MainDash";
import ChatPage from "./User-dash/ChatPage";
import profiles from '../images/profiles/12.jpg'; // Import images

const DashboardLayout = () => {
  return (
    <section id="new-side" className="db">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <div className="db-nav">
              <div className="db-nav-pro">
                <img src={profiles} className="img-fluid" alt="" />
              </div>
              <div className="db-nav-list">
                <ul>
                  <li>
                    <NavLink
                      to="/dashboard/main"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/user-profile"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/user-interests"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Interests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/chat"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      ChatList
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/plane"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Plan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/user-setting"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/logout"
                      className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <Routes>
              <Route path="main" element={<MainDash />} />
              <Route path="user-profile" element={<DashboardProfile />} />
              <Route path="user-interests" element={<Interests />} />
              <Route path="chat" element={<ChatList />} />
              <Route path="chat/:name" element={<ChatPage />} />
              <Route path="plane" element={<PlanDetails />} />
              <Route path="user-setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
