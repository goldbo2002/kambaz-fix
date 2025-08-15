//just my dashboard...

import React, { useEffect } from "react";
import { useAppDispatch } from '../redux/store';
import { verifySession } from "../redux/authSlice";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useAppDispatch();
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
        <Link to="/Labs/Lab5">Lab5</Link> •
        <Link to="/Labs/Lab6">Lab6</Link> •
        <Link to="/Courses">Courses</Link> •
        <Link to="/Assignments">Assignments</Link>
        <Link to="/Labs/Lab1">Back to Lab 1</Link>

<div>
  
  <a href="https://github.com/goldbo2002/kambaz-fix.git" target="_blank" rel="noopener noreferrer">
  View GitHub Repo
</a>

  <Link to="/profile">Go to Profile</Link>
</div>

      </nav>
    </div>
  );
}
