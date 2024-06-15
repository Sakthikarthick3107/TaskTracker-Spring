import React, { useState, ChangeEvent } from 'react';

type DateInputType = {
    name ?: string,
    value : string,
    onChange ?: (e:ChangeEvent<HTMLInputElement>) => void
}

const DateInput: React.FC<DateInputType> = ({name , value , onChange}) => {


  return (
    <div>
        <label className='text-sm font-medium text-primary' htmlFor={name}>{name[0].toUpperCase() + name?.substring(1)}</label>
        <input name={name}
            type="date"
            value={value}
            onChange={onChange}
            className="bg-transparent outline-none w-full px-4 py-2 border-0 border-b border-primary  focus:outline-none focus:border-secondary text-gray-700 dark:text-gray-300"
            pattern="\d{4}-\d{2}-\d{2}"
        />
    </div>
    
  );
};

export default DateInput;
