import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../lib/api';

const initialState = {
  list: [],
  status: 'idle',
};

export const fetchAssignments = createAsyncThunk('assignments/fetchAssignments', async () => {
  const response = await api.get('/api/assignments');
  return response.data;
});
export const createAssignment = createAsyncThunk('assignments/createAssignment', async (data: any) => {
  const response = await api.post('/api/assignments', data);
  return response.data;
});
const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {}, // <- required by RTK
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssignments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchAssignments.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default assignmentsSlice.reducer;