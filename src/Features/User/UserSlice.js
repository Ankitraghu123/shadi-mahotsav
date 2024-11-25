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

export const getCurrentUser = createAsyncThunk('user/get-currentUser',async(id,thunkApi)=>{
    try{
        return await UserService.GetProfile(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getAllProfiles = createAsyncThunk('user/get-all-users',async(thunkApi)=>{
    try{
        return await UserService.GetAllProfiles()
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

export const getProfileCompletion = createAsyncThunk('user/profile-completion',async(id,thunkApi)=>{
    try{
        return await UserService.GetProfileCompletion(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const sendRequest = createAsyncThunk('user/send-request',async(data,thunkApi)=>{
    try{
        return await UserService.SendRequest(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const acceptRequest = createAsyncThunk('user/accept-request',async(data,thunkApi)=>{
    try{
        return await UserService.AcceptRequest(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const rejectRequest = createAsyncThunk('user/reject-request',async(data,thunkApi)=>{
    try{
        return await UserService.RejectRequest(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const editProfilePicture = createAsyncThunk('user/edit-profile-picture',async(data,thunkApi)=>{
    try{
        return await UserService.EditProfilePicture(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const deleteProfilePicture = createAsyncThunk('user/delete-profile-picture',async(id,thunkApi)=>{
    try{
        return await UserService.DeleteProfilePicture(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allReceivedRequest = createAsyncThunk('user/all-received-request',async(id,thunkApi)=>{
    try{
        return await UserService.AllReceivedRequest(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allSendedRequest = createAsyncThunk('user/all-sended-request',async(id,thunkApi)=>{
    try{
        return await UserService.AllSendedRequest(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const allConnections = createAsyncThunk('user/all-connections',async(id,thunkApi)=>{
    try{
        return await UserService.AllConnections(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const findMatchingProfiles = createAsyncThunk('user/find-matching-profiles',async(id,thunkApi)=>{
    try{
        return await UserService.FindMatchingProfiles(id)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const addImageToGallery = createAsyncThunk('user/add-image-to-gallery',async(data,thunkApi)=>{
    try{
        return await UserService.AddImageToGallery(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const EditImageInGallery = createAsyncThunk('user/edit-image-in-gallery',async(data,thunkApi)=>{
    try{
        return await UserService.EditImageInGallery(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const DeleteImageFromGallery = createAsyncThunk('user/delete-image-from-gallery',async(data,thunkApi)=>{
    try{
        return await UserService.DeleteImageFromGallery(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const GetUsersChattedWith = createAsyncThunk('user/get-user-chatted-with',async(userId,thunkApi)=>{
    try{
            return await UserService.GetUsersChattedWith(userId)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const sendEnquiry = createAsyncThunk('user/send',async(data,thunkApi)=>{
    try{
            return await UserService.sendEnquiry(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

export const getAllPlans = createAsyncThunk('user/all-plans',async(thunkApi)=>{
    try{
            return await UserService.getAllPlans()
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

        .addCase(getCurrentUser.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getCurrentUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.currentUser = action.payload
        })
        .addCase(getCurrentUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.currentUser = null
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

        .addCase(getProfileCompletion.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getProfileCompletion.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.profileCompletion = action.payload
        })
        .addCase(getProfileCompletion.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.profileCompletion = null
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


        .addCase(sendRequest.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(sendRequest.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.requestSended = action.payload
        })
        .addCase(sendRequest.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.requestSended = null
        })

        .addCase(acceptRequest.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(acceptRequest.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.requestAccepted = action.payload
        })
        .addCase(acceptRequest.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.requestAccepted = null
        })

        .addCase(rejectRequest.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(rejectRequest.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.requestRejected = action.payload
        })
        .addCase(rejectRequest.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.requestRejected = null
        })

        .addCase(getAllProfiles.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllProfiles.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allProfiles = action.payload
        })
        .addCase(getAllProfiles.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allProfiles = null
        })

        .addCase(allReceivedRequest.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allReceivedRequest.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.receivedRequests = action.payload
        })
        .addCase(allReceivedRequest.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.receivedRequests = null
        })

        .addCase(allSendedRequest.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allSendedRequest.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.sendedRequests = action.payload
        })
        .addCase(allSendedRequest.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.sendedRequests = null
        })

        .addCase(allConnections.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(allConnections.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allConnections = action.payload
        })
        .addCase(allConnections.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allConnections = null
        })

        .addCase(findMatchingProfiles.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(findMatchingProfiles.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allMatchingProfiles = action.payload
        })
        .addCase(findMatchingProfiles.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allMatchingProfiles = null
        })

        .addCase(addImageToGallery.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(addImageToGallery.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.imageAddedToGallery = action.payload
        })
        .addCase(addImageToGallery.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.imageAddedToGallery = null
        })

        .addCase(EditImageInGallery.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(EditImageInGallery.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.imageEditedInGallery = action.payload
        })
        .addCase(EditImageInGallery.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.imageEditedInGallery = null
        })

        .addCase(DeleteImageFromGallery.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(DeleteImageFromGallery.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.imageDeletedFromGallery = action.payload
        })
        .addCase(DeleteImageFromGallery.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.imageDeletedFromGallery = null
        })

        .addCase(GetUsersChattedWith.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(GetUsersChattedWith.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.chatLists = action.payload
        })
        .addCase(GetUsersChattedWith.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.chatLists = null
        })

        .addCase(sendEnquiry.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(sendEnquiry.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.enquiry = action.payload
        })
        .addCase(sendEnquiry.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.enquiry = null
        })

        .addCase(getAllPlans.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getAllPlans.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.allPlans = action.payload
        })
        .addCase(getAllPlans.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allPlans = null
        })

    }
})


export default UserSlice.reducer