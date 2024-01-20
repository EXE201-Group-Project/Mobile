import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';
import placeSlice from './slice/placeSlice';

export const store = configureStore({
  reducer: {
    user: authSlice, //slice nay co ten la user trong ung dung
    users: userSlice,
    place: placeSlice
  }
});
