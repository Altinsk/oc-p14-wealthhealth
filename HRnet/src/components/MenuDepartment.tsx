import React from 'react';

interface MenuDepartmentProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required: boolean;
}

const MenuDepartment: React.FC<MenuDepartmentProps> = ({
  name,
  id,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="w-full lg:w-full px-4">
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blue-600 text-xs font-bold mb-2">
          Department
        </label>
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        >
          <option value="">Choose department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
    </div>
  );
};

export default MenuDepartment;
