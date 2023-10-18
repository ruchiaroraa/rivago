import React, { useState, useEffect } from 'react'
import {getData,editData} from '../service/purchaseApi'
import { useParams} from 'react-router'
import {useHistory} from 'react-router'
const EditPurchase=()=>{
const history = useHistory()
    const {id} = useParams()

useEffect(()=>{
    editpackageData();
},[]);


    const [data,setData] = useState({
        persons:'',
        transportMode:''
    })

    const editpackageData=async()=>{
        const response= await getData(id)
        setData (response.data)


    }
        const handleChange=(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setData({...data,[name]:value})
            console.log(data)
        }
var url = "/checkout"
            const handleSubmit=async()=>{
                    await editData(id,data)
                    console.log(data)
                    window.open('/checkout', '_self')
            }
    return(
        <>
        
        <section>
        <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>Thank you for selecting the package</h2>
        <p className="text-center" style={{color:'#fff'}}>please fill the next steps and proceed to payment gateway</p>
            <div className="register">
              <div className="col-1">
            
              
              <h2>Fill your details</h2>
                
                <form id="form" className="flex flex-col"> 
                    <input onChange={handleChange} name='persons' value={data.persons} type="number" placeholder="no. of person" />
                    <input onChange={handleChange} name='transportMode' value={data.transportMode} type="text" placeholder="By plane,train,bus only" />

                    <button onClick={()=>handleSubmit()} className="btn">Submit</button>
                </form>
            </div>
            
        </div>
        </section>
        </>
    )
}


export default EditPurchase