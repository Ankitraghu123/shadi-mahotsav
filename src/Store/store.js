import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Features/User/UserSlice'
import AdminReducer from '../Features/Admin/AdminSlice';
import FranchiseReducer from '../Features/Franchise/FranchiseSlice';
import LeadReducer from '../Features/Lead/LeadSlice';
import CouponReducer from '../Features/Coupon/CouponSlice';

export const store = configureStore({
  reducer: {
   User :UserReducer,
   Admin:AdminReducer,
   Franchise:FranchiseReducer,
   Lead:LeadReducer,
   Coupon:CouponReducer 
  }
});
    