import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
}, { timestamps: true });

const Course = mongoose.model("Course", CourseSchema);
export default Course;
