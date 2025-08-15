import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../lib/api";

export const fetchAssignments = createAsyncThunk("assignments/fetchAll", async () => {
  const res = await api.get("/assignments");
  return res.data;
});
export const createAssignment = createAsyncThunk("assignments/create", async (data: any) => {
  const res = await api.post("/assignments", data);
  return res.data;
});

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: { list: [] as any[], status: "idle" },
  extraReducers: builder => {
    builder
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createAssignment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default assignmentsSlice.reducer;
