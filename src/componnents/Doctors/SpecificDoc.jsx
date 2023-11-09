import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


export const SpecificDoc = () => {
    const params=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
      axios.get(`http://localhost:3000/oneDoc/${params.id}`)
      .then(res=>setData(res.data))
    
    },[])
    console.log(data)
  return (
    <>
    <Button variant="contained">Back to Doctors</Button>
    
    <div className="card card-side bg-base-100 shadow-xl my-10">
  <figure><img src="https://media.istockphoto.com/id/1412215823/photo/portrait-of-confident-black-doctor.webp?b=1&s=170667a&w=0&k=20&c=OYMxE7FwQja9v4UFYWW8cX4vcLZj-vN2d12c03-kzBU=" alt="Movie"/></figure>
  <div className="card-body">
  <div className=" flex justify-start">
      <h1 className='text-gray-900 text-7xl dark:text-white mb-10'>{data.category}</h1>
    </div>
    <h2 className="card-title">Name :{data.name}</h2>
    <h2 className="card-title"><WatchLaterIcon/> :{data.timing}</h2>
    <h2 className="card-title"><CalendarMonthIcon/> : {data.days}</h2>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>
    </>
  )
}
