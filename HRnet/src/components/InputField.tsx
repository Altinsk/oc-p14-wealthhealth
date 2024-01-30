import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
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
          className="block uppercase text-green-600 text-xs font-bold mb-2"
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
          className="border-0 px-3 py-3 placeholder-green-300 text-green-600
                                                   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                                                   ease-linear transition-all duration-150"
        />
      </div>
    </div>
  );
};

export default InputField;
