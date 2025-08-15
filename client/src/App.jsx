import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Kambaz/Dashboard.jsx";
import Courses from "./Kambaz/Courses.jsx";
import Assignments from "./Kambaz/Assignments.jsx";
import Labs from "./Kambaz/Labs.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Route path="/" element={<Dashboard />} />
      <Route path="/labs/*" element={<Labs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
    </BrowserRouter>
  );
}

