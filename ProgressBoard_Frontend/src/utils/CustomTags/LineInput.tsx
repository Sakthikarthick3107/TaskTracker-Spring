import React, { ChangeEvent, useState } from 'react';

type LineInputType = {
    type?: string,
    placeholder?: string,
    name?: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const LineInput: React.FC<LineInputType> = ({ type, placeholder = "Enter any...", name, value, onChange }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        if (!value) {
            setFocused(false);
        }
    };

    return (
        <div className="relative">
            <input
                className={`w-full border-0 outline-none bg-transparent border-b-2 border-primary py-2 my-2`}
                type={type}
                placeholder={focused || value ? '' : placeholder} 
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label
                className={`absolute left-0 -top-2 transition-all duration-500 ease-in-out pointer-events-none font-medium ${focused || value ? 'text-sm opacity-100 text-primary' : 'opacity-0'}`}
                style={{ top: focused || value ? '-0.5rem' : '50%' }}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default LineInput;
