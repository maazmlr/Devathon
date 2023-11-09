import React from 'react'
import { useParams } from 'react-router-dom'

export const SpecificDoc = () => {
    const params=useParams()
    console.log(params.id)
  return (
    <div>SpecificDoc</div>
  )
}
