import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './layouts/Sidebar';
// import TopNavbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router';
// import MainDash from './User-dash/MainDash';
// import DashboardProfile from './User-dash/Profile';
import Refferal from './Refferal';
import Table from './Table';
import UserForm from './UserForm';
import MembershipDetailsForm from './MembershipDetailsForm';

// import from  './AdminDashboard.css'
function AdminDashboard() {
  return (
    <Container id="admin-dash" fluid className="p-0">
      <Row className="gx-0">
        <Col md={3} lg={2} className="bg-dark mt-lg-5">
          <Sidebar />
        </Col>
        <Col md={9} lg={10} className="d-flex flex-column mt-lg-5">
          {/* <TopNavbar /> */}
          <main className="flex-grow-1 p-4 bg-light">

            <Routes>
              <Route path="main" element={<Refferal />} />
              <Route path="profile" element={<Table />} />
              <Route path="settings" element={<UserForm />} />
              <Route path="member" element={<MembershipDetailsForm />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
