
import './App.css'
import { Doctoer } from './componnents/Doctors/Doctoer'
import { SpecificDoc } from './componnents/Doctors/SpecificDoc'
import DrawerAppBar from './componnents/Header'
import { Home } from './componnents/Home/Home'
import { MainLayout } from './componnents/MainLayout'
import SignIn from './componnents/Signin'
import  Signup  from './componnents/Signup'

import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

function App() {
  
  const router=createBrowserRouter(createRoutesFromElements(
  <Route element={<MainLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='emergency' element={<Doctoer/>}/>
    <Route path='emergency/:id' element={<SpecificDoc/>}/>
  </Route>
    ))
  return(
    <RouterProvider router={router}/>
   
    )
  
}

export default App
