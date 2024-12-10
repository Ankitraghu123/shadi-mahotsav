import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CouponService from "./CouponService";

export const addCoupon = createAsyncThunk('coupon/add',async(data,thunkApi)=>{
    try{
        return await CouponService.AddCoupon(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


export const deleteCoupon = createAsyncThunk('coupon/delete',async(id,thunkApi)=>{
    try{
        return await CouponService.DeleteCoupon(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allCoupons = createAsyncThunk('coupon/all',async(thunkApi)=>{
    try{
        return await CouponService.GetAllCoupons()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allotCoupons = createAsyncThunk('coupon/allot-coupons',async(data,thunkApi)=>{
    try{
        return await CouponService.AllotCoupons(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

const initialState = {
    coupon:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')


export const CouponSlice = createSlice({
    name:"coupon",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addCoupon.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addCoupon.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.coupon = action.payload
        })
        .addCase(addCoupon.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.coupon = null
        })

        .addCase(deleteCoupon.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(deleteCoupon.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.deletedCoupon = action.payload
        })
        .addCase(deleteCoupon.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.deletedCoupon = null
        })

        .addCase(allCoupons.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allCoupons.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allCoupons = action.payload
        })
        .addCase(allCoupons.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allCoupons = null
        })

        .addCase(allotCoupons.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allotCoupons.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allotedCoupons = action.payload
        })
        .addCase(allotCoupons.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allotedCoupons = null
        })
       
    }
})


export default CouponSlice.reducer