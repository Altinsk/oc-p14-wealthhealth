import { createSlice } from '@reduxjs/toolkit';
import Employee from '../../types/employee.ts';

const initialState: Employee[] = [
  {
    firstName: 'Raul',
    lastName: 'Gonzaliz',
    dateOfBirth: '10/06/2009',
    startDate: '08/11/2019',
    city: 'Madrid',
    state: 'Madrid',
    street: '124 rue de Madrid, Madrid',
    department: 'Madrid',
    zipCode: '16742',
  },
];

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
