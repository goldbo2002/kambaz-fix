import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Kambaz/Dashboard";
import Courses from "./Kambaz/Courses";
import Assignments from "./Kambaz/Assignments";
import Labs from "./Kambaz/Labs";
import SignIn from "./Kambaz/SignIn";
import SignUp from "./Kambaz/SignUp";
import Profile from "./Kambaz/Profile";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={user ? <Profile /> : <Navigate to="/signin" />} />
      <Route path="/labs/*" element={user ? <Labs /> : <Navigate to="/signin" />} />
      <Route path="/courses" element={user ? <Courses /> : <Navigate to="/signin" />} />
      <Route path="/assignments" element={user ? <Assignments /> : <Navigate to="/signin" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
