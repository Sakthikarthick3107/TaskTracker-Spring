import React, { ChangeEvent } from 'react'

type LineInputType = {
    type ?: string,
    placeholder ?: string,
    name ?: string,
    value ?: string,
    onChange ?: (event:ChangeEvent<HTMLInputElement>) => void
}

const LineInput : React.FC<LineInputType> = ({type , placeholder="Enter any..." , name , value , onChange}) => {
  return (
    <input 
        className={`w-full border-0 outline-none bg-transparent border-b-2 border-primary py-2`}
        type={type}  
        placeholder={placeholder} 
        name={name} value={value} 
        onChange={onChange} />
  )
}

export default LineInput