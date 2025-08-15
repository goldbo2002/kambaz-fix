import "dotenv/config";
import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import usersRouter from "./routes/users.js";
import coursesRouter from "./routes/courses.js";
import assignmentsRouter from "./routes/assignments.js";

const app = express();
app.set("trust proxy", 1);

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || "keyboard cat",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: "sessions",
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
}));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error", err));

app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/assignments", assignmentsRouter);

app.get("/api/users/me", (req, res) => {
  console.log("SESSION CHECK:", req.session);
  if (!req.session.user) {
    return res.status(404).json({ message: "No user session" });
  }
  res.json(req.session.user);
});

app.get("/", (req, res) => res.sendStatus(200));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
