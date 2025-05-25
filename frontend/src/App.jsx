import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import NavbarOne from "./components/shared/NavbarOne.jsx"
import { Login } from "./components/auth/Login"
import { Signup } from "./components/auth/Signup"
import { Home } from "./components/Home"




const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
