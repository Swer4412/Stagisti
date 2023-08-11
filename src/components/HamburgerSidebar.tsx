import { FaBars } from "react-icons/fa"

const HamburgerSidebar = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);

  return ( <>
      {/* add a hamburger button that toggles the sidebar */}
      {/* use the sm:flex class to hide the button when the screen is at least sm */}
      {/* use the onClick event handler to change the state of the sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="sm:hidden p-4 bg-gray-800 text-white rounded-lg"
      >
        <FaBars size={24} color={"white"} />
      </button>

      {/* add a div element that wraps the sidebar and the main content */}
      {/* use the flex class to create a row layout for the sidebar and the main content */}
      {/* use a ternary operator to conditionally apply the hidden class based on the state of the sidebar */}
      <div className={`flex ${sidebarOpen ? "" : "hidden"}`}>
        {/* move the sidebar element inside the div element */}
        <div className="w-64 flex flex-col bg-gray-800 text-white font-bold font-sans sticky top-0 min-h-screen">
          {/* rest of the sidebar code */}
        </div>
        <main className="flex flex-col flex-grow bg-gray-100 justify-center">
          <ScrollToTop smooth top={500} className='sm:px-[6px] sm:block hidden' />
          <Outlet />
        </main>
      </div>
      </>
  );
}