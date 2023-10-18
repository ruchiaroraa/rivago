import { TableBody, TableHead, TableRow, Table, TableCell, TableContainer, Paper, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {getData} from '../service/api'
import { useParams} from 'react-router'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box,  Stack , Divider,Card} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update'

const Show=()=>{
   


    useEffect(()=>{
            getmovieData()
            // getSingleFileList()
            
    }, [])

    const [movie,setMovie] = useState([])  


// const [singleFiles, setSingleFiles] = useState([])


// const getSingleFileList= async()=>{
//     try {
//         const filelist = await getuploadedFIle();
//         setSingleFiles(filelist)
//     } catch (error) {
//         console.log(error)
//     }
// }


const {id} = useParams()

    const getmovieData= async ()=>{
        const response = await getData()
        console.log(response.data)
        setMovie (response.data)
        
    }
    console.log(movie + 'dkehle')
    // const deletemovieData=async(id)=>{
    //     await deleteData(id);
    //     getmovieData();
    // }


    return(
        <>
       <div className="my-5">
            <h1 className="text-center"> Our Destinations</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className='row'>
            <div className="col-10 mx-auto">
                    <div className="row gy-4">  
                    {movie.map((md)=>(
                        <>
                               <div className="col-md-4 col-10 mx-auto">
                               <div className="card" >
                                   <img src={md.picture} className="card-img-top" alt="..."/>
                               <div className="card-body">
                                   <h5 className="card-title font-weight-bold">{md.name}</h5>
                                <p className="card-text">{md.description}</p>
                                <p className="card-text">{md.type} price: {md.amount}</p>
                                   <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Show;