import express from "express";
import Assignment from "../models/Assignment.js";
const router = express.Router();

let cache = [];

router.get("/", (req, res) => res.json(cache));

router.post("/", (req, res) => {
  const newAssign = { _id: Date.now().toString(), title: req.body.title };
  cache.push(newAssign);
  res.status(201).json(newAssign);
});

export default router;
