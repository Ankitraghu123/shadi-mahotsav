// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './utils/config'; // Import the function

function PrivateRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/" />;
}

export default PrivateRoute;
