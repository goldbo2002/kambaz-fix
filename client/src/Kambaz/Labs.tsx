import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Lab1 from "../Labs/Lab1";
import Lab2 from "../Labs/Lab2";
import Lab3 from "../Labs/Lab3";
import Lab4 from "../Labs/Lab4";
import Lab5 from "../Labs/Lab5";
import Lab6 from "../Labs/Lab6";

export default function Labs() {
  return (
    <div>
      <h2>Labs</h2>
      <nav>
        <Link to="Lab1">Lab 1</Link>{" "}
        <Link to="Lab2">Lab 2</Link>{" "}
        <Link to="Lab3">Lab 3</Link>{" "}
        <Link to="Lab4">Lab 4</Link>{" "}
        <Link to="Lab5">Lab 5</Link>{" "}
        <Link to="Lab6">Lab 6</Link>
      </nav>
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
        <Route path="Lab5" element={<Lab5 />} />
        <Route path="Lab6" element={<Lab6 />} />
      </Routes>
    </div>
  );
}
