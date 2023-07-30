import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Welcome from "./Pages/Welcome"
import Sidebar from './Layout/Sidebar'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/Stagisti" element={<Sidebar/>}>
      <Route index element={<Welcome/>}></Route>
      <Route path="*" element={<h1>Pagine inesistente</h1>}></Route>
    </Route>
  ))

  return (
    <RouterProvider router= {router}/>
  )
}

export default App
