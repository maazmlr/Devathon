import React, { useEffect, useState } from 'react'
import DocCard from './DocCard'
import Buttons from './butonns'
import axios from 'axios'

export const Doctoer = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
      axios.get('http://localhost:3000/doctors')
      .then(res=>setData(res.data))
  },[])
  console.log(data)
  return (
    <>
    <div className="button-container"><Buttons/></div>
    <div style={{display:'flex',flexGrow:'revert',flexWrap:'wrap', justifyContent:'space-between'}}>

      <DocCard/>
      <DocCard/>
      <DocCard/>
      <DocCard/>  
      <DocCard/>  
    </div>
    </>


  )
}
