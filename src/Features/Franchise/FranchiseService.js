import axios from 'axios'
import { base_url } from '../../utils/base_url'


const Register = async (data) => {
    const response = await axios.post(`${base_url}franchise/register`,data)
    // localStorage.setItem('franchiseToken',response.data.token)
    // localStorage.setItem('franchiseData', JSON.stringify(response.data.franchise));
    return response.data
}

const Login = async (data) => {
    const response = await axios.post(`${base_url}franchise/login`,data)
    localStorage.setItem('franchiseToken',response.data.token)
    localStorage.setItem('franchiseData', JSON.stringify(response.data.franchise));
    return response.data
}

const getCurrentFranchise = async (id) => {
    const response = await axios.get(`${base_url}franchise/${id}`)
    return response.data
}

const editFranchise = async (data) => {
    const response = await axios.put(`${base_url}franchise/edit-franchise/${data.id}`,data)
    return response.data
}

const editProfilePicture = async (data) => {
    const response = await axios.put(`${base_url}franchise/edit-profile-picture`,data)
    return response.data
}

const deleteProfilePicture = async (id) => {
    const response = await axios.delete(`${base_url}franchise/delete-profile-picture/${id}`)
    return response.data
}

const createKyc = async (data) => {
    console.log(data)
    // const formData = data.fromDataToSend;
    const response = await axios.post(`${base_url}franchise/kyc`,data)
    return response.data
}

const getRefFranchise = async (id) => {
    // console.log(data)
    // const formData = data.fromDataToSend;
    const response = await axios.get(`${base_url}franchise/ref/${id}`)
    return response.data
}

const getAllFranchise = async () => {
    
    const response = await axios.get(`${base_url}franchise/all`)
    return response.data
}


const AddMember = async (data) => {
    const response = await axios.post(`${base_url}user/register`,data)
    return response.data
}

const requestPayout = async (data) => {
    const response = await axios.post(`${base_url}franchise/request-payout`,data)
    return response.data
}

const getPayOutByFranchise = async (id) => {
    const response = await axios.get(`${base_url}franchise/payouts/${id}`)
    return response.data
}

const generateRegisterLink = async (data) => {
    const response = await axios.post(`${base_url}franchise/generate-registration-link`,data)
    return response.data
}


const FranchiseService = {Register,Login,getCurrentFranchise,editFranchise,editProfilePicture,deleteProfilePicture,createKyc,getRefFranchise,getAllFranchise,AddMember,requestPayout,getPayOutByFranchise,generateRegisterLink}

export default FranchiseService