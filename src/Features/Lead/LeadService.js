import axios from 'axios'
import { base_url } from '../../utils/base_url'

const AddLead = async (data) => {
    const response = await axios.post(`${base_url}lead/add`,data)
    return response.data
}

const EditLead = async (data) => {
    const response = await axios.put(`${base_url}lead/edit/${data._id}`,data)
    return response.data
}

const DeleteLead = async (id) => {
    const response = await axios.delete(`${base_url}lead/delete/${id}`)
    return response.data
}

const AllLeads = async () => {
    const response = await axios.get(`${base_url}lead/all`)
    return response.data
}

const AllLeadsByFranchise = async (id) => {
    const response = await axios.get(`${base_url}lead/franchise/${id}`)
    return response.data
}



const LeadService = {AddLead,EditLead,DeleteLead,AllLeads,AllLeadsByFranchise}

export default LeadService