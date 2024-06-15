import React, { ChangeEvent } from 'react'



type SelectInputType = {
    name ?: string,
    value?: string,
    options : string[]
    onChange ?: (event : ChangeEvent<HTMLSelectElement>) => void,
    className ?: string
}

const SelectInput : React.FC<SelectInputType> = ( { name , value , onChange , options , className }) => {
  return (
    <div className='flex flex-col'>
    <label className={`text-sm font-medium text-primary ${className}`} htmlFor={name}>{name[0].toUpperCase() + name?.substring(1)}</label>
    <select className='bg-transparent outline-none py-2 border-0 border-b border-primary' name={name} value={value} onChange={onChange}>
        {options.map((choice,index) =>(
            <option  key={index} className='p-2 text-text dark:text-dark-text bg-background dark:bg-dark-background' value={choice}>
                {choice}
            </option>
        ))}
    </select>
    </div>
  )
}

export default SelectInput