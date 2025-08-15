import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("demo");
  const [password, setPassword] = useState("password");
  const [verify, setVerify] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== verify) {
      alert("Passwords do not match.");
      return;
    }
    dispatch(login({ username }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <input value={verify} onChange={(e) => setVerify(e.target.value)} placeholder="Verify Password" type="password" />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </form>
  );
}

export default SignUp;
