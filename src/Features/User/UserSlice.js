import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "./UserService";

export const registerUser = createAsyncThunk('user/register',async(data,thunkApi)=>{
    try{
        return await UserService.Register(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const loginUser = createAsyncThunk('user/login',async(data,thunkApi)=>{
    try{
        return await UserService.Login(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getProfile = createAsyncThunk('user/get-user',async(id,thunkApi)=>{
    try{
        return await UserService.GetProfile(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editProfile = createAsyncThunk('user/edit-profile',async(data,thunkApi)=>{
    try{
        return await UserService.EditProfile(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


const initialState = {
    user:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')


export const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.user = null
        })

        .addCase(loginUser.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.user = null
        })
        .addCase(getProfile.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getProfile.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.userProfile = action.payload
        })
        .addCase(getProfile.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.userProfile = null
        })
        .addCase(editProfile.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(editProfile.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.editedProfile = action.payload
        })
        .addCase(editProfile.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.editedProfile = null
        })
    }
})


export default UserSlice.reducer