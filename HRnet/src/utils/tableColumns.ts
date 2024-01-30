import Employee from "../types/employee.ts";

export const tableColumns = [
    {
        name: 'First Name',
        selector: (row: Employee) => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row: Employee) => row.lastName
    },
    {
        name: 'Start Date',
        selector: (row: Employee) => row.startDate
    },
    {
        name: 'Date Of Birth',
        selector: (row: Employee) => row.dateOfBirth
    },
    {
        name: 'Street',
        selector: (row: Employee) => row.street
    },
    {
        name: 'City',
        selector: (row: Employee) => row.city
    },
    {
        name: 'State',
        selector: (row: Employee) => row.state
    },
    {
        name: 'Zip Code',
        selector: (row: Employee) => row.zipCode
    }
];
