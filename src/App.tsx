import {Route, Routes, useLocation } from 'react-router-dom'
import Welcome from "./Pages/Welcome"
import Sidebar from './Layout/Sidebar'
import Windows from './Pages/Windows'
import Setup from './Pages/Setup'
import Errori from './Pages/Errori'
import Hardware from './Pages/Hardware'
import Curiosita from './Pages/Curiosita'
import Altro from './Pages/Altro'
import NotFound from './Pages/NotFound'
import { useEffect } from 'react'

function App() {
  // come non detto, ora funziona correttamente
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  return (
    <Routes>
      <Route path="/Stagisti" element={<Sidebar />}>
        <Route index element={<Welcome />} />
        <Route path="/Stagisti/windows" element={<Windows />} />
        <Route path="/Stagisti/setup" element={<Setup />} />
        <Route path="/Stagisti/errori" element={<Errori />} />
        <Route path="/Stagisti/hardware" element={<Hardware />} />
        <Route path="/Stagisti/curiosita" element={<Curiosita />} />
        <Route path="/Stagisti/altro" element={<Altro />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
