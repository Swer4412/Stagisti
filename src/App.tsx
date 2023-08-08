import {Route, Routes } from 'react-router-dom'
import Welcome from "./pages/Welcome"
import Sidebar from './layout/Sidebar'
import Windows from './pages/Windows'
import Setup from './pages/Setup'
import Errori from './pages/Errori'
import Hardware from './pages/Hardware'
import Curiosita from './pages/Curiosita'
import NotFound from './pages/NotFound'

function App() {
  /* crea problemi se segui la guida passo passo
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  */

  return (
    <Routes>
      <Route path="/Stagisti" element={<Sidebar />}>
        <Route index element={<Welcome />} />
        <Route path="/Stagisti/windows" element={<Windows />} />
        <Route path="/Stagisti/setup" element={<Setup />} />
        <Route path="/Stagisti/errori" element={<Errori />} />
        <Route path="/Stagisti/hardware" element={<Hardware />} />
        <Route path="/Stagisti/curiosita" element={<Curiosita />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
