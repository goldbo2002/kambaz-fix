import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAssignments, createAssignment } from "../redux/assignmentsSlice";
import { RootState, useAppDispatch } from "../redux/store";

export default function Assignments() {
  const dispatch = useAppDispatch();
  type Assignment = { _id: string; title: string };

const list = useSelector((state: RootState) => state.assignments.list) as Assignment[];

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  return (
    <div>
      <h3>Assignments</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => { dispatch(createAssignment({ title })); setTitle(""); }}>Add</button>
      <ul>{list.map(a => <li key={a._id}>{a.title}</li>)}</ul>
    </div>
  );
}
