import React from "react";
import { useState } from "react";

// User data
type User = {
  username: string;
  password: string;
  role?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
};

// Simulated user DB 
const demoUsers: User[] = [
  { username: "alice", password: "123", role: "admin", email: "alice@example.com", firstName: "Alice", lastName: "Liddell" },
  { username: "bob", password: "password", role: "student", email: "bob@example.com", firstName: "Bob", lastName: "Builder" },
];


export default function Lab6() {
  // Auth state
  const [users, setUsers] = useState<User[]>(demoUsers);
  const [loggedIn, setLoggedIn] = useState<User | null>(null);
  const [view, setView] = useState<"signin" | "signup" | "profile">("signin");

 
  const [form, setForm] = useState<User>({ username: "", password: "" });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSignin = () => {
    const user = users.find(
      u => u.username === form.username && u.password === form.password
    );
    if (user) {
      setLoggedIn(user);
      setView("profile");
    } else {
      alert("Invalid credentials.");
    }
  };



  const handleSignup = () => {
    if (users.some(u => u.username === form.username)) {
      alert("Username already exists.");
      return;
    }
    const newUser = { ...form };
    setUsers([...users, newUser]);
    setLoggedIn(newUser);
    setView("profile");
  };

  // Update profile logic
  const handleUpdate = () => {
    setUsers(users.map(u =>
      u.username === loggedIn?.username ? { ...loggedIn, ...form } : u
    ));
    setLoggedIn({ ...loggedIn, ...form } as User);
    alert("Profile updated!");
  };

  // Logout 
  const handleLogout = () => {
    setLoggedIn(null);
    setForm({ username: "", password: "" });
    setView("signin");
  };

  // UI 
  function SigninForm() {
    return (
      <div style={{ marginTop: 16 }}>
        <h2>Sign in</h2>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <button onClick={handleSignin}>Sign in</button>
        <button onClick={() => setView("signup")} style={{ marginLeft: 8 }}>
          Sign up
        </button>
      </div>
    );
  }

  // UI 
  function SignupForm() {
    return (
      <div style={{ marginTop: 16 }}>
        <h2>Sign up</h2>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <button onClick={handleSignup}>Sign up</button>
        <button onClick={() => setView("signin")} style={{ marginLeft: 8 }}>
          Back to sign in
        </button>
      </div>
    );
  }

  // UI 
  function ProfileForm() {
    return (
      <div style={{ marginTop: 16 }}>
        <h2>Profile</h2>
        <input
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          style={{ marginBottom: 8 }}
        /><br />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleLogout} style={{ marginLeft: 8 }}>
          Logout
        </button>
      </div>
    );
  }

  // set
  React.useEffect(() => {
    if (view === "profile" && loggedIn) {
      setForm(loggedIn);
    } else if (view === "signin" || view === "signup") {
      setForm({ username: "", password: "" });
    }
  }, [view, loggedIn]);

  return (
    <div id="wd-lab6" style={{ padding: 24 }}>
      <h1>Lab 6: Users Auth (local state version)</h1>
      {view === "signin" && <SigninForm />}
      {view === "signup" && <SignupForm />}
      {view === "profile" && loggedIn && <ProfileForm />}
    </div>
  );
}