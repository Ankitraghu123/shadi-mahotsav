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

const EditProfile = async(data) => {
    const response = await axios.put(`${base_url}user/edit-profile/${data.id}`,data)
    return response.data
}

const UserService = {Register,Login,GetProfile,EditProfile}

export default UserService