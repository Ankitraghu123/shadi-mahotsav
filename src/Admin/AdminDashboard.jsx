import React, { useEffect } from 'react';

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
import AllMembers from './AllMembers';
import AllEnquiries from './AllEnquiries';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersWithActivePlans } from '../Features/Admin/AdminSlice';
import { useSearchParams } from 'react-router-dom';
import PaidMembers from './PaidMembersTable';
import FreeMember from './FreeMember';
import TodayJoinedMembers from './TodayJoinedMembers';
import MemeberByDate from './MemebersByDate';
import AddMember from './AddMemeber';
import EditMember from './EditMember';
import AllFranchise from './AllFranchise';
import FranchiseDetail from './FranchiseDetail';
import AdminProtectedRoute from './AdminProtectedRoutes';
import KycPending from './KycPending';
import AllPayouts from './AllPayouts';

// import from  './AdminDashboard.css'
function AdminDashboard() {

  return (
    <Container id="admin-dash" fluid className="p-0">
      <Row className="gx-0 mt-5">
        <Col md={3} lg={2} className="bg-dark mt-lg-5">
          <Sidebar />
        </Col>
        <Col md={9} lg={10} className="d-flex flex-column mt-lg-5">
          {/* <TopNavbar /> */}
          <main className="flex-grow-1 p-4 bg-light">
          <Routes>
              {/* Wrap the routes in AdminProtectedRoute */}
              <Route
                path="*"
                element={
                  <AdminProtectedRoute>
            <Routes>
              <Route path="main" element={<Refferal />} />
              <Route path="profile" element={<Table />} />
              <Route path="all-members" element={<AllMembers />} />
              <Route path="all-franchises" element={<AllFranchise />} />
              <Route path="kyc-pending" element={<KycPending />} />
              <Route path="franchise-detail/:id" element={<FranchiseDetail />} />
              <Route path="all-enquiries" element={<AllEnquiries />} />
              <Route path="settings" element={<UserForm />} />
              <Route path="member" element={<MembershipDetailsForm />} />
              <Route path="plan-member" element={<PaidMembers />} />
              <Route path="free-member" element={<FreeMember />} />
              <Route path="today-joined-members" element={<TodayJoinedMembers />} />
              <Route path="members-by-date" element={<MemeberByDate />} />
              <Route path="add-member" element={<AddMember />} />
              <Route path="edit-member/:id" element={<EditMember />} />
              <Route path="all-payouts" element={<AllPayouts />} />
            </Routes>
            </AdminProtectedRoute>
                }
              />
            </Routes>
          </main>
          {/* <Footer /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
