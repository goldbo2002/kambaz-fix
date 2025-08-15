import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, createCourse } from "../redux/coursesSlice";
import { RootState } from "../../client/src/store";

export default function Courses() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.courses);
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
