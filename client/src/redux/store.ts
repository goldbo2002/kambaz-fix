import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import assignmentsReducer from './assignmentsSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    assignments: assignmentsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { useDispatch } from 'react-redux';
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
