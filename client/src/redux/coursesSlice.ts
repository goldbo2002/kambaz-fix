import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../lib/api';

const initialState = {
  list: [],
  status: 'idle',
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await api.get('/api/courses');
  return response.data;
});

export const createCourse = createAsyncThunk('courses/createCourse', async (data: any) => {
  const response = await api.post('/api/courses', data);
  return response.data;
});
const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}, // Required for RTK typing
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default coursesSlice.reducer;
