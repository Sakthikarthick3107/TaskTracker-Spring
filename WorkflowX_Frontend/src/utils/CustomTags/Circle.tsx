import React from 'react'

type CircleType = {
  color : string,
  onClick ?: () => void,
  active ?: boolean,
  className ?: string
}


const Circle : React.FC<CircleType> = ({color , onClick , active , className}) => {
  return (
    <div onClick={onClick} style={{backgroundColor : color , 
                                    cursor:'pointer'
                                  }} 
          className={`h-5 w-5 rounded-full border-2 ${active ? 'border-text p-2 dark:border-dark-text' : 'border-transparent'} ${className}`}>

    </div>
  )
}

export default Circle