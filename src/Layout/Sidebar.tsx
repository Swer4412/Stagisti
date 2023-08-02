import { Link, Outlet } from 'react-router-dom';
import { SiWindows11 } from "react-icons/si"
import { LuScreenShare } from "react-icons/lu"
import { BiError } from "react-icons/bi"
import { MdHardware } from "react-icons/md"
import { FaRegLightbulb } from "react-icons/fa"

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
              <Link to={url + "windows"} className="px-4 py-2 hover:bg-gray-700 inline-flex items-center ">
                <SiWindows11 /> <p className='ml-2'>Windows</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "setup"} className="px-4 py-2 hover:bg-gray-700 inline-flex items-center">
                <LuScreenShare /> <p className='ml-2'>Setup</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "errori"} className="px-4 py-2 hover:bg-gray-700 inline-flex items-center">
                <BiError /> <p className='ml-2'>Errori</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "hardware"} className="px-4 py-2 hover:bg-gray-700 inline-flex items-center">
                <MdHardware /> <p className='ml-2'>Hardware</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "curiosita"} className="px-4 py-2 hover:bg-gray-700 inline-flex items-center">
                <FaRegLightbulb /><p className='ml-2'>Curiosità</p>
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
