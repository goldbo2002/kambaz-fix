import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("demo");
  const [password, setPassword] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Sign In</button>
      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
    </form>
  );
}

export default SignIn;
