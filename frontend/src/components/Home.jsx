import React, { useEffect } from 'react'
import NavbarOne from './shared/NavbarOne'
import { Herosection } from './Herosection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestJobs } from './LatestJobs'
import { Footer } from './Footer'
import { useGetAllJobs } from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  useGetAllJobs()
  const { user } = useSelector(store => store.auth)

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter'){
      navigate("/admin/companies")
    }


  }, [])
  return (
    <div>
      <NavbarOne />
      <Herosection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}
