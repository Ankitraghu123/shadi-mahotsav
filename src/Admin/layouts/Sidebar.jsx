import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavDropdown, Offcanvas, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaUsers } from 'react-icons/fa';

const AdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      {/* Navbar for mobile view */}
      <Navbar bg="secondary" variant="dark" expand="lg" id="admin-dash" className="sticky-top">
        <Navbar.Brand className="admin-logo" href="#home">
          Admin <span>Dashboard</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleSidebar} />
      </Navbar>

      {/* Offcanvas Sidebar for mobile view */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start" className="offcanvas-sidebar">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/admin-dashboard/main" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaHome className="sidebar-icon" /> Dashboard
            </NavLink>
            <NavLink to="/admin-dashboard/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> Profile
            </NavLink>
            <NavLink to="/admin-dashboard/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaCog className="sidebar-icon" /> Settings
            </NavLink>

            <NavLink to="/admin-dashboard/member" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaCog className="sidebar-icon" /> Member Detail
            </NavLink>

            <NavDropdown title="Manage Users" id="nav-dropdown" className="nav-link">
              <NavDropdown.Item href="/users/add">Add User</NavDropdown.Item>
              <NavDropdown.Item href="/users/list">User List</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/logout" className="nav-link" onClick={toggleSidebar}>
              <FaSignOutAlt className="sidebar-icon" /> Logout
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar and Main Content */}
      <Container fluid>
        <Row>
          {/* Sidebar for Desktop View */}
          <Col md={2} className="d-none d-md-block sidebar">
            <div className="sidebar-content" id="content-sidebar">
              <div className="sticky-top p-3 bg-white"></div>
              <Nav className="flex-column">
                <NavLink to="/admin-dashboard/main" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  <FaHome className="sidebar-icon" /> Dashboard
                </NavLink>
                <NavLink to="/admin-dashboard/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" /> Profile
                </NavLink>
                <NavLink to="/admin-dashboard/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <FaCog className="sidebar-icon" /> Settings
                </NavLink>
                <NavLink to="/admin-dashboard/member" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <FaCog className="sidebar-icon" /> Member Details
                </NavLink>
                <NavDropdown title="Manage Users" id="nav-dropdown" className="nav-link">
                  <NavDropdown.Item href="/users/add">Add User</NavDropdown.Item>
                  <NavDropdown.Item href="/users/list">User List</NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/logout" className="nav-link">
                  <FaSignOutAlt className="sidebar-icon" /> Logout
                </NavLink>
              </Nav>
            </div>
          </Col>

          {/* Main Content */}
          <Col md={10} className="main-content">
            <div>
              {/* Your main content goes here */}
              <h2>Welcome to Admin Dashboard</h2>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Additional Styles */}
      <style jsx>{`

      .admin-logo{
      margin-left:1vmax;
      color:white !important;
      text-align:center
      }

      .admin-logo span{
      color:#FFEEB2;
      font-weight:700;
      text-style:italic;
      }
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 250px;
          background-color: white;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }

        .sidebar .sticky-top {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          z-index: 1020;
        }

        .sidebar-content {
          padding-top: 60px;
          height: 100vh;
          overflow-y: auto;
        }

        .sidebar .nav-link {
        margin-top:.2vmax;
          color: #333;
          padding: 10px;
          display: flex;
          align-items: center;
        }

        .sidebar .nav-link:hover {
          background-color: #f0f0f0;
        }

        .sidebar .nav-link.active {
        border-radius:10px;
         box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease !important;
          background-color:#FFEEB2;
          color: white;
        }

        .sidebar .sidebar-icon {
          margin-right: 10px;
        }

        .main-content {
          margin-left: 250px;
          padding: 20px;
        }

        .main-content h2 {
          margin-top: 20px;
        }

        /* Styles for Mobile Offcanvas */
        @media (max-width: 992px) {
          .main-content {
            margin-left: 0;
          }

          .offcanvas-sidebar .nav-link {
            display: flex;
            align-items: center;
            color: #333;
            padding: 10px;
          }

          .offcanvas-sidebar .nav-link:hover,
          .offcanvas-sidebar .nav-link.active {
            background-color: #007bff;
            color: white;
          }

          .offcanvas-sidebar .sidebar-icon {
            margin-right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;
