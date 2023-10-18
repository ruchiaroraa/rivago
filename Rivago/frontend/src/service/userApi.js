import axios from 'axios'

const url = 'http://localhost:5000/user'


export const addUser=async(data)=>{
    return await axios.post(`${url}/adduser`,data)
}