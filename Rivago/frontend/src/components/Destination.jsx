import React from "react";
import Destinationcard from "./Destinationcard";
import Imgdata from "./Imgdata";
import { useEffect } from "react";
import {getData} from '../service/api'
import { useState } from "react";
import { useParams} from 'react-router'

const Destination = () => {

        useEffect(()=>{
                getpackageData()
        },[])

        const [mydata,setMydata] = useState([])
        const {id} = useParams()
        const getpackageData = async()=>{
            const response = await getData()
            console.log(response.data)
            setMydata(response.data)
        }
            console.log(mydata + '-------')

          
    return(
        <>
        <div className="my-5">
        <h1 className="text-center" style={{color:'#2bacc6'}}> Our Packages</h1>
            <h5 className="text-center" style={{color:'#fff'}}>Life is journey</h5>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
            <div className="col-10 mx-auto">
                    <div className="row gy-4">  
                    {mydata.map((md)=>(
                        <>
                               <div className="col-md-4 col-10 mx-auto">
                               <div className="card" >
                                   <img src={md.picture} className="card-img-top" alt="..."/>
                               <div className="card-body">
                                   <h5 className="card-title font-weight-bold">{md.name}</h5>
                                <p className="card-text">{md.description}</p>
                                <p className="card-text">{md.type} price: {md.amount}</p>
                                   <a href="/purchase" className="btn btn-primary">Buy Package</a>
                               </div>
                              
                           </div>
                       </div>
                       </>
                    ))}  
            
                       
                    </div>
                </div>
                </div>
                </div>
            
        </>
    )
}

export default Destination ; 