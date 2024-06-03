import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const override={

    display:'block',
    margin:'100px auto',
}


export const Spinner = ({loading}) => {
  return (
    <ClipLoader
   

      color='green'
    loading={loading}
    cssOverride={override}  
    size={150} 
    />
  )
}
