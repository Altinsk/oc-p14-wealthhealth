import { useState } from 'react';

import InputField from '../components/InputField.tsx';

export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <section>
        <div>
          <div>
            <div>
              <div>
                <h6>Create Employee</h6>
              </div>
            </div>
            <div>
              <form>
                <h6>User Information</h6>
                <div>
                  <div>
                    <InputField
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <InputField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <InputField
                      label="Date of Birth"
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <InputField
                      label="Start Date"
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-green-300" />

                <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Address
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <InputField
                      label="Street"
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <InputField
                      label="City"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <InputField
                      label="State"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <InputField
                      label="Zip Code"
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-full px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-green-600 text-xs font-bold mb-2">
                        Department
                      </label>
                      <select
                        name="department"
                        id="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
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

                  <button type="submit">Add employee</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
