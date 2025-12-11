import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Protected route with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}