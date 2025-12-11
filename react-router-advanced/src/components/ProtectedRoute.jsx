import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication
const fakeAuth = {
  isAuthenticated: true, // change to false to test redirect
};

export default function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
}