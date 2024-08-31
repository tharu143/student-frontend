import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import StudentProfile from "./components/StudentProfile"; // Correct import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentProfile" element={<StudentProfile />} /> {/* Correct path */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;