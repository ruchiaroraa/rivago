import React, { useState , useEffect} from 'react'
import {addData,uploadFile} from '../service/api'
const AddPackage = () => {

const [data,setData] = useState({
    name:'',
    description:'',
    type:'',
    amount:'',
    picture:''

})

const handleChange=(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setData({...data, [name]:value})
    console.log(data)
}

const [file, setFile] = useState('');
const [image, setImage] = useState([])

useEffect(()=>{
    const getImage= async()=>{
        if(file){
            const fdata = new FormData;
            fdata.append('name', file.name)
            fdata.append('file', file)
       const image = await uploadFile(fdata); 
            data.picture = image.data       
            setImage (image.data)
        }
    }
    getImage()
}, [file])


const handleSubmit=async()=>{
        await addData(data)
        console.log('data======================', data)
        window.open('/destination', '_self')
} 

    return(
        <>
        <section>
        <h2 className="h1-responsive font-weight-bold text-center my-2 "style={{color:'#2bacc6'}}>Add New Package</h2>
  
  <div className="register">
    <div className="col-1">
            
              
             
                <form id="form" className="flex flex-col" > <input type="text" name="name" placeholder='name' value={data.name} onChange={handleChange}/> 
                    <input onChange={handleChange} name='description' value={data.description} type="text" placeholder="description" />
                    <input onChange={handleChange} name='type' value={data.type} type="text" placeholder="type" />
                    <input onChange={handleChange} name= 'amount' value={data.amount} type="number" placeholder="amount" />
                    <input type="file" name="picture"  onChange={(e)=> setFile(e.target.files[0])}/>

                    <button onClick={()=>handleSubmit()} className="btn"> Submit</button>
                </form>
            </div>
            
        </div>
        </section>
        
        </>

    )
}

export default AddPackage;