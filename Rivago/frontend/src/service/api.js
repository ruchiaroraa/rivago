import axios from 'axios'
const url = 'http://localhost:5000/movies'

export const getData = async(id)=>{
    id=id || ''
    return await axios.get(`${url}/${id}`) 
}

export const addData = async(data)=>{
    return await axios.post(`${url}/add`,data)
}

export const uploadFile = async(data)=>{
    try {
        return await axios.post(`${url}/file/upload`, data)
    } catch (error) {
        console.log('error while uploading image', error)
    }
   
}
// app.use(express.json())