import axios from 'axios'

const url = 'http://localhost:5000/payment'



export const addData =async(data)=>{
    return await axios.post(`${url}/addpayment`,data)
}

export const getData = async(id)=>{
    id=id || ''
    return await axios.get(`${url}/showpayment/${id}`)
}

export const editData=(id,data)=>{
    return axios.put(`${url}/edit/${id}`,data)
}


export const deleteData = async(id)=>{
    return await axios.delete(`${url}/deldata/${id}`)
}
