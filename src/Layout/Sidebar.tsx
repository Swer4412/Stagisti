import { Link, Outlet } from 'react-router-dom';
import { SiWindows11 } from "react-icons/si"
import { LuScreenShare } from "react-icons/lu"
import { BiError } from "react-icons/bi"
import { MdHardware } from "react-icons/md"
import { FaRegLightbulb, FaPlus} from "react-icons/fa"
import ScrollToTop from 'react-scroll-to-top';
import S from '/s.png'

const url = "/Stagisti/"

const Sidebar = () => {

  const link = "px-4 py-2 hover:bg-gray-700 inline-flex items-center rounded-lg"

  return (
    <div className="flex items-start min-h-screen">
      <div className="w-64 flex flex-col bg-gray-800 text-white font-bold font-sans sticky top-0 min-h-screen">
        <div className="flex items-center justify-center h-14 border-b border-gray-700">
          <Link to={url} className="px-4 py-2 hover:bg-gray-700 text-3xl inline-flex items-center">
            <img src={S} className="max-h-9 invert"/><div className='-tracking-tight'>tagisti</div>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col py-4">
            <li className="m-2">
              <Link to={url + "windows"} className={link}>
                <SiWindows11 /> <p className='ml-2'>Windows</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "setup"} className={link}>
                <LuScreenShare /> <p className='ml-2'>Setup</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "errori"} className={link}>
                <BiError /> <p className='ml-2'>Errori</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "hardware"} className={link}>
                <MdHardware /> <p className='ml-2'>Hardware</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "curiosita"} className={link}>
                <FaRegLightbulb /><p className='ml-2'>Curiosità</p>
              </Link>
            </li>
            <li className="m-2">
              <Link to={url + "altro"} className={link}>
                <FaPlus /><p className='ml-2'>Altro</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex flex-col flex-grow bg-gray-100 justify-center">
        <ScrollToTop smooth top={500} className='px-[6px]' />
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
