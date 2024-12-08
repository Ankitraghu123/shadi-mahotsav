import axios from 'axios'
import { base_url } from '../../utils/base_url'

const Register = async (data) => {
    const response = await axios.post(`${base_url}user/register`,data)
    localStorage.setItem('userToken',response.data.token)
    localStorage.setItem('userData', JSON.stringify(response.data.user));
    return response.data
}

const Login = async (data) => {
    const response = await axios.post(`${base_url}user/login`,data)
    localStorage.setItem('userToken',response.data.token)
    localStorage.setItem('userData', JSON.stringify(response.data.user));
    return response.data
}

const GetProfile = async(id) => {
    const response = await axios.get(`${base_url}user/get-user/${id}`)
    return response.data
}

const GetAllProfiles = async() => {
    const response = await axios.get(`${base_url}user/get-all`)
    return response.data
}

const EditProfile = async(data) => {
    const response = await axios.put(`${base_url}user/edit-profile/${data.id}`,data)
    return response.data
}

const GetProfileCompletion = async(id) => {
    const response = await axios.get(`${base_url}user/profile-completion/${id}`)
    return response.data
}

const EditProfilePicture = async(data) => {
    // console.log(data)
    const formData = new FormData();
    formData.append('userId', data.userId);   // Ensure userId is part of the form data
    formData.append('newImage', data.newImage);
    const response = await axios.put(`${base_url}user/edit-profile-picture`,formData)
    return response.data
}

const DeleteProfilePicture = async(id) => {
 
    const response = await axios.delete(`${base_url}user/delete-profile-picture/${id}`)
    return response.data
}

const SendRequest = async(data) => {
    const response = await axios.post(`${base_url}user/send-request`,data)
    return response.data
}

const AcceptRequest = async(data) => {
    const response = await axios.post(`${base_url}user/accept-request`,data)
    return response.data
}

const RejectRequest = async(data) => {
    const response = await axios.post(`${base_url}user/reject-request`,data)
    return response.data
}

const AllReceivedRequest = async(id) => {
    const response = await axios.get(`${base_url}user/all-received-request/${id}`)
    return response.data
}

const AllSendedRequest = async(id) => {
    const response = await axios.get(`${base_url}user/all-sended-request/${id}`)
    return response.data
}

const AllConnections = async(id) => {
    const response = await axios.get(`${base_url}user/all-connections/${id}`)
    return response.data
}

const FindMatchingProfiles = async(id) => {
    const response = await axios.get(`${base_url}user/find-matching-profiles/${id}`)
    return response.data
}

const AddImageToGallery = async(data) => {
    const response = await axios.post(`${base_url}user/add-image`,data)
    return response.data
}

const EditImageInGallery = async(data) => {
    const response = await axios.put(`${base_url}user/edit-image`,data)
    return response.data
}

const DeleteImageFromGallery = async(data) => {
    const response = await axios.post(`${base_url}user/delete-image`,data)
    return response.data
}

const GetUsersChattedWith = async(userId) => {
    const response = await axios.get(`${base_url}user/chatted-with/${userId}`)
    return response.data
}

const sendEnquiry = async(data) => {
    const response = await axios.post(`${base_url}enquiry/send`,data)
    return response.data
}

const getAllPlans = async() => {
    const response = await axios.get(`${base_url}plan/get-all`)
    return response.data
}

const UserService = {Register,Login,GetProfile,EditProfile,GetProfileCompletion,EditProfilePicture,SendRequest,AcceptRequest,RejectRequest,GetAllProfiles,AllReceivedRequest,AllSendedRequest,AllConnections,DeleteProfilePicture,FindMatchingProfiles,AddImageToGallery,EditImageInGallery,DeleteImageFromGallery,GetUsersChattedWith,sendEnquiry,getAllPlans}

export default UserService