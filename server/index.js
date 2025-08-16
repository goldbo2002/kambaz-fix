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

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error", err));

app.set("trust proxy", 1);

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://kambaznew.netlify.app"
  ],
  credentials: true,
}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "keyboard cat",
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: "sessions",
    stringify: false,
    autoRemove: 'interval',
    autoRemoveInterval: 10
  }),
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
}));


app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/assignments", assignmentsRouter);

app.get("/", (req, res) => res.sendStatus(200));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
