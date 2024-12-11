import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminService from "./AdminService";

export const loginAdmin = createAsyncThunk('admin/login',async(data,thunkApi)=>{
    try{
        return await AdminService.Login(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getAllEnquiry = createAsyncThunk('admin/all-enquiries',async(thunkApi)=>{
    try{
        return await AdminService.GetAllEnquiries()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetUsersWithActivePlans = createAsyncThunk('admin/user-with-active-plan',async(thunkApi)=>{
    try{
        return await AdminService.GetUsersWithActivePlans()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetUsersWithoutPlans = createAsyncThunk('admin/user-without-pans',async(thunkApi)=>{
    try{
        return await AdminService.GetUsersWithoutPlans()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetTodayJoinedUsers = createAsyncThunk('admin/users-joined-today',async(thunkApi)=>{
    try{
        return await AdminService.GetTodayJoinedUsers()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetUsersRegisterationByDate = createAsyncThunk('admin/users-register-by-date',async(data,thunkApi)=>{
    try{
        return await AdminService.GetUsersRegisterationByDate(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const addMember = createAsyncThunk('admin/add-member',async(data,thunkApi)=>{
    try{
        return await AdminService.AddMember(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const deleteMember = createAsyncThunk('admin/delete-member',async(id,thunkApi)=>{
    try{
        return await AdminService.DeleteMember(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const deleteEnquiry = createAsyncThunk('admin/delete-enquiry',async(id,thunkApi)=>{
    try{
        return await AdminService.DeleteEnquiry(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetCfcMembers = createAsyncThunk('admin/cfc-members',async(thunkApi)=>{
    try{
        return await AdminService.GetCfcMembers()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetCmcMembers = createAsyncThunk('admin/cmc-members',async(thunkApi)=>{
    try{
        return await AdminService.GetCmcMembers()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})




const initialState = {
    admin:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')


export const AdminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginAdmin.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(loginAdmin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload
        })
        .addCase(loginAdmin.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.admin = null
        })

        .addCase(getAllEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllEnquiry.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allEnquiries = action.payload
        })
        .addCase(getAllEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allEnquiries = null
        })

        .addCase(GetUsersWithActivePlans.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetUsersWithActivePlans.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.usersWithActivePlans = action.payload
        })
        .addCase(GetUsersWithActivePlans.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.usersWithActivePlans = null
        })

        .addCase(GetUsersWithoutPlans.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetUsersWithoutPlans.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.usersWithoutPlans = action.payload
        })
        .addCase(GetUsersWithoutPlans.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.usersWithoutPlans = null
        })

        .addCase(GetTodayJoinedUsers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetTodayJoinedUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.todayJoinedUsers = action.payload
        })
        .addCase(GetTodayJoinedUsers.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.todayJoinedUsers = null
        })

        .addCase(GetUsersRegisterationByDate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetUsersRegisterationByDate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.userRegisterationByDate = action.payload
        })
        .addCase(GetUsersRegisterationByDate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.userRegisterationByDate = null
        })

        .addCase(addMember.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addMember.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.memberDetail = action.payload
        })
        .addCase(addMember.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.memberDetail = null
        })

        .addCase(deleteMember.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(deleteMember.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.deletedMember = action.payload
        })
        .addCase(deleteMember.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.deletedMember = null
        })


        .addCase(deleteEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(deleteEnquiry.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.deletedEnquiry = action.payload
        })
        .addCase(deleteEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.deletedEnquiry = null
        })

        .addCase(GetCfcMembers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetCfcMembers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.cfcMembers = action.payload
        })
        .addCase(GetCfcMembers.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.cfcMembers = null
        })

        .addCase(GetCmcMembers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetCmcMembers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.cmcMembers = action.payload
        })
        .addCase(GetCmcMembers.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.cmcMembers = null
        })

    }
})


export default AdminSlice.reducer