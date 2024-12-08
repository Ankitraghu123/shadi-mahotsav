import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if franchiseData exists in localStorage
  const franchiseData = JSON.parse(localStorage.getItem("franchiseData"));

  if (!franchiseData) {
    // Redirect to the login page if no franchiseData is found
    return <Navigate to="/login-franchise" />;
  }

  // Render the children (protected components) if logged in
  return children;
};

export default ProtectedRoute;
