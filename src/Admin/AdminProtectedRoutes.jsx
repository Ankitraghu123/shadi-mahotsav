import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  // Check if admin token/data exists in localStorage
  const adminData = JSON.parse(localStorage.getItem("adminData"));


  if (!adminData) {
    // Redirect to the admin login page if no admin data is found
    return <Navigate to="/admin-dashboard/login" />;
  }

  // Render the children (admin dashboard components) if logged in
  return children;
};

export default AdminProtectedRoute;
