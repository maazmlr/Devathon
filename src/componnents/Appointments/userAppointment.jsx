import React, { useEffect, useState } from 'react'
import SignIn from '../Signin'
import AppointmentDetails from './AppointmentDetails'
import axios from 'axios';

const UserAppointment = () => {

    const [appointments,setAppointments]=useState([])
    const uid=localStorage?.getItem('uid');
    console.log(uid)

    useEffect(()=>{
        axios.get(`https://doc-app-backend.vercel.app/userAppointment/${uid}`).then(res=>setAppointments(res.data.appointments))
    },[])

    const elements=appointments?.map((v,i)=><AppointmentDetails
    key={i}
    docName={v.other.doctorName}
    reason={v.other.reasonForAppointment}
    day={v.other.preferredDateAndTime}
    type={v.other.typeOfAppointment}
    />)
    console.log(appointments)


  return (
    <>
    {elements}
    </>
    )
}

export default UserAppointment