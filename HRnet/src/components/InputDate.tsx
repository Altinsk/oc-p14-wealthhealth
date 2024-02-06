import React from 'react';

interface InputDateProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const InputDate: React.FC<InputDateProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="w-full">
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blue-800 text-xs font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
          ease-linear transition-all duration-150"
        />
      </div>
    </div>
  );
};

export default InputDate;
