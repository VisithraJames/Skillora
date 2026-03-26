import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Student Pages
import Signup from "./pages/student/Signup";
import Login from "./pages/student/Login";
import Dashboard from "./pages/student/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Signup />} />

        {/* Student Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;