import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Kambaz/Dashboard.jsx";
import Courses from "./Kambaz/Courses.jsx";
import Assignments from "./Kambaz/Assignments.jsx";
import Labs from "./Kambaz/Labs.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/labs/*" element={<Labs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
  );
}
