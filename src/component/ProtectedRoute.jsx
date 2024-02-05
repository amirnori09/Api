import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/" /> : element; // Redirect to the main page if the user is authenticated
};

export default ProtectedRoute;
