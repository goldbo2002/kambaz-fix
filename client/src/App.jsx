import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Kambaz/Dashboard.tsx";
import Courses from "./Kambaz/Courses.tsx";
import Assignments from "./Kambaz/Assignments.tsx";
import Labs from "./Kambaz/Labs.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
          <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/labs/*" element={<Labs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;

