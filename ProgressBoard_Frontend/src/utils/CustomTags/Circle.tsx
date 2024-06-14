import React from 'react'

type CircleType = {
  color : string,
  onClick ?: () => void,
  active ?: boolean
}


const Circle : React.FC<CircleType> = ({color , onClick , active}) => {
  return (
    <div onClick={onClick} style={{backgroundColor : color , 
                                    cursor:'pointer'
                                  }} 
          className={`h-5 w-5 rounded-full border-2 ${active ? 'border-text p-2 dark:border-dark-text' : 'border-transparent'}`}>

    </div>
  )
}

export default Circle