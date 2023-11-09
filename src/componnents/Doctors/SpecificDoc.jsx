import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const SpecificDoc = () => {
    const params=useParams()
    console.log(params.id)
    useEffect(()=>{
    
    },[])
  return (
    <>
    <Button variant="contained">Back to Doctors</Button>
    
    <div className="info-container flex items-start">

      <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className=' h-fit w-2/4'/>
      <div className="doc-info">
        <p className='text-4xl text-gray-900 dark:text-white'>Full Name: loem ipsunsb</p>
        <p className='text-4xl'>DAYS: loem ipsunsb</p>
        <p className='text-4xl'>timing: loem ipsunsb</p>
      </div>
    </div>
    </>
  )
}
