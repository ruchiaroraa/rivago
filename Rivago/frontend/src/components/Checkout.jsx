import React from "react";
import Destinationcard from "./Destinationcard";
import Imgdata from "./Imgdata";
import { useEffect } from "react";
import {getData, deleteData} from '../service/purchaseApi'
import { useState } from "react";
import { useParams} from 'react-router'
import { Link } from 'react-router-dom'

const Checkout = () => {

        useEffect(()=>{
                getpaymentData()
        },[])

        const [mydata,setMydata] = useState([])
        const {id} = useParams()
        const getpaymentData = async()=>{
            const response = await getData()
            console.log(response.data)
            setMydata(response.data)
        }
            console.log(mydata + '-------')

            const deletepackageData=async(id)=>{
                await deleteData(id);
                getpaymentData();
            }
    return(
        <>


        
        <div className="container-fluid mb-5">
            <div className='row'>
            <div className="col-10 mx-auto">
            <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>This is your final Package</h2>
        <p className="text-center" style={{color:'#fff'}}>Please Proceed</p> 
                    <div className="row gy-4">  
                    {mydata.map((md)=>(
                        <>
                           <div className="card text-bg-success mb-3" style={{maxWidth:'18rem',backgroundColor:'skyblue'}}>
  <div className="card-header">Personal Package</div>
  <div className="card-body">
                    <h5 className="card-title">No. of persons : {md.persons}</h5>
                    <p className="card-text">Mode of transport : {md.transportMode}</p>
                    {/* <a href={`/edit/${md._id}`}>Edit</a> */}
                    <button><a href={`/edit/${md._id}`} className="text-white text-center" style={{textDecoration:'none' ,border:'1px solid white', padding:'0.9rem'}}>Edit</a></button>
                    {/* <button onClick={()=>deletepackageData(md._id)} style={{color:'#2bacc6'}}>Delete</button> */}
                    <button onClick={()=>deletepackageData(md._id)} className="text-white text-center" style={{textDecoration:'none' ,border:'1px solid white', padding:'0.9rem'}} >Delete</button>
  </div>
</div>

                       </>
                    ))}  
            
                       
                    </div>
                </div>
                </div>
                </div>

                <center><button><a href= '/payment' className="text-white text-center" style={{textDecoration:'none' ,border:'1px solid white', padding:'0.9rem'}}>Pay Now</a></button></center>
            
        </>
    )
}

export default Checkout ; 