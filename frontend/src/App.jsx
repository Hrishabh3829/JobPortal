import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavbarOne from "./components/shared/NavbarOne.jsx"
import { Login } from "./components/auth/Login"
import { Signup } from "./components/auth/Signup"
import { Home } from "./components/Home"
import { Jobs } from "./components/auth/Jobs.jsx"




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
  },
  {
    path:'/jobs',
    element:<Jobs/>
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
