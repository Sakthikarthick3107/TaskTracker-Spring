import React, { ChangeEvent, useState } from 'react';

type InputType = {
    type: 'text' | 'textarea',
    placeholder?: string,
    name?: string,
    value?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputField: React.FC<InputType> = ({ type, placeholder = "Enter any...", name, value, onChange }) => {
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
            {type === 'textarea' ? (
                <textarea
                    className="w-full outline-none bg-transparent border border-primary p-2 my-2 resize-none rounded-md"
                    placeholder={focused || value ? '' : placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete="off"
                    rows={5}
                />
            ) : (
                <input
                    className="w-full border-0 outline-none bg-transparent border-b border-primary py-2 my-2"
                    type={type}
                    placeholder={focused || value ? '' : placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    autoComplete="off"
                />
            )}
            <label
                className={`absolute left-0 -top-2 transition-all duration-500 ease-in-out pointer-events-none font-medium ${focused || value ? 'text-sm opacity-100 text-primary' : 'opacity-0'}`}
                style={{ top: focused || value ? type === 'textarea' ? '-1rem' : '-0.5rem' : '30%' }}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default InputField;
