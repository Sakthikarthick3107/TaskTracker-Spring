import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Options = () => {
    const isOpen = useSelector((state : RootState) => state.ui.areOptionsOpen);


  return (
    <div className={`w-[200px] shadow-lg drop-shadow-xl h-full bg-background dark:bg-dark-background fixed top-10 left-0
                    transition duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-[100%]'}
            `}>

    </div>
  )
}

export default Options