import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import UserPost from "./components/UserPost.jsx";
import Login from "./components/Login.jsx";

// ✅ Simple authentication simulation
const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    cb();
  },
  logout(cb) {
    this.isAuthenticated = false;
    cb();
  },
};

// ✅ ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/post/:postId" element={<UserPost />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}