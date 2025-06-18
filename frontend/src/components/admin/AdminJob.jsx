import React, { useEffect, useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchCompanyByText } from '../redux/companySlice'
import { AdminJobTable } from './AdminJobTable'
import { useGetAllAdminJobs } from '@/hooks/useGetAllAdminJobs'

export const AdminJob = () => {
  useGetAllAdminJobs()


  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(searchCompanyByText(input))
  }, [input])
  return (
    <div>
      <NavbarOne />
      <div className=' max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit" placeholder="Search by name or role" onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Jobs
          </Button>
        </div>
        <div>
          <AdminJobTable />
        </div>

      </div>
    </div>
  )
}
