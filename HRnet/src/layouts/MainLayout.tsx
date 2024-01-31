import Logo from '/logo.webp';
import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <div className="h-screen bg-green-50">
        <div className="border-b border-green-200">
          <div className="">
            <div className="w-full flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={Logo}
                  width="70"
                  height="70"
                  className="logo react"
                  alt="React logo"
                />
                <h1 className="text-2sl font-bold text-red-700">
                  Wealth Health
                </h1>
              </Link>
              <Link
                to="employees"
                className="text-xl text-decoration-line: none;
                text-green-700"
              >
                List Of Employees
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
