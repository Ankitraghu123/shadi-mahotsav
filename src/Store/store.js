import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/User/UserSlice'
import AdminReducer from '../Features/Admin/AdminSlice';

export const store = configureStore({
  reducer: {
   User :UserReducer,
   Admin:AdminReducer
  }
});
    