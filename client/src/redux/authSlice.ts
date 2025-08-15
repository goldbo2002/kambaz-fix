import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../lib/api";

export const signup = createAsyncThunk("auth/signup", async (data: any) => {
  const res = await api.post("/users/signup", data);
  return res.data.user;
});

export const verifySession = createAsyncThunk("auth/verifySession", async () => {
  const res = await api.get("/users/me");
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null as any, status: "idle" },
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(verifySession.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
