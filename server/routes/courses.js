import express from "express";
import Course from "../models/Course.js";
const router = express.Router();

let cache = [];

router.get("/", (req, res) => res.json(cache));

router.post("/", (req, res) => {
  const newCourse = { _id: Date.now().toString(), title: req.body.title };
  cache.push(newCourse);
  res.status(201).json(newCourse);
});

export default router;
