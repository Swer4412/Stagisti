import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Welcome from "./Pages/Welcome"
import Sidebar from './Layout/Sidebar'
import Windows from './Pages/Windows'
import Setup from './Pages/Setup'
import Errori from './Pages/Errori'
import Hardware from './Pages/Hardware'
import Curiosita from './Pages/Curiosita'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/Stagisti" element={<Sidebar/>}>
      <Route index element={<Welcome/>}/>
      <Route path="/Stagisti/windows" element={<Windows/>}/>
      <Route path="/Stagisti/setup" element={<Setup/>}/>
      <Route path="/Stagisti/errori" element={<Errori/>}/>
      <Route path="/Stagisti/hardware" element={<Hardware/>}/>
      <Route path="/Stagisti/curiosita" element={<Curiosita/>}/>
      <Route path="*" element={<h1>Pagine inesistente</h1>}></Route>
    </Route>
  ))

  return (
    <RouterProvider router= {router}/>
  )
}

export default App
