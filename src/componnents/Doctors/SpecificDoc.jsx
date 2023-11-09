import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const SpecificDoc = () => {
    const params=useParams()
    console.log(params.id)
    useEffect(()=>{
    
    },[])
  return (
    <div>SpecificDoc</div>
  )
}
