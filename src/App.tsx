import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Dashboard from "./Layout/Dashboard"
import Welcome from "./Pages/Welcome"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/Stagisti" element={<Dashboard/>}>
      <Route index element={<Welcome/>}></Route>
      <Route path="*" element={<h1>Non va Faccina Triste</h1>}></Route>
    </Route>
  ))

  return (
    <RouterProvider router= {router}/>
  )
}

export default App
