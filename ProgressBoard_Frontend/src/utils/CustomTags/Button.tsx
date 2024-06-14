import React from 'react'

type CustomButtonType = {
    children ?: string,
    onClick ?: () => void,
    className ?: string
}

const CustomButton : React.FC<CustomButtonType> = ({children , onClick , className}) => {
  return (
    <button className={`text-white text-lg transition duration-100 ease-in-out bg-primary px-4 py-1 hover:bg-primary/60 rounded-lg shadow-sm shadow-black ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default CustomButton