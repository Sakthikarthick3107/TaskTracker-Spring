import React, { useEffect, useState } from 'react'

type AnimateTextType = {
    children : React.ReactNode,
    duration : number,
    className ?: string,
    onClick ?:  ()=> void,
    draggable ?: boolean,
    onDragStart ?: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
}

const AnimateText : React.FC<AnimateTextType> = ({children , duration , className , onClick , onDragStart , draggable}) => {
    const[visible , setVisible] = useState<boolean>(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, duration);
        return () => clearTimeout(timer);
    },[])

  return (
    <div onDragStart={onDragStart} draggable={draggable}  onClick={onClick} className={`transition duration-500 ease-in-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}>
        {children}
    </div>
  )
}

export default AnimateText