import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  title: String,
}, { timestamps: true });

const Assignment = mongoose.model("Assignment", AssignmentSchema);
export default Assignment;
