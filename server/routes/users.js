import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: "Email in use" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hash });

  req.session.user = { _id: user._id, email: user.email, username: user.username };
  console.log("✅ Session created:", req.session.user);

  res.status(201).json({ message: "Signed up", user: req.session.user });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  req.session.user = { _id: user._id, email: user.email, username: user.username };
  console.log("✅ Session created:", req.session.user);

  res.json({ message: "Signed in", user: req.session.user });
});

router.post("/signout", (req, res) => {
  req.session.destroy(err => {
    res.clearCookie("connect.sid");
    res.json({ message: "Signed out" });
  });
});
router.get("/ping", (req, res) => {
  console.log("👋 /ping route hit");
  res.send("pong");
});

router.get("/me", (req, res) => {
  console.log("🔎 Session:", req.session);
  if (!req.session || !req.session.user) {
    return res.status(401).send("Unauthorized");
  }
  res.json(req.session.user);
});



export default router;
