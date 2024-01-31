import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addEmployee } from '../store/features/employee.ts';
import Modal from 'react-modal';
import InputField from '../components/InputField.tsx';
import { useNavigate } from 'react-router-dom';
import checked from './../assets/checked.png';

export default function EmployeeForm() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
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

  const handleSubmit = (e: any) => {
    console.log('employee added');
    e.preventDefault();
    dispatch(addEmployee(formData));
    setIsModalOpen(true);
  };

  const redirect = () => {
    setIsModalOpen(false);
    navigate('/employees');
  };

  return (
    <div>
      <section className="py-1 bg-green-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-green-700 text-xl font-bold">
                  Create Employee
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-green-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <InputField
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
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
                        className="border-0 px-3 py-3 placeholder-green-300 text-green-600
                                                    bg-white rounded text-sm shadow focus:outline-none focus:ring w-full
                                                    ease-linear transition-all duration-150"
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

                  <button
                    className="bg-green-800 text-white active:bg-pink-600 font-bold uppercase text-xs
                                        p-4 m-4 rounded shadow hover:shadow-md outline-none focus:outline-none
                                        ease-linear transition-all duration-150 w-full"
                    type="submit"
                  >
                    Add employee
                  </button>
                </div>
              </form>

              <Modal
                isOpen={isModalOpen}
                close={redirect}
                title="Employé ajouté avec succès"
                content={
                  <div className="flex w-full items-center justify-center">
                    <img src={checked} className="w-36" alt="checked" />
                  </div>
                }
              />
              <Modal isOpen={isModalOpen}>
                <button onClick={redirect}>close</button>
                <p>Employee Created!</p>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
