import axios from 'axios'
import { base_url } from '../../utils/base_url'

const AddCoupon = async (data) => {
    const response = await axios.post(`${base_url}coupon/add`,data)
    return response.data
}

const DeleteCoupon = async (id) => {
    const response = await axios.delete(`${base_url}coupon/delete/${id}`)
    return response.data
}

const GetAllCoupons = async () => {
    const response = await axios.get(`${base_url}coupon/all`)
    return response.data
}

const AllotCoupons = async (data) => {
    const response = await axios.post(`${base_url}coupon/allot-coupons`,data)
    return response.data
}

const CouponService = {AddCoupon,DeleteCoupon,GetAllCoupons,AllotCoupons}

export default CouponService