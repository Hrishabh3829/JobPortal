import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Signup } from "./components/auth/Signup.jsx"
import { Home } from "./components/Home.jsx"
import { Jobs } from "./components/auth/Jobs.jsx"
import { Browse } from "./components/auth/Browse.jsx"
import { Profile } from "./components/Profile.jsx"
import { JobDescription } from "./components/JobDescription.jsx"
import { Companies } from "./components/admin/Companies.jsx"
import { ComapniesCreate } from "./components/admin/ComapniesCreate.jsx"
import { CompaniesSetup } from "./components/admin/CompaniesSetup.jsx"




const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  //admin routes
  {
    path: '/admin/companies',
    element: <Companies />
  },
  {
    path: '/admin/companies/create',
    element: <ComapniesCreate />
  },
  {
    path: '/admin/companies/:id',
    element: <CompaniesSetup />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
