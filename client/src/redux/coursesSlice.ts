import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../lib/api";

export const fetchCourses = createAsyncThunk("courses/fetchAll", async () => {
  const res = await api.get("/courses");
  return res.data;
});
export const createCourse = createAsyncThunk("courses/create", async (data: any) => {
  const res = await api.post("/courses", data);
  return res.data;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: { list: [] as any[], status: "idle" },
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default coursesSlice.reducer;
