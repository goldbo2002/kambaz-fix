import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifySession } from "../redux/authSlice";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifySession());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/Labs/Lab1">Lab1</Link> •
        <Link to="/Labs/Lab2">Lab2</Link> •
        <Link to="/Labs/Lab3">Lab3</Link> •
        <Link to="/Labs/Lab4">Lab4</Link> •
        <Link to="/Courses">Courses</Link> •
        <Link to="/Assignments">Assignments</Link>
      </nav>
    </div>
  );
}
