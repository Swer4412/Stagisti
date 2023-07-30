import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai"

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      <div className="w-64 flex flex-col">
        <div className="flex items-center justify-center h-14 border-b border-gray-700">
          <h1 className="text-xl font-bold inline"><AiFillHome/>Home</h1>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col py-4">
            <li className="m-2">
              <Link to="/" className="px-4 py-2 hover:bg-gray-700 ">
                Windows
              </Link>
            </li>
            <li className="m-2">
              <Link to="/about" className="px-4 py-2 hover:bg-gray-700 ">
                Setup
              </Link>
            </li>
            <li className="m-2">
              <Link to="/contact" className="px-4 py-2 hover:bg-gray-700 ">
                Errori
              </Link>
            </li>
            <li className="m-2">
              <Link to="/contact" className="px-4 py-2 hover:bg-gray-700 ">
                Hardware
              </Link>
            </li>
            <li className="m-2">
              <Link to="/contact" className="px-4 py-2 hover:bg-gray-700 ">
                Curiosità
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-grow bg-gray-100">
        <Outlet/>
      </main>
    </div>
  );
};

export default Sidebar;
