import React, { useState } from 'react';
import { Container, Row, Col, Nav, NavDropdown, Offcanvas, Navbar, Collapse } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openMembers, setOpenMembers] = useState(false); // To handle the collapse of the members section
  const [openFranchise, setOpenFranchise] = useState(false); // To handle the collapse of the members section

  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const logoutHandler = () => {
    localStorage.clear();
    toast.success('Admin Logged Out');
    setTimeout(() => {
      navigate('/admin-dashboard/login')
    },100)
  };

  return (
    <div>
      {/* Navbar for mobile view */}
      <Navbar bg="secondary" variant="dark" expand="lg" id="admin-dash" className="sticky-top">
        <Navbar.Brand className="admin-logo mt-3" href="#home">
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
            
            {/* Members collapse section */}
            <NavLink
              onClick={() => setOpenMembers(!openMembers)}
              className={`nav-link ${openMembers ? 'active' : ''}`}
              aria-expanded={openMembers}
            >
              <FaUsers className="sidebar-icon" /> Members
            </NavLink>
            <Collapse in={openMembers}>
              <div>
                <NavLink to="/admin-dashboard/add-member" className={`nav-link ${location.pathname === '/add-member' ? 'active' : ''}`} onClick={toggleSidebar}>
                  Add Member
                </NavLink>
                <NavLink to="/admin-dashboard/all-members" className={`nav-link ${location.pathname === '/all-members' ? 'active' : ''}`} onClick={toggleSidebar}>
                  All Members
                </NavLink>
                <NavLink to="/admin-dashboard/members-by-date" className={`nav-link ${location.pathname === '/members-by-date' ? 'active' : ''}`} onClick={toggleSidebar}>
                  Members By Date
                </NavLink>
              </div>
            </Collapse>

            <NavLink to="/admin-dashboard/all-franchises" className={`nav-link ${location.pathname === '/all-franchises' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> All Franchises
            </NavLink>
            <NavLink to="/admin-dashboard/all-leads" className={`nav-link ${location.pathname === '/all-leads' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> All Leads
            </NavLink>
            <NavLink to="/admin-dashboard/coupons" className={`nav-link ${location.pathname === '/coupons' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> Coupons
            </NavLink>

            <NavLink to="/admin-dashboard/allot-coupons" className={`nav-link ${location.pathname === '/allot-coupons' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> Allot Coupons
            </NavLink>
            <NavLink to="/admin-dashboard/all-enquiries" className={`nav-link ${location.pathname === '/all-enquiries' ? 'active' : ''}`} onClick={toggleSidebar}>
              <FaUser className="sidebar-icon" /> All Enquiries
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
            <NavLink onClick={logoutHandler} className="nav-link">
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

                {/* Members collapse section */}
                <NavLink
                  onClick={() => setOpenMembers(!openMembers)}
                  className={`nav-link ${openMembers ? 'active' : ''}`}
                  aria-expanded={openMembers}
                >
                  <FaUsers className="sidebar-icon" /> Members
                </NavLink>
                <Collapse in={openMembers}>
                  <div>
                    <NavLink to="/admin-dashboard/add-member" className={`nav-link ${location.pathname === '/add-member' ? 'active' : ''}`}>
                      Add Member
                    </NavLink>
                    <NavLink to="/admin-dashboard/all-members" className={`nav-link ${location.pathname === '/all-members' ? 'active' : ''}`}>
                      All Members
                    </NavLink>
                    <NavLink to="/admin-dashboard/members-by-date" className={`nav-link ${location.pathname === '/members-by-date' ? 'active' : ''}`}>
                      Members By Date
                    </NavLink>
                  </div>
                </Collapse>
                <NavLink
                  onClick={() => setOpenFranchise(!openFranchise)}
                  className={`nav-link ${openFranchise ? 'active' : ''}`}
                  aria-expanded={openFranchise}
                >
                  <FaUsers className="sidebar-icon" /> Franchise
                </NavLink>
                <Collapse in={openFranchise}>
                  <div>
                  <NavLink to="/admin-dashboard/all-franchises" className={`nav-link ${location.pathname === '/all-franchises' ? 'active' : ''}`}>
                   All Franchises
                </NavLink>
                <NavLink to="/admin-dashboard/kyc-pending" className={`nav-link ${location.pathname === '/kyc-pending' ? 'active' : ''}`}>
                   Kyc Pending
                </NavLink>
                   
                  </div>
                </Collapse>
                <NavLink to="/admin-dashboard/all-leads" className={`nav-link ${location.pathname === '/all-leads' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" /> All Leads
                </NavLink>
                <NavLink to="/admin-dashboard/coupons" className={`nav-link ${location.pathname === '/coupons' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" /> Coupons
                </NavLink>

                <NavLink to="/admin-dashboard/allot-coupons" className={`nav-link ${location.pathname === '/allot-coupons' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" /> Allot Coupons
                </NavLink>
               
                <NavLink to="/admin-dashboard/all-enquiries" className={`nav-link ${location.pathname === '/all-enquiries' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" /> All Enquiries
                </NavLink>
                <NavLink to="/admin-dashboard/all-payouts" className={`nav-link ${location.pathname === '/all-payouts' ? 'active' : ''}`}>
                  <FaUser className="sidebar-icon" />Payout Requests
                </NavLink>
                <NavLink to="/admin-dashboard/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <FaCog className="sidebar-icon" /> Settings
                </NavLink>
                <NavLink to="/admin-dashboard/member" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <FaCog className="sidebar-icon" /> Member Detail
                </NavLink>
                {/* <NavDropdown title="Manage Users" id="nav-dropdown" className="nav-link">
                  <NavDropdown.Item href="/users/add">Add User</NavDropdown.Item>
                  <NavDropdown.Item href="/users/list">User List</NavDropdown.Item>
                </NavDropdown> */}
                <NavLink onClick={logoutHandler} className="nav-link">
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
        .admin-logo {
          margin-left: 1vmax;
          color: white !important;
          text-align: center;
        }

        .admin-logo span {
          color: #FFEEB2;
          font-weight: 700;
          text-style: italic;
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
          margin-top: .2vmax;
          color: #333;
          padding: 10px;
          display: flex;
          align-items: center;
        }

        .sidebar .nav-link:hover {
          background-color: #f0f0f0;
        }

        .sidebar .nav-link.active {
          background-color: #d1e7fd;
        }

        .sidebar .sidebar-icon {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;
