import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../lib/api';

const initialState = {
  user: null,
  status: 'idle',
};

export const verifySession = createAsyncThunk('auth/verifySession', async () => {
  const response = await api.get('/api/users/me');
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, // <- required by RTK
  extraReducers: (builder) => {
    builder
      .addCase(verifySession.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifySession.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(verifySession.rejected, (state) => {
        state.status = 'failed';
        state.user = null;
      });
  },
});

export default authSlice.reducer;