import React, { useEffect, useState } from 'react'
import AppointmentDetails from './AppointmentDetails'
import axios from 'axios';
import Link from '../../Link';


const loader=()=>{
  return(
    <span className="loading loading-infinity loading-lg flex justify-center" style={{width:'20rem'}}></span>
  )
}

const UserAppointment = () => {

    const [appointments,setAppointments]=useState(null)
    const uid=localStorage?.getItem('uid');
    console.log(uid)

    useEffect(()=>{
      try {
          axios.get(`${Link}/userAppointment/${uid}`).then(res=>setAppointments(res.data.appointments))
                
      } catch (error) {
        
      }
    },[])
    console.log(appointments)
    const elements=appointments?.map((v,i)=><AppointmentDetails
    key={i}
    docName={v.other?.doctorName}
    reason={v.other?.reasonForAppointment}
    day={v.other?.preferredDateAndTime}
    type={v.other?.typeOfAppointment}
    />)
    console.log(appointments)


  return (
    <>
  { 
  appointments ? elements : 
 <div className='flex justify-center'>
  {loader()}
 </div>
}  
    </>
    )
}

export default UserAppointment