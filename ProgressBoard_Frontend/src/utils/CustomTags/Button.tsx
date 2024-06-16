import React from 'react'

type ButtonType = {
    children ?: React.ReactNode,
    onClick ?: () => void,
    className ?: string,
    type ?: 'submit' | 'reset'
}

const Button : React.FC<ButtonType> = ({children , onClick , className , type}) => {
  return (
    <button 
          className = {`text-white text-lg 
                      transition duration-300 
                      ease-in-out bg-primary px-4 py-1 
                      hover:bg-primary/60 rounded-lg shadow-sm 
                      shadow-black/50 ${className}`} 
                      onClick={onClick}
                      type={type}
                      >
        {children}
    </button>
  )
}

export default Button