import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col items-center flex-shrink-0 px-4 py-6 bg-gray-800">
        <a href="#" className="text-lg font-semibold tracking-widest text-gray-100 uppercase rounded-lg focus:outline-none focus:shadow-outline-gray">Home</a>
      </div>
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <nav className="flex-grow">
          <ul className="flex flex-col py-3 space-y-1">
            <li className="px-5">
              <a href="#" className="flex items-center text-sm font-semibold text-gray-900 transition-colors duration-150 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className="px-5">
              <a href="#" className="flex items-center text-sm font-semibold text-gray-900 transition-colors duration-150 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-4">Settings</span>
              </a>
            </li>
            <li className="px-5">
              <a href="#" className="flex items-center text-sm font-semibold text-gray-900 transition-colors duration-150 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-4">Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Dashboard;