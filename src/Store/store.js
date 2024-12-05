import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/User/UserSlice'
import AdminReducer from '../Features/Admin/AdminSlice';
import FranchiseReducer from '../Features/Franchise/FranchiseSlice';

export const store = configureStore({
  reducer: {
   User :UserReducer,
   Admin:AdminReducer,
   Franchise:FranchiseReducer
  }
});
    