import React from "react";
import { useState } from "react";
import {addUser} from '../service/userApi'
const Signup = () => {


const [data,setData]= useState({
    name:'',
    email:'',
    password:'',
    number:'',
    address:''
})

        const handleChnage=(e)=>{
            const name = e.target.name;
            const value = e.target.value;
            setData({...data,[name]:value})

            console.log(data)
        }

        const handleSubmit=async()=>{
                await addUser(data)
                console.log(addUser)
        }
            
    return(
        <>
        <section>
        <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>Sign Up</h2>
        <p className="text-center" style={{color:'#fff'}}>Create an account</p>
            <div className="register">
              <div className="col-1">
              
              
                <form id="form" className="flex flex-col">
                    <input name="name" value={data.name} onChange={handleChnage} type="text" placeholder="name"/> 
                    <input name="email" value={data.email} onChange={handleChnage} type="email" placeholder="email" />
                    <input name="password" value={data.password} onChange={handleChnage} type="password" placeholder="password" />
                    <input name="number" value={data.number} onChange={handleChnage} type="tel" placeholder="number" />
                    <input name="address" value={data.address} onChange={handleChnage} type="text" placeholder="address" />


                    <button onClick={()=>handleSubmit()} className="btn">Log In</button>
                </form>
            </div>
            <div className="col-2">
               <img src="images/Destination3.png" alt="login image"/> 

            </div>
        </div>
        </section>
        
        </>

    )
}

export default Signup;