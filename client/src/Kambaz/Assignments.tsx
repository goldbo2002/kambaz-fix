import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignments, createAssignment } from "../redux/assignmentsSlice";
import { RootState } from "../../client/src/store";

export default function Assignments() {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.assignments);
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
