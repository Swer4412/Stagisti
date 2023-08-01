import { Link, Outlet } from 'react-router-dom';

const url = "/Stagisti/"

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      <div className="w-64 flex flex-col text-white font-bold font-sans">
        <div className="flex items-center justify-center h-14 border-b border-gray-700">
          <Link to={url} className="px-4 py-2 hover:bg-gray-700 text-3xl">
            <div>Stagisti</div>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col py-4">
            <li className="m-2">
              <Link to={url + "windows"} className="px-4 py-2 hover:bg-gray-700 ">
                Windows
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "setup"} className="px-4 py-2 hover:bg-gray-700 ">
                Setup
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "errori"} className="px-4 py-2 hover:bg-gray-700 ">
                Errori
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "hardware"} className="px-4 py-2 hover:bg-gray-700 ">
                Hardware
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "curiosita"} className="px-4 py-2 hover:bg-gray-700 ">
                Curiosità
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-grow bg-gray-100 justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
