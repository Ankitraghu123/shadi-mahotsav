import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LeadService from "./LeadService";

export const addLead = createAsyncThunk('lead/add',async(data,thunkApi)=>{
    try{
        return await LeadService.AddLead(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editLead = createAsyncThunk('lead/edit',async(data,thunkApi)=>{
    try{
        return await LeadService.EditLead(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const deleteLead = createAsyncThunk('lead/delete',async(id,thunkApi)=>{
    try{
        return await LeadService.DeleteLead(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allLeads = createAsyncThunk('lead/all',async(thunkApi)=>{
    try{
        return await LeadService.AllLeads()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allLeadsByFranchise = createAsyncThunk('lead/all/franchise',async(id,thunkApi)=>{
    try{
        return await LeadService.AllLeadsByFranchise(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

const initialState = {
    lead:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')


export const LeadSlice = createSlice({
    name:"lead",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addLead.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addLead.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.lead = action.payload
        })
        .addCase(addLead.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.lead = null
        })

        .addCase(editLead.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(editLead.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.editedLead = action.payload
        })
        .addCase(editLead.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.editedLead = null
        })

        .addCase(deleteLead.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(deleteLead.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.deletedLead = action.payload
        })
        .addCase(deleteLead.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.deletedLead = null
        })

        .addCase(allLeads.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allLeads.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allLeads = action.payload
        })
        .addCase(allLeads.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allLeads = null
        })

        .addCase(allLeadsByFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allLeadsByFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allFranchiseLeads = action.payload
        })
        .addCase(allLeadsByFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allFranchiseLeads = null
        })

       
    }
})


export default LeadSlice.reducer