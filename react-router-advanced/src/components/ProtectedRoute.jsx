import React from "react";
import { Navigate } from "react-router-dom";

// ✅ useAuth hook
function useAuth() {
  // Simulate authentication
  const isAuthenticated = true; // change to false to test redirect
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}