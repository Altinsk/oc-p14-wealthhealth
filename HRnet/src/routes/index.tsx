import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import EmployeeList from '../pages/EmployeeList.tsx';
import Hero from '../components/Hero.tsx';
import EmployeeForm from '../pages/EmployeeForm.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/employees',
        element: <EmployeeList />,
      },
      {
        path: '/new-employee',
        element: <EmployeeForm />,
      },
      {
        path: '*',
        element: <Hero />,
      },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
  },
]);
