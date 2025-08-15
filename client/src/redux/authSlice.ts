//login, logout, sessioon state. uses RTK
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../lib/api';

interface User {
  username: string;
  [key: string]: any;
}

interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AuthState = {
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
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.status = 'succeeded';
    },
    logout(state) {
      state.user = null;
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(verifySession.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifySession.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(verifySession.rejected, (state) => {
        state.status = 'idle';
        state.user = null;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
