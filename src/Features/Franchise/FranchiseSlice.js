import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FranchiseService from "./FranchiseService";

export const registerFranchise = createAsyncThunk('franchise/register',async(data,thunkApi)=>{
    try{
        return await FranchiseService.Register(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const loginFranchise = createAsyncThunk('franchise/login',async(data,thunkApi)=>{
    try{
        return await FranchiseService.Login(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getCurrentFranchise = createAsyncThunk('franchise/currentFranchise',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getCurrentFranchise(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getSingleFranchise = createAsyncThunk('franchise/single-Franchise',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getCurrentFranchise(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editFranchise = createAsyncThunk('franchise/edit-franchise',async(data,thunkApi)=>{
    try{
        return await FranchiseService.editFranchise(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editProfilePicture = createAsyncThunk('franchise/edit-profile-picture',async(data,thunkApi)=>{
    try{
        return await FranchiseService.editProfilePicture(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const deleteProfilePicture = createAsyncThunk('franchise/delete-profile-picture',async(id,thunkApi)=>{
    try{
        return await FranchiseService.deleteProfilePicture(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const createKyc = createAsyncThunk('franchise/create-kyc',async(data,thunkApi)=>{
    try{
        // console.log(data)
        return await FranchiseService.createKyc(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getRefFranchise = createAsyncThunk('franchise/get-ref-franchise',async(id,thunkApi)=>{
    try{
        // console.log(data)
        return await FranchiseService.getRefFranchise(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getAllFranchise = createAsyncThunk('franchise/get-all-franchise',async(thunkApi)=>{
    try{
        // console.log(data)
        return await FranchiseService.getAllFranchise()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const addMember = createAsyncThunk('user/add-member',async(data,thunkApi)=>{
    try{
        return await FranchiseService.AddMember(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const requestPayout = createAsyncThunk('franchise/request-payout',async(data,thunkApi)=>{
    try{
        return await FranchiseService.requestPayout(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getPayOutByFranchise = createAsyncThunk('franchise/payout-by-franchise',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getPayOutByFranchise(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const generateRegisterLink = createAsyncThunk('franchise/generate-register-link',async(data,thunkApi)=>{
    try{
        return await FranchiseService.generateRegisterLink(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getDirectMembers = createAsyncThunk('franchise/get-direct-members',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getDirectMembers(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getCouponMembers = createAsyncThunk('franchise/get-coupon-members',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getCouponMembers(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const approveKYC = createAsyncThunk('franchise/approve-kyc',async(id,thunkApi)=>{
    try{
        return await FranchiseService.approveKYC(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const approveAadharCard = createAsyncThunk('franchise/approve-aadharcard',async(id,thunkApi)=>{
    try{
        return await FranchiseService.approveAadharCard(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const approvePanCard = createAsyncThunk('franchise/approve-pancard',async(id,thunkApi)=>{
    try{
        return await FranchiseService.approvePanCard(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const rejectKYC = createAsyncThunk('franchise/reject-kyc',async(data,thunkApi)=>{
    try{
        return await FranchiseService.rejectKYC(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const rejectAadharCard = createAsyncThunk('franchise/reject-aadharcard',async(data,thunkApi)=>{
    try{
        return await FranchiseService.rejectAadharCard(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const rejectPanCard = createAsyncThunk('franchise/reject-pancard',async(data,thunkApi)=>{
    try{
        return await FranchiseService.rejectPanCard(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allPayouts = createAsyncThunk('franchise/all-payouts',async(thunkApi)=>{
    try{
        return await FranchiseService.allPayouts()
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const updatePayoutStatus = createAsyncThunk('franchise/update-payout',async(data,thunkApi)=>{
    try{
        return await FranchiseService.updatePayoutStatus(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getFranchiseTeam = createAsyncThunk('franchise/get-franchise-team',async(code,thunkApi)=>{
    try{
        return await FranchiseService.getFranchiseTeam(code)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getUplineTree = createAsyncThunk('franchise/get-upline-tree',async(id,thunkApi)=>{
    try{
        return await FranchiseService.getUplineTree(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getReportByDate = createAsyncThunk('franchise/get-report-by-date',async(date,thunkApi)=>{
    try{
        return await FranchiseService.getReportByDate(date)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const addMemberToCoupon = createAsyncThunk('franchise/add-member-to-coupon',async(data,thunkApi)=>{
    try{
        return await FranchiseService.addMemberToCoupon(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

const initialState = {
    franchise:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')

export const FranchiseSlice = createSlice({
    name:"franchise",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(registerFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.franchise = action.payload
        })
        .addCase(registerFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.franchise = null
        })

        .addCase(loginFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(loginFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.franchise = action.payload
        })
        .addCase(loginFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.franchise = null
        })

        .addCase(getCurrentFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getCurrentFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.currentFranchise = action.payload
        })
        .addCase(getCurrentFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.currentFranchise = null
        })

        .addCase(editFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(editFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.editedFranchise = action.payload
        })
        .addCase(editFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.editedFranchise = null
        })

        .addCase(editProfilePicture.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(editProfilePicture.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.editedProfilePicture = action.payload
        })
        .addCase(editProfilePicture.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.editedProfilePicture = null
        })

        .addCase(deleteProfilePicture.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(deleteProfilePicture.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.deletedProfilePicture = action.payload
        })
        .addCase(deleteProfilePicture.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.deletedProfilePicture = null
        })

        .addCase(createKyc.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(createKyc.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.kycCreated = action.payload
        })
        .addCase(createKyc.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.kycCreated = null
        })

        .addCase(getRefFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getRefFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.refferedFranchise = action.payload
        })
        .addCase(getRefFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.refferedFranchise = null
        })

        .addCase(getAllFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.getAllFranchises = action.payload
        })
        .addCase(getAllFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.getAllFranchises = null
        })

        .addCase(getSingleFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getSingleFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.franchiseDetail = action.payload
        })
        .addCase(getSingleFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.franchiseDetail = null
        })

        .addCase(addMember.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addMember.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.memeberAdded = action.payload
        })
        .addCase(addMember.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.memeberAdded = null
        })

        .addCase(requestPayout.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(requestPayout.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.payoutRequested = action.payload
        })
        .addCase(requestPayout.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.payoutRequested = null
        })

        .addCase(getPayOutByFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getPayOutByFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.paoutsByFranchise = action.payload
        })
        .addCase(getPayOutByFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.paoutsByFranchise = null
        })

        .addCase(generateRegisterLink.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(generateRegisterLink.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.registerLink = action.payload
        })
        .addCase(generateRegisterLink.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.registerLink = null
        })

        .addCase(getDirectMembers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getDirectMembers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.directMembers = action.payload
        })
        .addCase(getDirectMembers.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.directMembers = null
        })

        .addCase(getCouponMembers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getCouponMembers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.couponMembers = action.payload
        })
        .addCase(getCouponMembers.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.couponMembers = null
        })

        .addCase(approveKYC.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(approveKYC.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.kycApproved = action.payload
        })
        .addCase(approveKYC.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.kycApproved = null
        })

        .addCase(rejectKYC.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(rejectKYC.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.kycRejected = action.payload
        })
        .addCase(rejectKYC.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.kycRejected = null
        })

        .addCase(approveAadharCard.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(approveAadharCard.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.aadharCardApproved = action.payload
        })
        .addCase(approveAadharCard.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.aadharCardApproved = null
        })

        .addCase(rejectAadharCard.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(rejectAadharCard.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.aadharCardRejected = action.payload
        })
        .addCase(rejectAadharCard.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.aadharCardRejected = null
        })


        .addCase(approvePanCard.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(approvePanCard.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.pancardApproved = action.payload
        })
        .addCase(approvePanCard.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.pancardApproved = null
        })

        .addCase(rejectPanCard.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(rejectPanCard.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.pancardRejected = action.payload
        })
        .addCase(rejectPanCard.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.pancardRejected = null
        })

        .addCase(allPayouts.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allPayouts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allPayouts = action.payload
        })
        .addCase(allPayouts.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allPayouts = null
        })

        .addCase(updatePayoutStatus.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(updatePayoutStatus.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.updatedPayoutStatus = action.payload
        })
        .addCase(updatePayoutStatus.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.updatedPayoutStatus = null
        })

        .addCase(getFranchiseTeam.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getFranchiseTeam.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.franchiseTeam = action.payload
        })
        .addCase(getFranchiseTeam.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.franchiseTeam = null
        })

        .addCase(getUplineTree.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getUplineTree.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.uplineTree = action.payload
        })
        .addCase(getUplineTree.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.uplineTree = null
        })

        .addCase(getReportByDate.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getReportByDate.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.report = action.payload
        })
        .addCase(getReportByDate.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.report = null
        })

        .addCase(addMemberToCoupon.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addMemberToCoupon.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.addedCouponToMember = action.payload
        })
        .addCase(addMemberToCoupon.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.addedCouponToMember = null
        })
    }
})


export default FranchiseSlice.reducer