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
import { AdminJob } from "./components/admin/AdminJob.jsx"
import { PostJob } from "./components/admin/PostJob.jsx"
import { Applicants } from "./components/admin/Applicants.jsx"




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
  {
    path: '/admin/jobs',
    element: <AdminJob />
  },
  {
    path: '/admin/jobs/create',
    element: <PostJob />
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: <Applicants />
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
