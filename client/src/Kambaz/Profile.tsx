import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  if (!user) return <p>You must be logged in.</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username || "N/A"}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
