import React, { useEffect, useState } from 'react'

type AnimateTextType = {
    children : React.ReactNode,
    duration : number,
    className ?: string,
    onClick ?:  ()=> void
}

const AnimateText : React.FC<AnimateTextType> = ({children , duration , className , onClick}) => {
    const[visible , setVisible] = useState<boolean>(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, duration);
        return () => clearTimeout(timer);
    },[])

  return (
    <p onClick={onClick} className={`transition duration-500 ease-in-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}>
        {children}
    </p>
  )
}

export default AnimateText