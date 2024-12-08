import axios from 'axios'
import { base_url } from '../../utils/base_url'


const Login = async (data) => {
    const response = await axios.post(`${base_url}admin/login`,data)
    localStorage.setItem('adminToken',response.data.token)
    localStorage.setItem('adminData', JSON.stringify(response.data.Admin));
    return response.data
}

const GetAllEnquiries = async () => {
    const response = await axios.get(`${base_url}enquiry/get-all`)
    return response.data
}

const GetUsersWithActivePlans = async () => {
    const response = await axios.get(`${base_url}plan/active-plans`)
    return response.data
}

const GetUsersWithoutPlans = async () => {
    const response = await axios.get(`${base_url}plan/free-users`)
    return response.data
}

const GetTodayJoinedUsers = async () => {
    const response = await axios.get(`${base_url}plan/users-joined-today`)
    return response.data
}

const GetUsersRegisterationByDate = async (data) => {
    const response = await axios.get(`${base_url}plan/users/${data.startDate}/${data.endDate}`)
    return response.data
}

const AddMember = async (data) => {
    const response = await axios.post(`${base_url}user/register`,data)
    return response.data
}

const DeleteMember = async (id) => {
    const response = await axios.delete(`${base_url}user/delete-member/${id}`)
    return response.data
}

const DeleteEnquiry = async (id) => {
    const response = await axios.delete(`${base_url}enquiry/${id}`)
    return response.data
}

const AdminService = {Login,GetAllEnquiries,GetUsersWithActivePlans,GetUsersWithoutPlans,GetTodayJoinedUsers,GetUsersRegisterationByDate,AddMember,DeleteMember,DeleteEnquiry}

export default AdminService