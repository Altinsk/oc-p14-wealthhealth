import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="w-full h-[70vh] flex justify-center space-y-6 text-center flex-col">
      <h1 className="text-8xl font-bold bg-clip-text bg-gradient-to-r from-green-500 to-green-900 text-transparent">
        Hello HRnet App
      </h1>
      <p className="text-xl text-[Roboto] font-semibold">
        Please choose an option
      </p>
      <div className="flex justify-center space-x-8">
        <Link
          to={`new-employee`}
          className="bg-green-500 hover:bg-green-900 text-white font-bold py-3 px-5 rounded-xl mt-4"
        >
          Add employee
        </Link>
        <Link
          to={`employees`}
          className="bg-green-500 hover:bg-green-900 text-white font-bold py-3 px-5 rounded-xl mt-4"
        >
          View employees
        </Link>
      </div>
    </div>
  );
}
