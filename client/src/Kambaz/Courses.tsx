import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCourses, createCourse } from "../redux/coursesSlice";
import { RootState, useAppDispatch } from "../redux/store";

export default function Courses() {
  const dispatch = useAppDispatch();
 type Course = { _id: string; title: string };

const list = useSelector((state: RootState) => state.courses.list) as Course[];

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h3>Courses</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => { dispatch(createCourse({ title })); setTitle(""); }}>Add</button>
      <ul>{list.map(c => <li key={c._id}>{c.title}</li>)}</ul>
    </div>
  );
}
